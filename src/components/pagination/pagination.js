import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/all"

const Style = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: black;
  }
`

const Button = styled.button`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  border-radius: 3px;
  border: 1px solid black;
  padding: 5px;
  
  &:disabled {
    cursor: not-allowed;
  }
`

const Pagination = ({ currentPage, numPages, basePath }) => {
  console.log({ basePath })

  return (
    <Style>
      <Button disabled={currentPage >= 1}>
        <Link to={`${basePath}/${currentPage - 1}`}>
          {" "}
          <IoIosArrowBack />
          <span>Précédent</span>
        </Link>
      </Button>
      Page {currentPage}
      <Button disabled={currentPage === numPages}>
        <Link to={`${basePath}/${currentPage + 1}`}>
          <span>Suivant</span> <IoIosArrowForward />
        </Link>
      </Button>
    </Style>
  )
}

export default Pagination
