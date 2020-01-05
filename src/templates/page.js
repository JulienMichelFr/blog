import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Pagination from "../components/pagination/pagination"
import Post from "../components/post"
import styled from "styled-components"
import SEO from "../components/seo"

const Padder = styled.div`
  padding-top: 20px;
`

export default class BlogList extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    return (
      <Layout>
        <SEO title={`Page ${this.props.pageContext.currentPage}`} />
        <Padder>
          {posts.map(({ node }) => {
            return <Post node={node} key={node.id} />
          })}
          <Pagination
            basePath="/page"
            currentPage={this.props.pageContext.currentPage}
            numPages={this.props.pageContext.numPages}
          />
        </Padder>
      </Layout>
    )
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            resume
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
