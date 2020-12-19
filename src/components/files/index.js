import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { format } from "date-fns";
import { parseISO } from "date-fns/esm";
import Styles from "./files.module.scss";
import BackgroundImage from "gatsby-background-image";
import Gapi, { getGapi } from "../gapi";

const API_KEY = "AIzaSyCCOtjPgXJ5tIqEILv9gm5pCpOAbyV_3aY";
const CLIENT_ID =
  "1026426394881-dbessqt7532lnu3j8evh83qicmg6uhak.apps.googleusercontent.com";
const DISCOVERY_DOCS =
  "https://content.googleapis.com/discovery/v1/apis/drive/v3/rest";
const DEFAULT_FIELDS = [];
export const FOLDER_IDS = {
  business_minutes: "1z84XpKreg6-MZlShXk8_svqQQYX4R24z",
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
  return new Promise(async (resolve, reject) => {
    try {
      const gapi = await getGapi();
      gapi.load("client:auth2", () => {
        gapi.auth2.init({ client_id: CLIENT_ID }).then(function () {
          gapi.client.setApiKey(API_KEY);
          gapi.client.load(DISCOVERY_DOCS).then(function () {
            gapi.client.drive.files
              .list({
                q: `'${folderId}' in parents`,
                orderBy,
                pageSize,
                fields:
                  "files(id, name, description, starred, mimeType, webViewLink, createdTime, modifiedTime)",
              })
              .then(
                function (response) {
                  // Handle the results here (response.result has the parsed body).
                  resolve(response.result.files);
                },
                function (err) {
                  console.error("Execute error", err);
                  reject(err);
                }
              );
          });
        });
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}

const Files = ({ folderIds = [], orderBy }) => {
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
    setFiles(loadedFiles);
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
        <span className={Styles.timestamp}>Modified on {modifiedOn}</span>
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
