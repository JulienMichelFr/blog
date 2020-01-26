import styled from "styled-components"
import React from "react"

const Pill = styled.span`
  background-color: #ccc;
  padding: 5px 10px;
  border-radius: 30px;
  position: relative;
  margin-right: 5px;
  word-break: break-word;
  
  .tooltip {
    display: none;
  }
  &:hover {
    .tooltip {
     display: block;
     position: absolute;
     top: -45px;
     left: auto;
     right: auto;
     background-color: rgba(0, 0, 0, 0.7);
     padding: 5px;
     color: #fff;
     border-radius: 5px;
    }
  }
  
  &.full {
    background-color: green;
    color: white;
  }
  
  &.is-ok {
    background-color: yellow;
  }
  
  &.known {
    background-color: orange;
  }
`

const SkillPill = (props) => {
  return (
    <Pill className={props.level || 'default'}>
      {props.tooltip ? <div className="tooltip">{props.tooltip}</div> : ''}
      {props.children}
    </Pill>
  )
}

export default SkillPill
