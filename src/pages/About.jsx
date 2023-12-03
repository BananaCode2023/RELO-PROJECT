import React from 'react'
import Header from '../components/Header'
import '../css/About.css'
import Footer from '../components/Footer'
import AboutImgs from '../components/AboutImgs'
import aboutImg1 from '../assets/aboutImg1.jpg'
import aboutImg2 from '../assets/aboutImg2.jpg'
import aboutImg3 from '../assets/aboutImg3.jpg'
import aboutImg4 from '../assets/aboutImg4.jpg'
import aboutImg5 from '../assets/aboutImg5.jpg'
import aboutImg6 from '../assets/aboutImg6.jpg'
import aboutImg7 from '../assets/aboutImg7.jpg'
import ScrollToTop from '../components/ScrollToTop'


function About() {



  return (
    <div className='about-us'>
      <Header/>
      <article>
        <h1>OUR STORY</h1>
        <p>
        Lorem ipsum dolor sit amet consectetur. Varius dapibus in sed volutpat nunc lectus habitasse. Erat pellentesque id tellus elit interdum. Sem duis cursus vel mattis nec fames in quis. Tortor ullamcorper rutrum nibh orci auctor duis risus. Accumsan mi id ut molestie imperdiet sapien tellus. Hendrerit eget vivamus ut rhoncus. Laoreet auctor tellus eget posuere purus porttitor. Aliquam egestas ligula eget eget congue quis libero. Quis iaculis morbi sit in in enim consectetur morbi ornare. Cras cursus montes vel tempus tellus etiam nibh id. Risus interdum lacus eu euismod arcu tincidunt massa velit.<br/><br/>

        Scelerisque fermentum tincidunt vestibulum vitae facilisi ullamcorper. Quis at lacus ullamcorper semper pulvinar. Aliquam tortor nec urna ultricies ullamcorper tincidunt tellus dictum vitae. Fermentum fringilla sapien libero hendrerit nunc. Interdum eu viverra elit proin diam non sollicitudin vel ultricies. Facilisis malesuada massa volutpat nisi.
        Sit duis in ut semper morbi leo mauris eget a. Id at ultricies sem quis. In eget orci diam donec sit. Vitae magna turpis habitant tristique tempus quis.<br/><br/>

        In velit dapibus sagittis consectetur volutpat phasellus vestibulum. In nisl mi egestas tellus magna duis ut. Risus libero odio condimentum sapien a ultrices cum id tempus pharetra.
        </p>

        <AboutImgs
        img1={aboutImg1}
        img2={aboutImg2}
        img3={aboutImg3}
        img4={aboutImg4}
        />
        <div className='about-gallery'>
        <img src={aboutImg1} alt="" />
        <img src={aboutImg2} alt="" />
        <img src={aboutImg3} alt="" />
        <img src={aboutImg4} alt="" />
        </div>

      </article>

      <div className='article2-background'>
      <article className='article2'>
        <h1>OUR WATCHES</h1>
        <p>
        Lorem ipsum dolor sit amet consectetur. Varius dapibus in sed volutpat nunc lectus habitasse. Erat pellentesque id tellus elit interdum. Sem duis cursus vel mattis nec fames in quis. Tortor ullamcorper rutrum nibh orci auctor duis risus. Accumsan mi id ut molestie imperdiet sapien tellus. Hendrerit eget vivamus ut rhoncus. Laoreet auctor tellus eget posuere purus porttitor. Aliquam egestas ligula eget eget congue quis libero. Quis iaculis morbi sit in in enim consectetur morbi ornare. Cras cursus montes vel tempus tellus etiam nibh id. Risus interdum lacus eu euismod arcu tincidunt massa velit.<br/><br/>

        Scelerisque fermentum tincidunt vestibulum vitae facilisi ullamcorper. Quis at lacus ullamcorper semper pulvinar. Aliquam tortor nec urna ultricies ullamcorper tincidunt tellus dictum vitae. Fermentum fringilla sapien libero hendrerit nunc. Interdum eu viverra elit proin diam non sollicitudin vel ultricies. Facilisis malesuada massa volutpat nisi.
        Sit duis in ut semper morbi leo mauris eget a. Id at ultricies sem quis. In eget orci diam donec sit. Vitae magna turpis habitant tristique tempus quis.<br/><br/>

        In velit dapibus sagittis consectetur volutpat phasellus vestibulum. In nisl mi egestas tellus magna duis ut. Risus libero odio condimentum sapien a ultrices cum id tempus pharetra.
        </p>

        <AboutImgs
        img1={aboutImg5}
        img2={aboutImg6}
        img3={aboutImg7}
        img4={aboutImg2}
        aboutGalleryClass='aboutGalleryClass'
        />
        <div className='about-gallery'>
        <img src={aboutImg5} alt="" />
        <img src={aboutImg6} alt="" />
        <img src={aboutImg7} alt="" />
        <img src={aboutImg2} alt="" />
        </div>

      </article>
      </div>
      
      <ScrollToTop/>
      <Footer/>
    </div>
  )
}

export default About