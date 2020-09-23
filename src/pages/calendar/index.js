import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import CoreLayout from "../../components/coreLayout"

const CLIENT_ID = process.env.GCAL_CLIENT_ID
const API_KEY = process.env.GCAL_API_KEY
const DISCOVERY_DOCS = [
  "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
]
const SCOPES = "https://www.googleapis.com/auth/calendar.readonly"

const CalendarPage = () => {
  function getGapi() {
    return new Promise((resolve, reject) => {
      let sanity = 0
      waitForGapi()

      function waitForGapi() {
        sanity++
        if (
          typeof window === "undefined" ||
          typeof window.gapi == "undefined"
        ) {
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
  async function loadCalendar() {
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
              console.log("OK then")
            },
            function (error) {
              console.log("had a problem", error)
            }
          )
      })
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    console.log("Here I am, Fooboy.")
    loadCalendar()
  })
  return (
    <React.Fragment>
      <Helmet>
        <script async defer src="https://apis.google.com/js/api.js"></script>
      </Helmet>
      <CoreLayout withSubtitle={false}>
        <section>
          <h2>Calendar</h2>
        </section>
      </CoreLayout>
    </React.Fragment>
  )
}
export default CalendarPage
