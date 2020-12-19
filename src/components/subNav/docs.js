import React from "react";
import SubNav from "./index";

const links = [
  ["Newsletters", "/docs"],
  ["Business Minutes", "/minutes"],
  ["State of Meeting", "/state-of-meeting"],
];

const DocsSubNav = () => <SubNav links={links} subTitle="Documents" />;

export default DocsSubNav;
