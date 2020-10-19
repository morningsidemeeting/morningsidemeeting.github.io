import React, { Fragment } from "react";
// import { Link } from "gatsby";
import { format } from "date-fns";
import { parseISO } from "date-fns/esm";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Styles from "./posts.module.scss";

const Posts = ({ nodes = [], title }) => (
  <Fragment>
    <h2>{title}</h2>
    {nodes.map(({ title = "untitled", body = "", id, date }) => (
      <div key={id} className={Styles.post}>
        {title ? <h3>{title}</h3> : null}
        {date ? (
          <time dateTime={date}>{format(parseISO(date), "MMMM d, y")}</time>
        ) : null}

        <MDXRenderer>{body}</MDXRenderer>
      </div>
    ))}
  </Fragment>
);

export default Posts;
