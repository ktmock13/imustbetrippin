import React from 'react'
import Link from 'gatsby-link'
import ImageGallery from 'react-image-gallery'
const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
]

export default function Template({ data }) {
  const post = data.markdownRemark
  return (
    <div>
      <Link to="/blog">Go Back</Link>
      <hr />
      <h1>{post.frontmatter.title}</h1>
      <h4>
        Posted by {post.frontmatter.author} on {post.frontmatter.datePosted}
      </h4>
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
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <div
        dangerouslySetInnerHTML={{
          __html: `<iframe src="${post.frontmatter.map}" width="640" height="480"></iframe>`,
        }}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: `<iframe width="560" height="315" src="${post.frontmatter.video}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        }}
      />
    </div>
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
        datePosted
        video
        map
        photos
      }
    }
  }
`
