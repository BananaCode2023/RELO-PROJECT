import { useState, useEffect, useRef } from 'react'
import Header from '../components/Header'
import '../css/Contact.css'
import Footer from '../components/Footer'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop'
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

function Contact() {

  const [formValidation, setFormValidation] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    if (!formValidation.name.trim()) {
      toast.error("Name is required.")
      valid = false;
    }

    if (!formValidation.email.trim()) {
      toast.error("Email is required.")
      valid = false;
    }
    else if (!/\S+@\S+\.\S+/.test(formValidation.email)) {
      toast.error("Invalid Email Address.")
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValidation({ ...formValidation, [name]: value });
    setTyping('input-label')
  };
  //End of validation form

  const [typing, setTyping] = useState('')

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
    emailjs.sendForm('service-ID', 'template-No', form.current, 'Form-number')
      .then((result) => {
          console.log(result.text);
          alert('Beta Version')
      }, (error) => {
          console.log(error.text);
      });
    }
    else{
      alert('Thankyou for contacting us. Unfortunately this is a Beta Version of our website. You can still contact us on our social media pages and order products with free shipping.')
    }
  };
  
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

            <form ref={form} onSubmit={sendEmail}>
              <div className='inputs'>
              
                <div className='input-row'>
                  <input 
                  type="text" 
                  id='name'
                  name='name' 
                  onChange={handleInputChange} 
                  value={formValidation.name} 
                  />
                  <label 
                  htmlFor="name" 
                  className={typing}>
                    Name
                  </label>
                </div>

                <div className='input-row'>
                  <input 
                  type="email" 
                  id='email'
                  name='email' 
                  onChange={handleInputChange} 
                  value={formValidation.email} 
                  />
                  <label 
                  htmlFor="email" 
                  className={typing}>
                    Email
                  </label>
                </div>

              </div>

              <div className='input-row'>
                <textarea 
                name="" 
                id="textarea" 
                >
                </textarea>
                <label 
                htmlFor="textarea" 
                className={typing}>
                  Mesage
                </label>
              </div>

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