import React from "react";
import SubNav from "./index";

const links = [
  ["Meeting for Worship", "/worship"],
  ["Faith", "/faith"],
  ["Practice", "/practice"],
];

const AboutSubNav = () => <SubNav links={links} subTitle="Worship" />;

export default AboutSubNav;
