import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  console.log({ data })
  return (
    <div>
      <Header/>
      {children}
    </div>
  )
}

export default Layout
