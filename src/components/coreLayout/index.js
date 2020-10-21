import React from "react";
import MainNav from "../../components/mainNav";
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
        <figure>
          <blockquote>
            Our life is love, and peace, and tenderness; and bearing one with
            another, and forgiving one another, and not laying accusations one
            against another; but praying one for another, and helping one
            another up with a tender hand.
          </blockquote>
          <figcaption>Isaac Penington, Letters, 1667</figcaption>
        </figure>
      </footer>
    </div>
  );
}
