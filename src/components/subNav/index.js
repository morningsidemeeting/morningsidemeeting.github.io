import React from "react";
import { Link } from "gatsby";
import Styles from "./subNav.module.scss";

const SubNav = ({ links = [], subTitle = "" }) => {
  return (
    <div className={Styles.subNav}>
      <h2>{subTitle}</h2>
      <ul>
        {links.map(([name, path], i) => (
          <li key={`subnav-link-${i}`}>
            <Link to={path} activeClassName="active">
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubNav;
