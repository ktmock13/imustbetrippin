import React from 'react'
import Link from 'gatsby-link'

const Menu = () => (
  <div
    style={{
      background: '#f4f4f4',
      paddingTop: '10px',
    }}
  >
    <ul
      style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-evenly',
      }}
    >
      <li>
        <Link to="/trips">Trips</Link>
      </li>
      <li>
        <Link to="/van">Van Build</Link>
      </li>
      <li>
        <Link to="/van-updates">Van Updates</Link>
      </li>
      <li>
        <Link to="/bike-restoration">Vintage Moto Restoration</Link>
      </li>
    </ul>
  </div>
)

export default Menu
