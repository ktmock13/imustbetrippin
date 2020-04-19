import React from 'react'
import Link from 'gatsby-link'
import '../styles/menu.css'
const Menu = () => (
  <div className="menu-wrapper">
    <ul className="menu-item">
      <li>
        <Link to="/blog">BLOG</Link>
      </li>
      <li>
        <Link to="/bikes">BIKES</Link>
      </li>
      <li>
        <Link to="/bikes">HIKES</Link>
      </li>
      <li>
        <Link to="/">
          <img
            className="adventure-logo"
            src={require('../images/adventure-heads-logo.jpg')}
          />
        </Link>
      </li>
    </ul>
  </div>
)

export default Menu
