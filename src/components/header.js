import React from 'react'
import Link from 'gatsby-link'
import '../styles/header.css'
const Header = ({ siteTitle }) => (
  <div className="header">
    <div className="nav-bar">
      <h1 className="nav-item">
        <Link to="/" className="nav-item-link">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
