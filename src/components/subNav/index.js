import React from "react";
import { Link } from "gatsby";
import { subNav, active } from "./subNav.module.scss";

const SubNav = ({ links = [], subTitle = "" }) => {
  return (
    <div className={subNav}>
      <ul>
        {links.map(([name, path], i) => (
          <li key={`subnav-link-${i}`}>
            <Link to={path} activeClassName={active}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubNav;
