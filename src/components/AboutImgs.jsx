import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import '../css/WatchGallery.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

function AboutImgs({img1,img2,img3, img4, aboutGalleryClass}) {

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
        <SwiperSlide className={`gallery-swiperSlide2 ${aboutGalleryClass}`}>
          <img src={img1} alt="" data-aos='fade-up' />
        </SwiperSlide>

        <SwiperSlide className={`gallery-swiperSlide2 ${aboutGalleryClass}`}>
          <img src={img2} alt=""  data-aos='fade-up'/>
        </SwiperSlide>

        <SwiperSlide className={`gallery-swiperSlide2 ${aboutGalleryClass}`}>
          <img src={img3} alt="" data-aos='fade-up' />
        </SwiperSlide>

        <SwiperSlide className={`gallery-swiperSlide2 ${aboutGalleryClass}`}>
          <img src={img4} alt="" data-aos='fade-up' />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default AboutImgs