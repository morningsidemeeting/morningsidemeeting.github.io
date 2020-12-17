import React from "react";
import { Link } from "gatsby";
import Styles from "./mainNav.module.scss";

const mainNavItems = [
  ["About", "/about"],
  ["Calendar", "/calendar"],
  ["Committees", "/committees"],
  ["News", "/business"],
  ["Contact", "/contact"],
];

const MainNav = ({ location }) => {
  return (
    <ul className={Styles.mainNav}>
      {mainNavItems.map(([name, path], i) => (
        <li key={`subnav-link-${i}`} className={Styles.mainNavItem}>
          <Link to={path} activeClassName={Styles.active}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MainNav;
