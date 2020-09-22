import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import CoreLayout from "../../components/coreLayout"

const CalendarPage = () => {
  function getGapi() {
    return new Promise((resolve, reject) => {
      let sanity = 0
      waitForGapi()

      function waitForGapi() {
        console.log("waiting...")
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
      const api = await getGapi()
      console.log("api", api)
      api.load("client:auth2", () => {
        console.log("wow")
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
