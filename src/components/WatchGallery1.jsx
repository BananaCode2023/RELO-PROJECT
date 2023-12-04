import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { EffectFade, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import '../css/WatchGallery.css'
import Buttons from './Buttons';
import AOS from 'aos'
import 'aos/dist/aos.css'

function WatchGallery({img1,img2,img3}) {

  useEffect(() => {
    AOS.init({duration: 1500})
  },[])

  return (
    <div className='watch-gallery1-layout'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        loop={true}
        modules={[EffectFade, Navigation]}
        className="gallerySwiper"
      >
        <SwiperSlide className='gallery-swiperSlide'>
          <img src={img1} alt="relo-first-series" data-aos='fade-up' />
          <p>"RE-LO" First Series</p>
          <span>Deep Black Amber</span>
          <Link to='/first_series' target='_blank'>
            <Buttons
            buttonType='elevatedButton2'
            buttonText='FEATURES '
            />
          </Link>
        </SwiperSlide>

        <SwiperSlide className='gallery-swiperSlide'>
          <img src={img2} alt="relo-teal-diver"  data-aos='fade-up'/>
          <p>Diver's Philippine Deep</p>
          <span>Teal Diver</span>
          <Link to='/teal-diver' target='_blank'>
            <Buttons
            buttonType='elevatedButton2'
            buttonText='FEATURES '
            />
          </Link>
        </SwiperSlide>

        <SwiperSlide className='gallery-swiperSlide'>
          <img src={img3} alt="relo-black-diver" data-aos='fade-up' />
          <p>Diver's Philippine Deep</p>
          <span>Black Diver</span>
          <Link to='/black-diver' target='_blank'>
            <Buttons
            buttonType='elevatedButton2'
            buttonText='FEATURES '
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default WatchGallery