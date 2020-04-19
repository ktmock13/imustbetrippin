import React from 'react'
import PropTypes from 'prop-types'
import '../styles/subpage-layout.scss'

const SubpageLayout = ({ children }) => (
  <div className="subpage-wrapper">{children}</div>
)

SubpageLayout.propTypes = {
  children: PropTypes.func,
}

export default SubpageLayout
