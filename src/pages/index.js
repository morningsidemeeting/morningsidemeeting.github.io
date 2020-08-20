import React from "react"
import CoreLayout from "../components/coreLayout"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

const HomePage = ({ data }) => {
  const { title = "untitled", body = "" } = data.allBlogPost.edges[0]?.node
  return (
    <CoreLayout withSubtitle={true}>
      <section>
        <h3>Meeting for Worship</h3>
        <p>Welcome to Morningside.</p>
        <p>
          We gather for silent worship every First Day (Sunday) morning at 11
          o’clock. Traditionally, we meet at Riverside Church in Manhattan.
          Since March 15, 2020, meetings for worship have been held on Zoom.
        </p>
        <p>
          <strong>All are welcome.</strong> If you are not already on our
          mailing list, please contact us at{" "}
          <a href="mailto:morningsidequakermeeting@gmail.com">
            morningsidequakermeeting@gmail.com
          </a>{" "}
          for information about how to join via Zoom.
        </p>
        <h3>{title}</h3>
        <MDXRenderer>{body}</MDXRenderer>
      </section>
    </CoreLayout>
  )
}

export const query = graphql`
  {
    allBlogPost(sort: { fields: date, order: DESC }, limit: 1) {
      edges {
        node {
          id
          date
          title
          body
        }
      }
    }
  }
`

export default HomePage
