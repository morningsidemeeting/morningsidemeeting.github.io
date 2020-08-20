import React from "react"
import SubNav from "./index"
import { Link } from "gatsby"

const AboutSubNav = () => (
  <SubNav>
    <Link to="/about">History</Link>
    <Link to="/faith">Faith</Link>
  </SubNav>
)

export default AboutSubNav
