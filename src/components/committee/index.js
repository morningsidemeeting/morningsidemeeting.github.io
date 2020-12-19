import React from "react";
import CoreLayout from "../coreLayout";
import Posts from "../posts";
import { StaticQuery, graphql } from "gatsby";
import Calendar, { CALENDAR_IDS } from "../calendar";

const CommitteePage = ({ data, title, calendarTag, tag, children }) => {
  const nodes = data.allMdxBlogPost.nodes.filter((n) => n.tags.includes(tag));
  return (
    <CoreLayout withSubtitle={false}>
      <section>
        <h2>{title}</h2>
        {children}
      </section>
      <section>
        <Posts nodes={nodes} title="Announcements" />
      </section>
      <section>
        <h2>Events</h2>
        <Calendar
          calendarIds={[CALENDAR_IDS[calendarTag]]}
          withFooter={false}
        />
      </section>
    </CoreLayout>
  );
};

export default function Committee(props) {
  return (
    <StaticQuery
      query={graphql`
        {
          allMdxBlogPost(
            limit: 100
            sort: { fields: date, order: DESC }
            filter: { tags: { in: "committees", nin: "archived" } }
          ) {
            nodes {
              body
              title
              id
              date
              slug
              tags
            }
          }
        }
      `}
      render={(data) => <CommitteePage data={data} {...props} />}
    />
  );
}
