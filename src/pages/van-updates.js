import React from 'react'
import Layout from '../components/layout'
import ImageGallery from 'react-image-gallery'
import Link from 'gatsby-link'

const VanPage = () => (
  <Layout>
    <h1>Van Updates</h1>
    <iframe
      height="300px"
      width="100%"
      allowfullscreen="true"
      src="https://momento360.com/e/u/dc789aca5ba34b888b582334b989f24d"
    ></iframe>
    <p>
      After 2 years and dozens of trips, the van has taken on some new forms.
      This has been a combination of add-on upgades, replacing old designs with
      improved ones, and re-arranging things to better optimize how we use the
      van. Here is the running list since day 1.
    </p>
    {/* <ImageGallery
      items={[
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/k.jpeg',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/d.jpeg',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/g.jpeg',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/j.jpeg',

        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/a.jpeg',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/m.jpeg',

        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/b.jpeg',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/c.jpeg',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/e.jpeg',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/f.jpeg',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/h.jpeg',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/I.jpeg',
      ].map((photo) => ({
        original: photo,
        thumbnail: photo,
      }))}
      showPlayButton={false}
      showBullets={true}
      thumbnailPosition="left"
    /> */}
    <h2>Overview</h2>
    <ul>
      <li>Rebuild Lower cabinet</li>
      <li>Paint rear windows</li>
      <li>Install Lagun table</li>
      <li>Install recovery points &amp; offroad gear</li>
      <li>Upgrade water system</li>
      <li>Install custom elevator bed</li>
      <li>Install upholstered wall panels</li>
      <li>Install device charging station</li>
      <li>Install motocycle mounts</li>
      <li>Install custom bug mesh door</li>
    </ul>
    <h2>Rebuild Lower cabinet</h2>
    <h2>Paint rear windows</h2>
    <h2>Install Lagun table</h2>
    <h2>Install cell-enabled security</h2>
    <h2>Install recovery points &amp; offroad gear</h2>
    <h2>Upgrade water system</h2>
    <h2>Install custom elevator bed</h2>
    <h2>Install upholstered wall panels</h2>
    <h2>Install device charging station</h2>
    <h2>Install motocycle mounts</h2>
    <h2>Install custom bug mesh door</h2>

  </Layout>
)

export default VanPage
