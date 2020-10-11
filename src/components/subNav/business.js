import React from "react"
import SubNav from "./index"

const links = [
  ["Meeting for Business", "/business"],
  ["Committees", "/committees"]
]

const AboutSubNav = () => <SubNav links={links} subTitle="Business" />

export default AboutSubNav
