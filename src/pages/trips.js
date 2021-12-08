import React from 'react'
import Link from 'gatsby-link'
import TagList from '../components/tag-list'
import TagFilter from '../components/TagFilter'
import Layout from '../components/layout'
import '../styles/trips.css'
import statemap from '../state_map.json'

const BlogPage = ({ data }) => {
  const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index
  }

  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <div
        className="fullMap"
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1UfcHSqhZQY-YKoYASi-E1tr_9fu_fLfQ&ehbc=2E312F" width="1080px" height="375"></iframe>`,
        }}
      />
      <div className="maplegend">
        <span className="legenditem">
          <span className="maplegendvan"></span> van
        </span>
        <span className="legenditem">
          <span className="maplegendmoto"></span> moto
        </span>
      </div>
      <TagFilter posts={posts} />
      {posts.map((post) => (
        <Link to={post.node.frontmatter.path}>
          <div key={post.node.id}>
            <h3>{post.node.frontmatter.title}</h3>
            <h3 className="stateface">
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
}

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
