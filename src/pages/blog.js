import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/layout'
import '../styles/blog-post-list.scss'

const BlogPage = ({ data }) => (
  <Layout>
    {data.allMarkdownRemark.edges.map(post => (
      <div className="blog-post-list" key={post.node.id}>
        <h3 className="title">{post.node.frontmatter.title}</h3>
        <small className="author">
          Posted by {post.node.frontmatter.author} on{' '}
          {post.node.frontmatter.datePosted}
        </small>
        <br />
        <br />
        <Link className="read-more" to={post.node.frontmatter.path}>
          Read More
        </Link>
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
