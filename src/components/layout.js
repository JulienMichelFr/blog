import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Header from "./header"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"

export const theme = {
  maxWidth: "1000px",
  lightGrey: "#E1E1E1",
  black: "#393939",
  primary: "#4bbf65",
  boxShadow: "0 0 1px 1px rgba(0, 0, 0, 0.12)",
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.lightGrey};
    color: ${props => props.theme.black};
  }
`

const Container = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: auto;
`

const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(query)
  return (
    <>
      <GlobalStyle theme={theme} />
      <ThemeProvider theme={theme}>
        <Container>
          <Header />
          {children}
        </Container>
      </ThemeProvider>
    </>
  )
}

export default Layout
