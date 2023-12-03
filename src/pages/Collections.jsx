import React from 'react'
import Header from '../components/Header'
import '../css/Collections.css'
import Footer from '../components/Footer'
import Buttons from '../components/Buttons'
import { MdOutlineWatch } from "react-icons/md";
import { Link } from 'react-router-dom'
import collection1 from '../assets/gallery1.jpg'
import collection2 from '../assets/gallery2.jpg'
import ScrollToTop from '../components/ScrollToTop'


function Collections() {
  return (
    <div className='collections'>
      <Header/>
     
      <div className='collections-banner'>
        <h1>COLLECTIONS</h1>
      </div>
  
      <div className='collections-container'>
        <div className='collection'>
          <div className='collection-img'></div>
          <div className='collection-desc'>
            <h2>RE-LO FIRST SERIES</h2>
            <p>
            We now launch our very own 1st Microbrand series. The "RE-LO" series! Limited to 100pcs! Numbered 100/100 pcs! For Number reservation just DM or Contact us to check availability!
            </p>
            <Link to='/features'>
              <Buttons
              buttonType='outlineButton1'
              buttonText='FEATURES'
              buttonIcon={<MdOutlineWatch />}
              />
            </Link>
          </div>
        </div>

        <div className='collection'>
          <div className='collection-img'></div>
          <div className='collection-desc'>
            <h2>Diver's Philippine Deep</h2>
            <p>
            We now launch our very own 1st Microbrand series. The "RE-LO" series! Limited to 100pcs! Numbered 100/100 pcs! For Number reservation just DM or Contact us to check availability!
            </p>
            <Link to='/features'>
              <Buttons
              buttonType='outlineButton1'
              buttonText='FEATURES'
              buttonIcon={<MdOutlineWatch />}
              />
            </Link>
          </div>
        </div>
      </div>
      
      <ScrollToTop/>
      <Footer/>
    </div>
  )
}

export default Collections