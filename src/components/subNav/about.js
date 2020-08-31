import React from "react"
import SubNav from "./index"

const links = [
  ["History", "/about"],
  ["Faith", "/faith"],
  ["Practice", "/practice"],
  ["Fellowship", "/fellowship"],
]

const AboutSubNav = () => <SubNav links={links} subTitle="About Us" />

export default AboutSubNav
