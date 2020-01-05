import React from "react"

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer style={{textAlign: "center"}}>
      <small>&copy; Copyright {year} - DataWorkshop</small>
    </footer>
  )
}

export default Footer
