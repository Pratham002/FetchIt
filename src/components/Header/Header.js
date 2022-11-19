import React from "react"
import "./Header.css"

const Header = () => {
  const scrollToTop = () => {
    window.scroll(0, 0)
  }
  return (
    <span onClick={scrollToTop} className="header">
      Fetch It
    </span>
  )
}

export default Header
