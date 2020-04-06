import React from 'react'
import Link from 'gatsby-link'

const renderphotos = photos => {
  return photos.map(photo => ( <img src={photo} /> ));
}

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
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <div dangerouslySetInnerHTML={{ __html: `<iframe src="${post.frontmatter.map}" width="640" height="480"></iframe>` }} />
      <div dangerouslySetInnerHTML={{ __html: `<iframe width="560" height="315" src="${post.frontmatter.video}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` }} />
      <h4>Photos:</h4>
      { renderphotos(post.frontmatter.photos) }
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
