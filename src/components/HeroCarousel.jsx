import React, { useEffect } from 'react'
import '../css/HeroCarousel.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade,Autoplay,Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import brandLogo from '../assets/RELO-whiteLogo 1.png'
import Buttons from '../components/Buttons'
import { MdOutlineEast } from "react-icons/md";
import { Link } from 'react-router-dom';
import watch1 from '../assets/B&Owatch.png'


function Carousel() {
  useEffect(() => {
    AOS.init({duration: 1500})
  },[])

  return (
    <>
    <Swiper
        pagination={{
          type: 'progressbar',
        }}
        effect={'fade'}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='carousel-wrapper'   data-aos='fade'>
          <div className='hero-img'>
            <div className='content'>
              <h2 id='tagline'>Your Time, Our Priority</h2>
            </div>
            <div className='content'>
              <h1>MADE IN THE PHILIPPINES</h1>
              <p >Microbrand Diver's Watch</p>
              <small>It takes more than money to wear something you are proud of</small>
            </div>
          </div>
        </SwiperSlide >

        <SwiperSlide className='carousel-wrapper'>
          <div className='hero-img'>
            <div className='content' >
              <img src={brandLogo} alt="" />
              <span>Made With Pride and Precision</span>
              <Link to='/collections'>
              <Buttons 
              buttonType='elevatedButton2'
              buttonText= 'SEE COLLECTION'
              buttonIcon= {<MdOutlineEast/>}
              />
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className='carousel-wrapper'>
          <div className='hero-img'>
            <div className='content'>
              <div className='content-col'>
                <h2>LIMITED EDITION</h2>
                <h3>Only 100 pieces Available</h3>
                <small id='content-small'>Contact us for reservations</small>
                <Link to='/contact-us'>
                  <Buttons 
                  buttonType='elevatedButton2'
                  buttonText= 'CONTACT US'
                  />
                </Link>
              </div>
              <div className='content-col'>
                <img src={watch1} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Carousel