import React from 'react'
import Link from 'gatsby-link'
import '../styles/menu.scss'
const Menu = () => (
  <div className="menu-wrapper">
    <ul className="menu-links">
      <li>
        <Link to="/blog">BLOG</Link>
      </li>
      <li>
        <Link to="/bikes">BIKES</Link>
      </li>
      <li>
        <Link to="/bikes">HIKES</Link>
      </li>
    </ul>
    <div className="home-link-image">
      <Link to="/">
        <img
          className="adventure-logo"
          src={require('../images/adventure-heads-logo.jpg')}
        />
      </Link>
    </div>
  </div>
)

export default Menu
