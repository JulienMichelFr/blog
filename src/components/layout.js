import React from "react"
import Header from "./header"
import styled, { ThemeProvider } from "styled-components"
import { GlobalStyle, theme } from "../utils/theme"
import Footer from "./footer"

const Container = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 60px auto;
  
  @media only screen and (max-width : ${props => props.theme.maxWidth}) {
      padding: 0 10px;
  }
`
const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle theme={theme} />
      <ThemeProvider theme={theme}>
        <Header />
        <Container>{children}</Container>
        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default Layout
