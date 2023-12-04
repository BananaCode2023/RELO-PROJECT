import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../css/PhDiver.css'
import Buttons from '../components/Buttons'
import { Link } from 'react-router-dom'
import ScrollToTop from '../components/ScrollToTop'
import AOS from 'aos'
import 'aos/dist/aos.css'
import img1 from '../assets/tealDiver.png'
import img2 from '../assets/phDiverBanner.jpg'



function PhDiver() {

  useEffect(() => {
    AOS.init({duration: 1500})
  },[])

  return (
    <div className='features-page'>
      <Header/>
      <div className='features'>

        <div className='features-row'>

          <div className='features-hero2'>
              <img src={img1} alt="relo-leather" data-aos='zoom-in'/>
          </div>
          

          <div className='features-col'>
              <h1 data-aos='fade-right'>DIVER’S PHILIPPINE DEEP</h1>
              <small data-aos='fade-right'>Contact Us For Pre-Orders</small>
              <Link to='/contact-us' data-aos='fade-right'>
              <Buttons
              buttonType='elevatedButton1'
              buttonText='CONTACT US'
              />
              </Link>
          </div>
            
        </div>

        <div className='features-row white'>
          <p>
          Introducing the remarkable "RE-LO" inaugural diver's timepiece! A pinnacle of precision and quality craftsmanship, this premier edition embodies meticulous artistry, much like its richly woven heritage. Crafted exclusively in the Philippines, each of the hundred timepieces resonates with distinctive allure, mirroring the unparalleled skill and dedication behind its creation.
          </p>
        </div>

        <div className='phDiver-banner'>
          <img src={img2} alt=""/>
        </div>


        <div className='features-row'>
          <h2>SPECIFICATIONS</h2>
          <div className='features-gallery2'>
            {/* CASE SPECIFICATION */}
            <div className='case' data-aos='fade-down'>

              <div className='specifications2'>

              <div>
                <h3>Case</h3>
              </div>

                <table>
                  <div className='table-row2'>
                    <th>Case Material</th>
                    <td>316L Stainless Steel</td>
                  </div>
                  <div className='table-row2'>
                    <th>Case Diameter</th>
                    <td>43mm</td>
                  </div>
                  <div className='table-row2'>
                    <th>Case Height</th>
                    <td>13mm</td>
                  </div>
                  <div className='table-row2'>
                    <th>Lug Width</th>
                    <td>22mm</td>
                  </div>
                  <div className='table-row2'>
                    <th>Crystal</th>
                    <td>Sapphire Crystal</td>
                  </div>
                  
                </table>
              </div>

            </div>

            {/* DETAILS SPECIFICATION */}
            <div className='details' data-aos='fade-down'>

              <div className='specifications2'>

              <div>
                <h3>Details</h3>
              </div>

                <table>
                  <div className='table-row2'>
                    <th>Dial</th>
                    <td>RE-LO Dial with C3 Green Lume</td>
                  </div>
                  <div className='table-row2'>
                    <th>Hands</th>
                    <td>RE-LO Hands with C3 Green Lume</td>
                  </div>
                  <div className='table-row2'>
                    <th>Strap</th>
                    <td>13mm RE-LO Strap with RE-LO logo embedded on buckle</td>
                  </div>
                  <div className='table-row2'>
                    <th>Additional</th>
                    <td>Premium 316 Solid SS Milled V-Style Clasp Strap</td>
                  </div>
                  
                </table>
              </div>
            </div>

            {/* OTHER DETAILS SPECIFICATION */}
            <div className='other-details' data-aos='fade-down'>

              <div className='specifications2'>

              <div>
                <h3>Other Details</h3>
              </div>

                <table>
                  <div className='table-row2'>
                    <th>Water Resistance</th>
                    <td>10ATM</td>
                  </div>
                  <div className='table-row2'>
                    <th>Movement</th>
                    <td>
                      Seiko Instruments Inc. NH35 Automatic movement, 41 Hours power reserve, -20/+40 seconds per day unadjusted, hacking/winding
                    </td>
                  </div>
                  
                </table>
              </div>
            </div>


            

          </div>

        </div>
  
      </div>

      <ScrollToTop/>
      <Footer/>
    </div>
  )
}

export default PhDiver