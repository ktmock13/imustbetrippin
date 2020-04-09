import React from 'react'
import Link from 'gatsby-link'
import Layout from "../components/layout"

const BlogPage = ({ data }) => (
  <Layout>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <h3>{post.node.frontmatter.title}</h3>
        <small>
          Posted by {post.node.frontmatter.author} on{' '}
          {post.node.frontmatter.datePosted}
        </small>
        <br />
        <br />
        <Link to={post.node.frontmatter.path}>Read More</Link>
        <br />
        <br />
        <hr />
      </div>
    ))}
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            datePosted
            author
          }
        }
      }
    }
  }
`

export default BlogPage
