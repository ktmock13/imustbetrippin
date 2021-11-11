import { Link } from 'gatsby'
import React, { useState } from 'react'
import classes from '../styles/index.module.css'
// import shatsaVid from '../pages.shasta.MP4';

const IndexPage = () => {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const videoSource =
    'https://adventure-head-photos.s3-us-west-2.amazonaws.com/videos/splash.mp4'
  return (
    <div className={classes.Container}>
      <video
        autoPlay="autoplay"
        loop="loop"
        playsInline
        muted
        className={`${classes.Video} ${videoLoaded ? classes.VideoFinish : ''}`}
        onLoadStart={() => {}}
        onCanPlay={() => {
          console.log('vid done')
          setVideoLoaded(true)
        }}
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={classes.Content}>
        <div
          className={`${classes.SubContent} ${
            videoLoaded ? classes.ShowOnFinish : ''
          }`}
        >
          <h1 className={classes.Title}>I must be trippin.</h1>
          <Link className={classes.Link} to={'/trips'}>
            {' '}
            <span> see trips </span>
          </Link>
        </div>
        <div
          className={`${classes.RainbowSubContent} ${
            videoLoaded ? classes.HideOnFinish : ''
          }`}
        >
          <h1 className={classes.RainbowTitle}>I must be trippin.</h1>
          <Link className={classes.RainbowLink} to={'/trips'}>
            {' '}
            <span> see trips </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
