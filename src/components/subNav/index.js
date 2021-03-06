import React from "react";
import { Link } from "gatsby";
import Styles from "./subNav.module.scss";

const SubNav = ({ links = [] }) => {
  return (
    <div className={Styles.subNav}>
      <ul>
        {links.map(([name, path], i) => (
          <li key={`subnav-link-${i}`}>
            <Link to={path} activeClassName={Styles.active}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubNav;
