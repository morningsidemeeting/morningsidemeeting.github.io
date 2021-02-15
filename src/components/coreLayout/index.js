import React, { useState } from "react";
// import SEO from "../../components/seo";
import MainNav from "../../components/mainNav";
import { Link } from "gatsby";
import Styles from "./coreLayout.module.scss";
import quotes from "./quotes.json";

export default function CoreLayout({
  withSubtitle = false,
  withNav = true,
  children,
}) {
  // We'll randomly select a quote from our list to use for the duration of
  // this instance's life:
  const [footerQuote] = useState(
    quotes[Math.floor(Math.random() * quotes.length)]
  );
  const { quote, author, work, date } = footerQuote;
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
      <footer className={Styles.siteFooter}>
        <hr />
        <figure className={Styles.footerQuote}>
          <blockquote>
            <p>{quote}</p>
          </blockquote>
          <figcaption>
            {[author, work, date].filter((s) => s).join(", ")}
          </figcaption>
        </figure>
        <p className={Styles.copyright}>
          © 2016 Morningside Monthly Meeting, Religious Society of Friends.
        </p>
      </footer>
    </div>
  );
}
