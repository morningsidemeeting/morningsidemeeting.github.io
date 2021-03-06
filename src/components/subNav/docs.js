import React from "react";
import SubNav from "./index";

const links = [
  ["Newsletters", "/newsletters"],
  ["Business Minutes", "/business-minutes"],
  ["State of the Meeting", "/state-of-the-meeting"],
  ["Memorial Minutes", "/memorial-minutes"],
];

const DocsSubNav = () => <SubNav links={links} />;

export default DocsSubNav;
