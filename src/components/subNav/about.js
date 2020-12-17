import React from "react";
import SubNav from "./index";

const links = [
  ["Morningside", "/about"],
  ["Quakers", "/quakers"],
  ["Worship", "/worship"],
  ["Business", "/business"],
  ["Fellowship", "/fellowship"],
];

const AboutSubNav = () => <SubNav links={links} subTitle="About Us" />;

export default AboutSubNav;
