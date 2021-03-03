import React, { useState } from "react";
import { siteFooter, footerQuote, copyright } from "./siteFooter.module.scss";
import quotes from "../../data/quotes.json";

export default function SiteFooter() {
  // We'll randomly select a quote from our list to use for the duration of
  // this instance's life:
  const [footerQuote] = useState(
    quotes[Math.floor(Math.random() * quotes.length)]
  );
  const { quote, author, work, date } = footerQuote;
  return (
    <footer className={siteFooter}>
      <hr />
      <figure className={footerQuote}>
        <blockquote>
          <p>{quote}</p>
        </blockquote>
        <figcaption>
          {[author, work, date].filter((s) => s).join(", ")}
        </figcaption>
      </figure>
      <p className={copyright}>
        © 2016 Morningside Monthly Meeting, Religious Society of Friends.
      </p>
    </footer>
  );
}
