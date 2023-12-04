import React, { useEffect } from 'react'
import Buttons from './Buttons';
import { Link } from 'react-router-dom';
import AOS from 'aos'
import 'aos/dist/aos.css'

function WatchGallery2({img1, img2, img3, handleHoverImg1, handleHoverImg2, handleHoverImg3}) {

  useEffect(() => {
    AOS.init({duration: 1500})
  },[])
  
  return (
    <>
      <div>
        <h2 id='watch-gallery-heading'>Watches</h2>
        
        <div className='watch-gallery2-layout'>
          <div className='gallery-col' onMouseEnter={handleHoverImg1} data-aos='fade-up'>
            <img 
            src={img1} 
            alt="relo-teal-diver"
            />
            <p>"RE-LO" First Series</p>
            <span>Deep Black Amber</span>
            <Link to='/first_series' target='_blank'>
            <Buttons
            buttonType='elevatedButton2'
            buttonText='FEATURES '
            />
            </Link>
          </div>

          <div className='gallery-col' onMouseEnter={handleHoverImg2}   data-aos='fade-up'>
            <img 
            src={img2} 
            alt="relo-teal-diver" 

            />
            <p>Diver's Philippine Deep</p>
            <span>Teal Diver</span>
            <Link to='/philippine-diver' target='_blank'>
            <Buttons
            buttonType='elevatedButton2'
            buttonText='FEATURES '
            />
            </Link>
          </div>

          <div className='gallery-col' onMouseEnter={handleHoverImg3} data-aos='fade-up'>
          <img 
            src={img3} 
            alt="relo-black-diver" 
            />
            <p>Diver's Philippine Deep</p>
            <span>Black Diver</span>
            <Link to='/philippine-diver' target='_blank'>
            <Buttons
            buttonType='elevatedButton2'
            buttonText='FEATURES '
            />
            </Link>
          </div>
        </div>
        

      </div>
     
     
    </>
  )
}

export default WatchGallery2