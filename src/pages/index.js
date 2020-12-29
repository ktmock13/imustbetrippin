import { Link } from 'gatsby';
import React from 'react'
import classes from '../styles/index.module.css';
// import shatsaVid from '../pages.shasta.MP4';

const IndexPage = () => {
  const videoSource = "https://adventure-head-photos.s3-us-west-2.amazonaws.com/videos/splash.webm"
  return (
      <div className={classes.Container} >
          <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
              <source src={videoSource} type="video/mp4" />
              Your browser does not support the video tag.
          </video>

          <div className={classes.Content}>
              <div className={classes.SubContent} >
                  <h1 className={classes.Title}>I must be trippin.</h1>
                  <Link className={classes.Link}to={'/trips'}> <span class='link'>go to trips </span></Link>
              </div>
          </div>
      </div>
  )
}

export default IndexPage
