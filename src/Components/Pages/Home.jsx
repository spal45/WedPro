import './Home.css'
import React from 'react'
import CardSlider from './slider'

const Home = () => {
  return (
    <>

      <div className="hero">
        <div className="hero-text">
          <h2>Turning Moments into Memories <br/>Forever</h2>
          <p>
            Every click holds the magic of your love story. We're here to frame
            your moments, preserving emotions in every shot.
          </p>        

          <div className="icon-div" id="icon-div">
            <a href="https://www.facebook.com/"> <i className="fa-brands fa-facebook" id="fb"></i></a>
            <a href="https://www.instagram.com/"> <i className="fa-brands fa-instagram" id="insta" ></i></a>
            <a href="https://web.whatsapp.com/"> <i className="fa-brands fa-whatsapp" id="wp" ></i></a>
            <a href="https://www.youtube.com/"> <i className="fa-brands fa-youtube" id="yt" ></i></a>
          </div>
        </div>

        <div className='recentShorts'>
          <h2 className='recentShortsText'>Our Recent Shorts</h2>
          <div className="hero-grid">
            <div className="item1 grid-img"></div>
            <div className="item2 grid-img"></div>
            <div className="item3 grid-img"></div>
            <div className="item4 grid-img"></div>
            <div className="item5 grid-img"></div>
            <div className="item6 grid-img"></div>
            <div className="item7 grid-img"></div>
          </div>
        </div> 
      </div>
      <CardSlider/>
    </>
  )
}

export default Home