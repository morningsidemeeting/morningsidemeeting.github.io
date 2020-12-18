import React, { Fragment } from "react";
// import { Link } from "gatsby";
import { format } from "date-fns";
import { parseISO } from "date-fns/esm";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Styles from "./posts.module.scss";
import tagNames from "../../data/tags.json";

export const Post = ({
  title = "untitled",
  body = "",
  tags = [],
  linkTitle = true,
  id,
  date,
  slug,
  withTags,
}) => {
  const footer = withTags ? (
    <footer>{tags.map((t) => tagNames[t]).join(", ")}</footer>
  ) : null;
  let parsedDate = date;
  try {
    parsedDate = format(parseISO(date), "MMMM d, y");
  } catch (e) {
    // there is either NO date, or date is already a formatted string.
  }
  return (
    <div className={Styles.post}>
      {title ? <h3>{linkTitle ? <a href={slug}>{title}</a> : title}</h3> : null}
      {parsedDate ? <time dateTime={date}>{parsedDate}</time> : null}
      <MDXRenderer>{body}</MDXRenderer>
      {footer}
    </div>
  );
};

const Posts = ({ nodes = [], withTags = false }) => (
  <Fragment>
    {nodes.map((props) => (
      <Post key={props.id} {...Object.assign({}, props, { withTags })} />
    ))}
  </Fragment>
);

export default Posts;
