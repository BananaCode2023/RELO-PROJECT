import {useState, useEffect} from 'react'
import Buttons from '../components/Buttons'
import Header from '../components/Header'
import '../css/Index.css'
import HeroCarousel  from '../components/HeroCarousel'
import watchInBox from '../assets/watchInBox.jpg'
import Footer from '../components/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'
import WatchGallery1 from '../components/WatchGallery1'
import WatchGallery2 from '../components/WatchGallery2'
import { Link } from 'react-router-dom'
import watch1 from '../assets/B&Owatch.png'
import watch2 from '../assets/Tealwatch.png'
import watch3 from '../assets/B&Wwatch.png'
import ScrollToTop from '../components/ScrollToTop'

function Index() {

  useEffect(() => {
    AOS.init({duration: 1500})
  },[])

  const [showcaseImg1, setShowcaseImg] = useState('img1')
  const [showcaseEffect, setShowcaseEffect] = useState('')

  const handleHoverImg1 = () => {
    setShowcaseImg('img1')
    setShowcaseEffect('fade1')
  }
  const handleHoverImg2 = () => {
    setShowcaseImg('img2')
    setShowcaseEffect('fade2')
  }
  const handleHoverImg3 = () => {
    setShowcaseImg('img3')
    setShowcaseEffect('fade3')
  }

  return (
    <div className='homepage'>
      <Header/>
      <HeroCarousel/>

      <div className='homepage-row' data-aos='fade'>

        <h2>It's About Time</h2>

        <div className='sub-row'  data-aos='fade-right'>
          <img src={watchInBox} alt="product-img" />
        </div>

        <div className='sub-row'  data-aos='fade-left'>
          <h2>It's About Time</h2>
          <p>
          It's the time to support local and microbrands, showcasing unparalleled quality and precision. Embrace artisanal craftsmanship and community-driven innovation. Take your time and always be better. A watch is just a watch, its excellence depends on you.
          </p>
          <Link to='/about-us'>
          <Buttons
          buttonType='elevatedButton1'
          buttonText='READ MORE'
          />
          </Link>
        </div>

      </div>

      <div className='watch-gallery' data-aos='fade-up'>
        <h2>Watches</h2>
        <WatchGallery1
        img1= {watch1}
        img2= {watch2}
        img3= {watch3}
        />
        <WatchGallery2
        img1= {watch1}
        img2= {watch2}
        img3= {watch3}
        handleHoverImg1={handleHoverImg1}
        handleHoverImg2={handleHoverImg2}
        handleHoverImg3={handleHoverImg3}
        />
        <div>
          
        </div>

        <div className='gallery-image' data-aos='fade'>
          <div className={` ${showcaseImg1}`} id={showcaseEffect}></div>
        </div>
      </div>

      <ScrollToTop/>
      <Footer/>
    </div>
  )
}

export default Index