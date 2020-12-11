import React, { useState, useEffect, Fragment } from "react";
import { Helmet } from "react-helmet";
import { format } from "date-fns";
import { parseISO } from "date-fns/esm";
import Styles from "./files.module.scss";

const API_KEY = "AIzaSyCCOtjPgXJ5tIqEILv9gm5pCpOAbyV_3aY";
const CLIENT_ID =
  "1026426394881-dbessqt7532lnu3j8evh83qicmg6uhak.apps.googleusercontent.com";
const DISCOVERY_DOCS =
  "https://content.googleapis.com/discovery/v1/apis/drive/v3/rest";
const DEFAULT_FIELDS = [];

// These can be imported by pages using the calendar component, so they can
// refer by key to the one they'd like to include
export const FOLDER_IDS = {
  business_minutes: "1z84XpKreg6-MZlShXk8_svqQQYX4R24z",
};

function getGapi() {
  return new Promise((resolve, reject) => {
    let sanity = 0;
    waitForGapi();

    function waitForGapi() {
      sanity++;
      if (typeof window === "undefined" || typeof window.gapi == "undefined") {
        if (sanity > 10) {
          reject("Could not find gapi");
        } else {
          setTimeout(waitForGapi, 1000);
        }
      } else {
        resolve(window.gapi);
      }
    }
  });
}

async function fetchDrive(folderId, pageSize = 100) {
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

const Files = ({ folderIds = [FOLDER_IDS.business_minutes] }) => {
  const [files, setFiles] = useState([]);
  const [hasFetchedFiles, setHasFetchedFiles] = useState(false);

  async function fetchDriveFiles() {
    if (hasFetchedFiles) {
      return;
    }

    let loadedFiles = [];
    await Promise.all(
      folderIds.map(async (folderId) => {
        const folderFiles = await fetchDrive(folderId);
        console.log(folderFiles);
        loadedFiles = loadedFiles.concat(...folderFiles);
      })
    );

    setHasFetchedFiles(true);
    setFiles(loadedFiles);
    // const groupedEvents = groupEvents(loadedEvents);
    // setEvents(groupedEvents);
  }

  function groupEvents(events) {
    const eventsMap = new Map();
    return events
      .sort((evtA, evtB) => {
        const startA = getEventDate(evtA.start);
        const startB = getEventDate(evtB.start);

        if (startA > startB) {
          return 1;
        } else if (startB > startA) {
          return -1;
        } else {
          return 0;
        }
      })
      .reduce((acc, evt, i) => {
        const startMonth = format(parseEventISODate(evt.start), "MMMM");
        const monthEvents = acc.get(startMonth);
        if (!monthEvents) {
          acc.set(startMonth, [evt]);
        } else {
          acc.set(startMonth, monthEvents.concat(evt));
        }
        return acc;
      }, eventsMap);
  }

  function getEventDate(evt) {
    return evt.dateTime || evt.date;
  }

  function parseEventISODate(evt) {
    return parseISO(getEventDate(evt));
  }

  function displayDay(date) {
    return format(date, "MMMM d, y");
  }

  function displayTime(date) {
    return format(date, "h:mm aaaa");
  }

  function renderFile({ id, name, webViewLink, description }) {
    return (
      <p key={id}>
        <a href={webViewLink}>{name}</a>: {description}
      </p>
    );
  }

  // function renderEvent({
  //   summary,
  //   id,
  //   location,
  //   description,
  //   start,
  //   end,
  //   organizer,
  // }) {
  //   const { email: calendarId } = organizer;
  //   const startDate = parseEventISODate(start);
  //   const endDate = parseEventISODate(end);
  //   const startDayStr = format(startDate, "yyyy-MM-dd");
  //   const isSameDay = startDayStr === format(endDate, "yyyy-MM-dd");
  //   const displaySpan = isSameDay
  //     ? `${displayDay(startDate)}, ${displayTime(startDate)} to ${displayTime(
  //         endDate
  //       )}`
  //     : `${displayDay(startDate)}, ${displayTime(startDate)} to ${displayDay(
  //         endDate
  //       )}, ${displayTime(endDate)}`;
  //   return (
  //     <li key={id}>
  //       <header>{summary}</header>
  //       <time dateTime={startDayStr}>{displaySpan}</time>
  //       {location ? <span>{location}</span> : null}
  //       {description ? (
  //         <p dangerouslySetInnerHTML={{ __html: description }}></p>
  //       ) : null}
  //       {calendarId != CALENDAR_IDS.main ? (
  //         <footer>{organizer.displayName}</footer>
  //       ) : null}
  //     </li>
  //   );
  // }

  function renderFiles() {
    if (hasFetchedFiles) {
      if (!files.length) {
        return <p>No files found.</p>;
      } else {
        return files.map(renderFile);
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
      <Helmet>
        <script async defer src="https://apis.google.com/js/api.js"></script>
      </Helmet>
      <section>{renderFiles()}</section>
    </React.Fragment>
  );
};
export default Files;
