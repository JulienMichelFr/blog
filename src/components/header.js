import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  
  a {
    text-decoration: none;
    color: ${props => props.theme.black};
  }
  
  a:hover {
    text-decoration: underline;
  }
`


const Header = () => {
  return (
    <Container>
      <Link to="/">Datablog</Link>
      <Link to="/about">
        À propos
      </Link>
    </Container>
  )
}

export default Header
