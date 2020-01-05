import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { AiOutlineClockCircle } from "react-icons/all"

const Card = styled.div`
  background-color: white;
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: 2px;
  padding: 10px;
  margin-bottom: 25px;
  position: relative;
  
  p {
  margin-bottom: 0;
  }
  
  .duration {
    display: flex;
    justify-content: flex-end;
    flex-flow: row nowrap;
    align-items: center;
    text-align: right;
    span {
    margin-left: 5px;
    }
  }
  
  a {
    color: ${props => props.theme.black};
    text-decoration: none;
    position: relative;
  }
  
  .date {
    border-radius: 3px;
    top: -15px;
    right: 15px;
    box-shadow: ${props => props.theme.boxShadow};
    background-color: ${props => props.theme.primary};
    color: white;
    position: absolute;
    text-align: right;
    padding: 5px;
    text-transform: capitalize;
    transform: rotateZ(-2deg);
  }
`

const Post = ({ node }) => {
  return (
    <Card>
      <span className="date">{node.frontmatter.date}</span>
      <Link to={node.fields.slug}>
        <h3>
          {node.frontmatter.title}
        </h3>
        <p>{node.frontmatter.resume || node.excerpt}</p>
        <div className="duration"> <AiOutlineClockCircle /> <span>{Math.ceil(node.fields.readingTime.minutes)} minutes</span></div>
      </Link>
    </Card>
  )
}

export default Post
