import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/all"
import { AlignTextCenter } from "../text-align-center"

const Style = styled.div`
  font-family: ${props => props.theme.fontFamily};
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  a {
    background-color: white;
    color: ${props => props.theme.black};
    text-decoration: none;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    font-family: ${props => props.theme.fontFamily};
    border-radius: 3px;
    border: 1px solid black;
    padding: 5px;
    &[aria-disabled="true"] {
      cursor: not-allowed;
    }
  }
`

const Pagination = ({ currentPage, numPages, basePath }) => {
  const previousPage = currentPage - 1 || 1
  const nextPage = Math.min(currentPage + 1, numPages)

  return (
    <Style>
      <Link
        style={{ paddingRight: "10px" }}
        to={`${basePath}/${previousPage}`}
        aria-disabled={currentPage <= 1}
      >
        <IoIosArrowBack />
        <span>Précédent</span>
      </Link>
      Page {currentPage} / {numPages}
      <Link
        style={{ paddingLeft: "10px" }}
        to={`${basePath}/${nextPage}`}
        aria-disabled={currentPage >= numPages}
      >
        <AlignTextCenter>
          <span>Suivant</span> <IoIosArrowForward />
        </AlignTextCenter>
      </Link>
    </Style>
  )
}

export default Pagination
