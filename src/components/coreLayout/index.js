import React, { useState, useEffect } from "react";
import MainNav from "../../components/mainNav";
import { Link } from "gatsby";
import Styles from "./coreLayout.module.scss";
import quotes from "./quotes.json";

export default function CoreLayout({
  withSubtitle = false,
  withNav = true,
  children,
}) {
  const [footerQuote, setFooterQuote] = useState(
    quotes[Math.floor(Math.random() * quotes.length)]
  );
  const { quote, author, work, date } = footerQuote;
  return (
    <div className={Styles.container}>
      <h1>
        <Link to="/">Morningside Quaker Meeting</Link>
      </h1>
      {withSubtitle ? (
        <h2>
          Morningside Monthly Meeting
          <br />
          of the Religious Society of Friends
        </h2>
      ) : null}
      {withNav ? <MainNav /> : null}
      <main>{children}</main>
      <footer>
        <hr />
        <figure className={Styles.footerQuote}>
          <blockquote>
            <p>{quote}</p>
          </blockquote>
          <figcaption>
            {[author, work, date].filter((s) => s).join(", ")}
          </figcaption>
        </figure>
      </footer>
    </div>
  );
}
