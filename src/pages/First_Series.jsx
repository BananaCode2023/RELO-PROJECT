import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../css/First_Series.css'
import Buttons from '../components/Buttons'
import { Link } from 'react-router-dom'
import ScrollToTop from '../components/ScrollToTop'
import AOS from 'aos'
import 'aos/dist/aos.css'
import img1 from '../assets/leather3.png'
import img2 from '../assets/leather5.png'
import img3 from '../assets/crown.png'
import img4 from '../assets/leather6.png'

function FirstSeries() {

  useEffect(() => {
    AOS.init({duration: 2000})
  },[])

  return (
    <>
      <Header/>
      <div className='features'>

        <div className='features-row'>

          <div className='features-hero'>
              <img src={img1} alt="relo-leather" />
          </div>

          <div className='features-col'>
              <h1>RE-LO FIRST SERIES</h1>
              <small>Contact Us for Reservation</small>
              <Link to='/contact-us'>
              <Buttons
              buttonType='elevatedButton1'
              buttonText='CONTACT US'
              />
              </Link>
          </div>
            
        </div>

        <div className='features-row'>
          <p>
          This exquisite timepiece, the inaugural edition of its kind, embodies unparalleled craftsmanship, with only a hundred meticulously crafted pieces available. Designed and produced locally in the Philippines, each watch boasts a unique charm, echoing the rich heritage and skilled artisanship of its origin.
          </p>
        </div>

        <div className='features-row'>
          <div className='features-gallery'>
            {/* CASE SPECIFICATION */}
            <div className='case'>

              <div className='features-img'>
                <img src={img2} alt="" />
              </div>

              <div className='specifications'>

              <div>
                <h3>Case</h3>
              </div>

                <table>
                  <div className='table-row'>
                    <th>Case Material</th>
                    <td>316L Stainless Steel</td>
                  </div>
                  <div className='table-row'>
                    <th>Case Diameter</th>
                    <td>42mm</td>
                  </div>
                  <div className='table-row'>
                    <th>Case Height</th>
                    <td>13mm</td>
                  </div>
                  <div className='table-row'>
                    <th>Lug Width</th>
                    <td>22mm</td>
                  </div>
                  <div className='table-row'>
                    <th>Crystal</th>
                    <td>Sapphire Crystal</td>
                  </div>
                  
                </table>
              </div>

            </div>

            {/* CROWN SPECIFICATION */}
            <div className='crown'>
              <div className='features-img'>
                <img src={img3} alt="" />
              </div>

              <div className='specifications'>

              <div>
                <h3>Crown</h3>
              </div>

                <table>
                  <div className='table-row'>
                    <th>Crown Embed</th>
                    <td>RE-LO Crown with “R” marking</td>
                  </div>
                </table>
              </div>
            </div>

            {/* DETAILS SPECIFICATION */}
            <div className='details'>
              <div className='features-img'>
                <img src={img4} alt="" />
              </div>

              <div className='specifications'>

              <div>
                <h3>Details</h3>
              </div>

                <table>
                  <div className='table-row'>
                    <th>Dial</th>
                    <td>RE-LO Dial with C3 Green Lume</td>
                  </div>
                  <div className='table-row'>
                    <th>Hands</th>
                    <td>RE-LO Hands with C3 Green Lume</td>
                  </div>
                  <div className='table-row'>
                    <th>Strap</th>
                    <td>13mm RE-LO Strap with RE-LO logo embedded on buckle</td>
                  </div>
                  <div className='table-row'>
                    <th>Additional</th>
                    <td>Premium 316 Solid SS Milled V-Style Clasp Strap</td>
                  </div>
                  
                </table>
              </div>
            </div>

            {/* OTHER DETAILS SPECIFICATION */}
            <div className='other-details'>
              <div className='features-img'>
                <img src={img2} alt="" />
              </div>

              <div className='specifications'>

              <div>
                <h3>Other Details</h3>
              </div>

                <table>
                  <div className='table-row'>
                    <th>Water Resistance</th>
                    <td>10ATM</td>
                  </div>
                  <div className='table-row'>
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
    </>
  )
}

export default FirstSeries