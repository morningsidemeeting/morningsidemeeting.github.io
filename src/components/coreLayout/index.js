import React, { useState } from "react";
// import SEO from "../../components/seo";
import MainNav from "../../components/mainNav";
import SiteFooter from "../../components/siteFooter";
import { Link } from "gatsby";
import Styles from "./coreLayout.module.scss";

export default function CoreLayout({
  withSubtitle = false,
  withNav = true,
  children,
}) {
  return (
    <div className={Styles.container}>
      <h1>
        <Link to="/">Morningside Quaker Meeting</Link>
      </h1>
      {withNav ? <MainNav /> : null}
      {withSubtitle ? (
        <h2>
          Morningside Monthly Meeting
          <br />
          of the Religious Society of Friends
        </h2>
      ) : null}
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
