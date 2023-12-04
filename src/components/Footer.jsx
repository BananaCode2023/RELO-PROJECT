import React, { useEffect } from 'react';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../css/Footer.css'

function Footer() {

  return (
    <footer>
      <div className='footer-columns'>

      <div className='footer-column'>
        <h5>Contacts</h5>
        <div>
          <ul>
            <li>
              <MdLocationOn /> Taguig, Metro Manila City, Philippines
            </li>
            <li>
              <MdEmail /> reloph2022@gmail.com
            </li>
          </ul>
        </div>
      </div>

      <div className='footer-column'>
        <h5>Navigation Links</h5>

        <div className='col-container'>
          <div className='col'>
              <Link to='/'>
                  Homepage
              </Link>
              <Link to='/'>
                  Watches
              </Link>
              <Link to='/collections'>
                  Collections
              </Link>
          </div>
          <div className='col'>
              <Link to='/about-us'>
                  About Us
              </Link>
              <Link to='/contact-us'>
                  Contact Us
              </Link>
              <Link to='/'>
                  FAQ's
              </Link>
          </div>
        </div>
           

      </div>

      <div className='footer-column'>
        <h5>Follow Us</h5>
        <div className='footer-btns'>
            <Link to='https://www.facebook.com/relophofficial' target='_blank'>
              <FaFacebook/>
            </Link>
            <Link to='https://www.instagram.com/relophofficial2022' target='_blank'>
              <FaInstagram/>
            </Link>
            <Link>
              <FaTwitter/>
            </Link>
        </div>
      </div>


      </div>

      <small>© 2023 Relowatchph All Rights Reserved</small>

  
    </footer>
  )
}

export default Footer