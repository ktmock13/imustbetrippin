import React from 'react'
import Link from 'gatsby-link'
import TagList from '../components/tag-list'
import Layout from '../components/layout'
import classes from '../styles/index.module.css'
import statemap from '../state_map.json'

const BlogPage = ({ data }) => (
  <Layout>
    {data.allMarkdownRemark.edges.map((post) => (
      <Link to={post.node.frontmatter.path}>
        <div key={post.node.id}>
          <h3>{post.node.frontmatter.title}</h3>
          <h3 className={classes.stateface}>
            {post.node.frontmatter.states &&
              post.node.frontmatter.states.map((state) => (
                <span>{statemap[state]}</span>
              ))}
          </h3>

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
            states
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
