import React from 'react'
import Link from 'gatsby-link'
import ImageGallery from 'react-image-gallery'
import Layout from '../components/layout'
import statemap from '../state_map.json'
import stateFaceClasses from '../styles/index.module.css'
import classes from '../styles/short-post.module.css'

export default function Template({ data }) {
  const { html } = data.markdownRemark
  const { title, states, video, photos, map } = data.markdownRemark.frontmatter

  return (
    <Layout className="container">
      <Link to="/trips">Go Back</Link>
      <hr />
      <h1>{title}</h1>
      <h1 className={stateFaceClasses.stateface}>
        {states && states.map((state) => <span>{statemap[state]}</span>)}
      </h1>
      <div
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
      {map && (
        <div
          className={`${classes.media} ${classes.map} ${
            !video && classes.rowmedia
          }`}
          dangerouslySetInnerHTML={{
            __html: `<iframe src="${map}" width="${
              video ? 520 : 1080
            }" height="375"></iframe>`,
          }}
        />
      )}

      {video && (
        <div
          className={`${classes.media} ${!map && classes.rowmedia}`}
          dangerouslySetInnerHTML={{
            __html: `<iframe width="${
              video ? 520 : 1080
            }" height="375" src="${video}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
          }}
        />
      )}
      <div className="image-gallery">
        <ImageGallery
          items={photos.map((photo) => ({
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
        states
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
