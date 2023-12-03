import {useState, useEffect} from 'react'
import { Collapse, NavLink, Navbar, Nav, NavItem} from 'reactstrap'
import { MdDehaze, MdClose } from "react-icons/md";
import '../css/Header.css'
import logo from '../assets/RELO-whiteLogo 1.png'
import Buttons from './Buttons';
import AOS from 'aos'
import 'aos/dist/aos.css'

function Header() {

  useEffect(() => {
    AOS.init({duration: 1000})
  },[])

  const [openMenuBar, setOpenMenuBar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setOpenMenuBar(!openMenuBar);
    toggle()
  };

  const toggle = () => setIsOpen(!isOpen)

  return (
    <>
    <Navbar className='navbar'>

        <NavLink href='/' className='nav-logo'>
          <img src={logo} alt="Relo logo" data-aos='fade'/>
        </NavLink>
      
      <div className='nav-buttons' data-aos='fade-right' >
        <ul>
          <li>
            <NavLink href='/' id='watches-page'>
              Watches
            </NavLink>
          </li>
          <li>
            <NavLink href='/collections' id='collections-page'>
              Collections
            </NavLink>
          </li>
          <li>
            <NavLink href='/about-us' id='about-page'>
              About
            </NavLink>
          </li>
          <NavLink href='/contact-us' id='contact-page'>
          <Buttons 
          buttonType='outlineButton2'
          buttonText='Contact Us'
          />
          </NavLink>
          
        </ul>

        <div onClick={handleClick}>
         {openMenuBar ? <MdClose data-aos='fade-up' /> : <MdDehaze />}
        </div>
        
      </div>
      
    </Navbar>
    <div className={!isOpen ? 'closeMenu' : 'openMenu'}>
          <NavLink href='/' id='watches-page'>Watches</NavLink>
          <NavLink href='/collections' id='collections-page'>Collections</NavLink>
          <NavLink href='/about-us' id='about-page'>About</NavLink>
          <NavLink href='/contact-us' id='contact-page'>
            <Buttons 
            buttonType='outlineButton2'
            buttonText='Contact Us'
            />
          </NavLink>
        </div>
    
    </>
  )
}

export default Header