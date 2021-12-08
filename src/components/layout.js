import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../components/header'
import Menu from '../components/menu'
import './layout.css'
import '../styles/global.css'

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Layout = ({ children, hasHeader, hasMenu }) => (
  <StaticQuery
    query={query}
    render={(data) => (
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
        {hasHeader ?? <Header siteTitle={data.site.siteMetadata.title} />}
        {hasMenu ?? <Menu />}
        <div
          className="content"
          style={{
            margin: '0 auto',
            maxWidth: 1080,
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
