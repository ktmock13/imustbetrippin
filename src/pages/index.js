import React from 'react'
import Link from 'gatsby-link'
import Layout from "../components/layout"


const IndexPage = (props) => {
  console.log(props)
  return (
    <Layout>
      <h1>Welcome to Adventure Heads</h1>
      <p>This is a site to show all of my adventures</p>
      <Link to="/blog">Check out the Blog page!</Link>
    </Layout>
  )
}

export default IndexPage
