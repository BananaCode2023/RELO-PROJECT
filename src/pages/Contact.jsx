import React from 'react'
import Header from '../components/Header'
import '../css/Contact.css'
import Footer from '../components/Footer'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Buttons from '../components/Buttons';
import ScrollToTop from '../components/ScrollToTop'

function Contact() {
  return (
    <div className='contact-us'>
      <Header/>
      <div className='contact-wrapper'>
        

        <div className='contact-container'>
          <h1>GET IN TOUCH</h1>
          <div className='contact-row'>
            <h3>RE-LO Watch Co.</h3>
            <p>
              123 Street Village Subdivision, Quezon City, Metro Manila Philippines 1114
            </p><br/>
            <p>
              Telephone (+63) 1 2345 6789 <br/>
              Mobile (+63) 123 456 7890
            </p><br/>
            <p>
              Email: reloph2022@gmail.com
            </p>
          </div>

          <div className='contact-row'>
            <h3>You Can Easily Reach Us Out</h3>
            <p>Don't hesitate to DM & Follow us on our social media accounts.</p>
            <div className='socmed-icons'>
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

          <div className='contact-row'>
            <h3>How Can We Help You?</h3>
            <p>Feel free to write us a message for any questions, suggestions or orders.</p>
          </div>

            <form>
              <div className='input-row'>
              <input type="text" placeholder='Name'/>
              <input type="text" placeholder='Email' />
              </div>
              <textarea name="" id=""  placeholder='Message'></textarea>

              <div className='button-container'>
                <button type='submit'>SUBMIT</button>
              </div>
            </form>
        </div>

        <div className='contact-hero'></div>
      </div>


      <ScrollToTop/>
      <Footer/>
    </div>
  )
}

export default Contact