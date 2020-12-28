import React from 'react'
import Link from 'gatsby-link'
import TagList from '../components/tag-list'
import Layout from "../components/layout"

const BlogPage = ({ data }) => (
  <Layout>
    {data.allMarkdownRemark.edges.map(post => (
      <Link to={post.node.frontmatter.path}>
        <div key={post.node.id}>
          <h3>{post.node.frontmatter.title}</h3>
          <TagList tags={post.node.frontmatter.tags} />
          <hr />
        </div>
      </Link>
    ))}
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___datePosted] }
      limit: 1000
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            tags
            datePosted
            author
          }
        }
      }
    }
  }
`

export default BlogPage
