import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-name">
          <h1>Rhythm of Light </h1>
          <hr />
          <p>Thank you for exploring our comprehensive wedding photography website. We invite you to consider us for your special day. Our passion is capturing your love story beautifully.</p>
        </div>
        <div className="icons">
          <a href="https://www.facebook.com/"> <i className="fa-brands fa-facebook" id="fb"></i></a>
          <a href="https://www.instagram.com/"> <i className="fa-brands fa-instagram" id="insta" ></i></a>
          <a href="https://web.whatsapp.com/"> <i className="fa-brands fa-whatsapp" id="wp" ></i></a>
          <a href="https://www.youtube.com/"> <i className="fa-brands fa-youtube" id="yt" ></i></a>

          <div className="footer-contact">
            <div className="phone">
              <i class="fa-solid fa-phone-volume"></i><p>PhoneNo:-123456789</p>
            </div>
            <div className="mail">
              <i class="fa-solid fa-envelope"></i><p>Mail us :- abc@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© 2023 Rhythm of Light.</p>
      </div>



    </>
  )
}

export default Footer