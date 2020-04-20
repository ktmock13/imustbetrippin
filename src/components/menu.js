import React from 'react'
import Link from 'gatsby-link'
import '../styles/menu.scss'
const Menu = () => (
  <div className="menu-wrapper">
    <ul className="menu-links">
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/bikes">Bikes</Link>
      </li>
      <li>
        <Link to="/bikes">Hikes</Link>
      </li>
    </ul>
    <div className="home-link-image">
      <Link to="/">
        <img
          className="adventure-logo"
          src={require('../images/adventure-heads-logo.png')}
        />
      </Link>
    </div>
  </div>
)

export default Menu
