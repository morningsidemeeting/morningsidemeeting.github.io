import React from "react";
import SubNav from "./index";

const links = [
  ["Newsletters", "/newsletters"],
  ["Business Minutes", "/business-minutes"],
  ["State of the Meeting", "/state-of-the-meeting"],
];

const DocsSubNav = () => <SubNav links={links} subTitle="Documents" />;

export default DocsSubNav;
