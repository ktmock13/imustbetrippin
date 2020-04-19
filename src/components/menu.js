import React from 'react'
import Link from 'gatsby-link'
import '../styles/menu.css'
const Menu = () => (
  <div className="menu-wrapper">
    <ul className="menu-item">
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/bikes">Bikes</Link>
      </li>
    </ul>
  </div>
)

export default Menu
