import React from "react";
import Nav from "./index";

const links = [
  ["About", "/about"],
  ["Calendar", "/calendar"],
  ["News", "/news"],
  ["Committees", "/committees"],
  ["Contact", "/contact"],
  ["Donate", "/donate"],
  ["Documents", "/newsletters"],
];

const MainNav = () => <Nav links={links} isPrimary={true} />;

export default MainNav;
