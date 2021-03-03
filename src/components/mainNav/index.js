import React from "react";
import { Link } from "gatsby";
import { mainNav, mainNavItem, active } from "./mainNav.module.scss";

const mainNavItems = [
  ["About", "/about"],
  ["Calendar", "/calendar"],
  ["News", "/news"],
  ["Committees", "/committees"],
  ["Documents", "/newsletters"],
  ["Contact", "/contact"],
];

const MainNav = ({ location }) => {
  return (
    <ul className={mainNav}>
      {mainNavItems.map(([name, path], i) => (
        <li key={`subnav-link-${i}`} className={mainNavItem}>
          <Link to={path} activeClassName={active}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MainNav;
