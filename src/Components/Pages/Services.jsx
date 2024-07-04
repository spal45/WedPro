import Pricing from '../Core/Pricing'
import Team from '../Core/Team'
import './Services.css'
import React from 'react'

const Services = () => {
  return (
    <>
    <div className="containerFluid service-head">
      <h1>Our Services</h1>
      <p className='service-para'>
Our Wedding Photography Service is where the magic happens. We specialize in capturing the raw emotions, intimate moments, and the essence of your special day. With a team of experienced photographers and customizable packages, we ensure your wedding day is beautifully documented, creating timeless memories to cherish forever.</p>
<div  className='divider'>********</div>
    </div>

    <section className="section section-light-1 ">
      <h2> Pre Wedding </h2>
      <p>
    
<strong>Pre-wedding</strong> photography services provide couples with a chance to celebrate their love and connection in a more intimate and casual setting. These sessions allow for creative exploration, capturing the couple's personalities and unique love story. It's a heartfelt way to document their journey and create lasting memories before the grandeur of the wedding day takes over.

      </p>
    </section>
    <section className="pimg1" style={{backgroundImage: `url(images/image1.jpg)`}}>
      <div className="ptext">
       
      </div>
    </section>
    <section className="section section-light-2">
        <h2>Haldi Ceremony</h2>
        <p>
        Photographing your Haldi ceremony was an absolute delight. Capturing the vibrancy, cultural significance, and your radiant spirits was a privilege. These moments reflect your love and the richness of tradition. We're honored to have been a part of this journey and look forward to preserving more beautiful memories for you.
        </p>
      </section>
   
      <section className="pimg2" style={{  backgroundImage: `url(images/image2.jpg)`}}>
        <div className="ptext">
        
        </div>
      </section>
      <section className="section section-light-3">
          <h2>Wedding Day</h2>
          <p>
          Our wedding day photography service is tailored to capture every precious moment of your special day. Our experienced photographers ensure that your love story unfolds beautifully, preserving emotions, details, and candid moments. We're dedicated to creating timeless memories that you and your loved ones will cherish for a lifetime.
          </p>
        </section>
        <section className="pimg3" style={{  backgroundImage: `url(images/image3.jpg)`}}>
        <div className="ptext">
        
        </div>
      </section>
      <Pricing/>
    </>
  )
}

export default Services