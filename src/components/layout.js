import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Menu from '../components/menu'
import '../styles/layout.scss'
import '../styles/global.scss'

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={query}
    render={data => (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'This is a sample website for the Gatsby crash course',
            },
            { name: 'keywords', content: 'gatsby, react, tutorial' },
          ]}
        />
        <Menu />
        <div>{children}</div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
