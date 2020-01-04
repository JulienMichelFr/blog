import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/post"

const ThemedLink = styled.div`
`

export default ({ data }) => (
  <Layout>
    <SEO title="Hello there" />
    <ThemedLink>
      <div>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Post node={node} key={node.id}/>
        ))}
      </div>
    </ThemedLink>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY", locale: "fr")
          }
          fields {
            slug
            readingTime {
                minutes
            }
          }
          excerpt
        }
      }
    }
  }
`
