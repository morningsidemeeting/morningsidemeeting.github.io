import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { format } from "date-fns";
import { parseISO } from "date-fns/esm";
import Styles from "./files.module.scss";
import BackgroundImage from "gatsby-background-image";
import Gapi, { loadAndInitGapi } from "../gapi";

export const FOLDER_IDS = {
  business_minutes: "1z84XpKreg6-MZlShXk8_svqQQYX4R24z",
  newsletters: "1n4mL6JZWAdeaC9_BP6rgh3dNd5L2Jb2T",
  sotm: "1HjcVWx-afyh3quiEhwg9BSJJ6UcZ64_T",
  communications: "12_ZPd3N84heC06hrvSsFn8tE64j7ZU2W",
};

const BackgroundHeader = ({ className, fileType, children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        pdf: file(relativePath: { eq: "pdf.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        gdoc: file(relativePath: { eq: "gdoc.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      fragment childImgFields on ImageSharp {
        fluid(quality: 90, maxWidth: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    `
  );

  const imageData = data[fileType]
    ? data[fileType].childImageSharp.fluid
    : null;

  const headerStyles = {
    backgroundRepeat: "no-repeat",
    backgroundSize: "25px",
    backgroundPosition: "top left",
  };

  return imageData ? (
    <BackgroundImage
      Tag="header"
      className={className}
      fluid={imageData}
      style={headerStyles}
    >
      {children}
    </BackgroundImage>
  ) : (
    <header>{children}</header>
  );
};

async function fetchDrive(folderId, orderBy = "name", pageSize = 100) {
  // accept folder slugs as well as IDs:
  if (FOLDER_IDS[folderId]) {
    folderId = FOLDER_IDS[folderId];
  }
  return new Promise(async (resolve, reject) => {
    try {
      loadAndInitGapi().then((client) => {
        console.log("this is the client", client);
        client.drive.files
          .list({
            q: `'${folderId}' in parents`,
            orderBy,
            pageSize,
            fields:
              "files(id, name, description, starred, mimeType, webViewLink, createdTime, modifiedTime)",
          })
          .then(function (response) {
            resolve(response.result.files);
          });
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}

const Files = ({
  folderIds = [],
  orderBy,
  withModifiedOn = false,
  formatFileName,
}) => {
  const [files, setFiles] = useState([]);
  const [hasFetchedFiles, setHasFetchedFiles] = useState(false);

  async function fetchDriveFiles() {
    if (hasFetchedFiles) {
      return;
    }

    let loadedFiles = [];
    await Promise.all(
      folderIds.map(async (folderId) => {
        const folderFiles = await fetchDrive(folderId, orderBy);
        console.log(folderFiles);
        loadedFiles = loadedFiles.concat(...folderFiles);
      })
    );

    setHasFetchedFiles(true);
    setFiles(formatFiles(loadedFiles));
  }

  function formatFiles(files) {
    return files.map((f) => {
      const { modifiedTime, name } = f;
      return Object.assign({}, f, {
        modifiedTime: format(parseISO(modifiedTime), "yyyy-MM-dd"),
        name:
          formatFileName && typeof formatFileName === "function"
            ? formatFileName(name)
            : name,
      });
    });
    // return files;
  }

  function renderFile({
    id,
    name,
    webViewLink,
    description,
    modifiedTime,
    mimeType,
  }) {
    const modifiedOn = format(parseISO(modifiedTime), "yyyy-MM-dd");
    let fileType;
    switch (mimeType) {
      case "application/pdf":
        fileType = "pdf";
        break;
      case "application/vnd.google-apps.document":
      case "application/vnd.google-apps.shortcut":
        fileType = "gdoc";
        break;
      default:
        fileType = "unknown";
        break;
    }
    return (
      <li key={id} className={Styles[fileType]}>
        <BackgroundHeader fileType={fileType}>
          <a href={webViewLink}>{name}</a>
        </BackgroundHeader>
        {description ? <p>{description}</p> : null}
        {withModifiedOn === true ? (
          <span className={Styles.timestamp}>Modified on {modifiedOn}</span>
        ) : null}
      </li>
    );
  }

  function renderFiles() {
    if (hasFetchedFiles) {
      if (!files.length) {
        return <p>No files found.</p>;
      } else {
        return <ul className={Styles.files}>{files.map(renderFile)}</ul>;
      }
    } else {
      return <p>Loading files...</p>;
    }
  }

  useEffect(() => {
    fetchDriveFiles();
  });

  return (
    <React.Fragment>
      <Gapi />
      <section>{renderFiles()}</section>
    </React.Fragment>
  );
};
export default Files;
