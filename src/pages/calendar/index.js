import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import { format } from "date-fns"
import CoreLayout from "../../components/coreLayout"
import Styles from "./calendar.module.scss"
import { parseISO } from "date-fns/esm"

const API_KEY = "AIzaSyCCOtjPgXJ5tIqEILv9gm5pCpOAbyV_3aY"
const CLIENT_ID =
  "1026426394881-dbessqt7532lnu3j8evh83qicmg6uhak.apps.googleusercontent.com"
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
    function displayDay(date) {
      return format(date, "MMMM d, y")
    }
    function displayTime(date) {
      return format(date, "h:mm aaaa")
    }
    if (hasFetchedEvents) {
      return !events.length ? (
        <p>There are no upcoming events on the calendar.</p>
      ) : (
        <ul className={Styles.calendarEvents}>
          {events.map(({ summary, id, location, description, start, end }) => {
            const startDate = parseISO(start.dateTime || start.date)
            const endDate = parseISO(end.dateTime || end.date)
            const startDayStr = format(startDate, "yyyy-MM-dd")
            const isSameDay = startDayStr === format(endDate, "yyyy-MM-dd")
            const displaySpan = isSameDay
              ? `${displayDay(startDate)}, ${displayTime(
                  startDate
                )} to ${displayTime(endDate)}`
              : `${displayDay(startDate)}, ${displayTime(
                  startDate
                )} to ${displayDay(endDate)}, ${displayTime(endDate)}`
            return (
              <li key={id}>
                <header>{summary}</header>
                <time dateTime={startDayStr}>{displaySpan}</time>
                {location ? <span>{location}</span> : null}
                {description ? (
                  <p dangerouslySetInnerHTML={{ __html: description }}></p>
                ) : null}
              </li>
            )
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
