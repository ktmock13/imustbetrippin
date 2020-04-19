import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/layout'
import '../styles/home.scss'

const IndexPage = props => {
  console.log(props)
  return (
    <Layout>
      <h1 className="adventure-heads-title">Welcome to Adventure Heads!</h1>
      <div className="adventure-heads-subtitle">
        this is the home of all of Keith and Alyssa's random adventures. This
        site consists of mostly Moto trips, motor bike upgrades, and info. We
        also plan to add various hiking adventures and more to the site as well.
        Stay Tuned!
      </div>
    </Layout>
  )
}

export default IndexPage
