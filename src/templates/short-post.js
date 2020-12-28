import React from 'react'
import Link from 'gatsby-link'
import ImageGallery from 'react-image-gallery'
import Layout from '../components/layout'

export default function Template({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <Link to="/trips">Go Back</Link>
      <hr />
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <div
        dangerouslySetInnerHTML={{
          __html: `<iframe src="${post.frontmatter.map}" width="640" height="480"></iframe>`,
        }}
      />
      {post.frontmatter.video && 
        <div
          dangerouslySetInnerHTML={{
            __html: `<iframe width="560" height="315" src="${post.frontmatter.video}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
          }}
        />
      }
      <div className="image-gallery">
        <ImageGallery
          items={post.frontmatter.photos.map(photo => ({
            original: photo,
            thumbnail: photo,
          }))}
          showPlayButton={false}
          showBullets={true}
        />
      </div>
      
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        tags
        datePosted
        video
        map
        photos
      }
    }
  }
`
