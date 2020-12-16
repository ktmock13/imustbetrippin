import React from 'react'
import { navigate } from 'gatsby';
import Link from 'gatsby-link'
import Layout from "../components/layout"


const IndexPage = (props) => {
  console.log(props)
  navigate('/trips'); // always redirect
  return (
    <Layout hasMenu={false}>
      <h1>Welcome to Adventure Heads</h1>
      <p>This is a site to show all of my adventures</p>
      <Link to="/trips">Check out the Blog page!</Link>
    </Layout>
  )
}

export default IndexPage
