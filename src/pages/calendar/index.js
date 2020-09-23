import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import CoreLayout from "../../components/coreLayout"

const CLIENT_ID = "AIzaSyA_vE8NXdGqTvS3KVKbMsEcEQy5V8-WKmg"
const API_KEY =
  "914511001806-psum5tklqtm6to1b9r20lnq1jaklbq4m.apps.googleusercontent.com"
const DISCOVERY_DOCS = [
  "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
]
const SCOPES = "https://www.googleapis.com/auth/calendar.readonly"

function getGapi() {
  return new Promise((resolve, reject) => {
    let sanity = 0
    waitForGapi()

    function waitForGapi() {
      sanity++
      if (typeof window === "undefined" || typeof window.gapi == "undefined") {
        if (sanity > 10) {
          reject("Could not find gapi")
        } else {
          setTimeout(waitForGapi, 1000)
        }
      } else {
        resolve(window.gapi)
      }
    }
  })
}

async function fetchCalendar() {
  return new Promise(async (resolve, reject) => {
    try {
      const gapi = await getGapi()
      gapi.load("client:auth2", () => {
        gapi.client
          .init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES,
          })
          .then(
            function () {
              gapi.client.calendar.events
                .list({
                  calendarId:
                    "d1kb6t7loimf7b9ib89to5d2hs@group.calendar.google.com",
                  timeMin: new Date().toISOString(),
                  showDeleted: false,
                  singleEvents: true,
                  maxResults: 10,
                  orderBy: "startTime",
                })
                .then(function (response) {
                  console.log("got some events", response.result.items)
                  resolve(response.result.items)
                })
            },
            function (error) {
              console.log("had a problem", error)
              reject(error)
            }
          )
      })
    } catch (error) {
      console.log(error)
      reject(error)
    }
  })
}

const CalendarPage = () => {
  const [events, setEvents] = useState([])
  const [hasFetchedEvents, setHasFetchedEvents] = useState(false)

  async function fetchCalendarEvents() {
    if (hasFetchedEvents) {
      return
    }
    const loadedEvents = await fetchCalendar()
    setHasFetchedEvents(true)
    setEvents(loadedEvents)
  }

  function renderEvents() {
    if (hasFetchedEvents) {
      return !events.length ? (
        <p>There are no upcoming events on the calendar.</p>
      ) : (
        <ul>
          {events.map(({ summary, id, start, end }) => {
            return <li key={id}>{summary}</li>
          })}
        </ul>
      )
    } else {
      return <p>Loading events from calendar...</p>
    }
  }

  useEffect(() => {
    fetchCalendarEvents()
  })

  return (
    <React.Fragment>
      <Helmet>
        <script async defer src="https://apis.google.com/js/api.js"></script>
      </Helmet>
      <CoreLayout withSubtitle={false}>
        <section>
          <h2>Calendar</h2>
          {renderEvents()}
        </section>
      </CoreLayout>
    </React.Fragment>
  )
}
export default CalendarPage
