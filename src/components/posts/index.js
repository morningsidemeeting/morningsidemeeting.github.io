import React, { Fragment } from "react";
// import { Link } from "gatsby";
import { format } from "date-fns";
import { parseISO } from "date-fns/esm";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Styles from "./posts.module.scss";
import tagNames from "../../data/tags.json";

const Posts = ({ nodes = [], title, withTags = false }) => (
  <Fragment>
    {nodes.map(
      ({ title = "untitled", body = "", id, date, tags = [], slug }) => {
        const footer = withTags ? (
          <footer>{tags.map((t) => tagNames[t]).join(", ")}</footer>
        ) : null;
        return (
          <div key={id} className={Styles.post}>
            {title ? (
              <h3>
                <a href={slug}>{title}</a>
              </h3>
            ) : null}
            {date ? (
              <time dateTime={date}>{format(parseISO(date), "MMMM d, y")}</time>
            ) : null}
            <MDXRenderer>{body}</MDXRenderer>
            {footer}
          </div>
        );
      }
    )}
  </Fragment>
);

export default Posts;
