import React from "react";
import SubNav from "./index";

const links = [
  ["About", "/about"],
  ["Calendar", "/calendar"],
  ["News", "/news"],
  ["Committees", "/committees"],
  ["Documents", "/newsletters"],
  ["Contact", "/contact"],
];

const MainNav = () => <SubNav links={links} isPrimary={true} />;

export default MainNav;
