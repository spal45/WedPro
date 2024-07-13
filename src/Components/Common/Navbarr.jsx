import './Navbar.css'
import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-bg">
  <img  className='logo' src="images/logo2.png" alt="" srcset="" />
  {/* <Link className="navbar-brand nav_items comp_name" to="/">Rythm of Light</Link> */}
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i class="fa-solid fa-bars"></i>
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link nav_items first-nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link nav_items first-nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link nav_items first-nav-link" to="/gallery">Gallery</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link nav_items first-nav-link" to="/services">Services</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link nav_items first-nav-link" to="/Footer">Contact Me</Link>
      </li>
    </ul>   
  </div>
</nav>


    
    
    </>
  )
}

export default Navbar
