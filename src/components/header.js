import React from "react"
import {Link} from "gatsby"

const Header = () => {
  return (
    <div>
      <Link to="/">Datablog</Link>
      <div>
      </div>
      <Link to="/about">
        À propos
      </Link>
    </div>
  )
}

export default Header
