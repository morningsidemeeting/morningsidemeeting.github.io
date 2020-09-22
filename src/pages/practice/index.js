import React from "react"
import CoreLayout from "../../components/coreLayout"
import SubNav from "../../components/subNav/about"

const FaithPage = () => (
  <CoreLayout withSubtitle={false}>
    <SubNav />
    <section>
      <h2>Practice</h2>
      <p>
        New York Yearly meeting publishes a manual of faith and practice that
        provides Monthly meetings with guidance when making decisions of
        process.{" "}
        <a href="https://www.nyym.org/faith-and-practice">Faith and Practice</a>{" "}
        is not a rulebook; it does not prescribe rules of governance. Instead it
        provides prayerful reflections about the most basic questions of
        conducting Worship and Business.
      </p>
      <p>
        Quaker process is always the combination of past wisdom and present
        experience. For this reason, Faith and Practice, which is regularly
        updated, serves both as collective memory and immediate resource.
      </p>
    </section>
  </CoreLayout>
)
export default FaithPage
