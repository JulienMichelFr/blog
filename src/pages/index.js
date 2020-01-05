import React from "react"
import { graphql } from "gatsby"
import BlogList from "../templates/page"

export default props => {
  const posts = props.data.allMarkdownRemark.edges
  const postsPerPage = 6
  const numPages = Math.ceil(posts.length / postsPerPage)
  const data = {
    ...props,
    pageContext: { ...props.pageContext, currentPage: 1, numPages },
  }
  return <BlogList {...data} />
}

export const query = graphql`
  query indexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      skip: 0
      limit: 6
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
