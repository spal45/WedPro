import React from 'react'
import './Pricing.css'
const Pricing = () => {
  return (
    <>
    <div style={{marginTop:"60px",marginBottom:"60px"}} class="pricing-area">
  <div class="container">
    <div class="row">
      <div class="col-md-4 col-sm-6 col-xs-12">
        <div class="single-price">
          <div class="deal-top">
            <h3>Basic</h3>
            <h4> 29 <span class="sup">$</span> </h4> 
          </div>
          <div class="deal-bottom">
            <ul class="deal-item">
              <li>10 GB Storage</li>
              <li>10 Email address</li>
              <li>10 Domain names</li>
              <li>500 gb Bandwidth </li>
              <li>24 hour Support </li>
            </ul>
            <div class="btn-area">
              <a href="/">Book Now</a>       
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
        <div class="single-price">
          <div class="deal-top">
            <h3>Standard</h3>
            <h4> 59 <span class="sup">$</span> </h4>
          </div>
          <div class="deal-bottom">
            <ul class="deal-item">
              <li>50 GB Storage</li>
              <li>50 Email address</li>
              <li>50 Domain names</li>
              <li>1 TB Bandwidth </li>
              <li>24 hour Support </li>
            </ul>
            <div class="btn-area">
              <a href="/">Book Now</a>       
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
        <div class="single-price">
          <div class="deal-top">
            <h3>Professional</h3>
            <h4> 79 <span class="sup">$</span> </h4> 
          </div>
          <div class="deal-bottom">
            <ul class="deal-item">
              <li>100 GB Storage</li>
              <li>100 Email address</li>
              <li>100 Domain names</li>
              <li>5 TB Bandwidth </li>
              <li>24 hour Support </li>
            </ul>
            <div class="btn-area">
              <a href="/">Book Now</a>       
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>       


</div>


    
    </>
  )
}

export default Pricing