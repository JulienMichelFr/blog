import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { BLOG_NAME } from "../utils/consts"
import { AiOutlineTool } from "react-icons/all"
import { AlignTextCenter } from "./text-align-center"

const AppBar = styled.div`
  background-color: ${props => props.theme.primary};
  padding: 10px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  
  @media only screen and (max-width : ${props => props.theme.maxWidth}) {
      padding: 10px;
  }
`

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin: auto;
  max-width: ${props => props.theme.maxWidth};

  a {
    color: white;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`
const Padded = styled.div`
  & > * {
    margin-left: 15px;
  }
`

const Header = () => {
  return (
    <AppBar>
      <Container>
        <Link to="/"><AlignTextCenter>{BLOG_NAME} <AiOutlineTool/></AlignTextCenter></Link>
        <Padded>
          <Link to="/page/1">Articles</Link>
          <Link to="/cv">CV</Link>
          <Link to="/about">À Propos</Link>
        </Padded>
      </Container>
    </AppBar>
  )
}

export default Header
