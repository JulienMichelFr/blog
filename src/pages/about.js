import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

const About = ({ data }) => {
  console.log({ data })
  return (
    <Layout>
      About me
      <Link to="">Index</Link>
    </Layout>
  )
}

export default About

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
