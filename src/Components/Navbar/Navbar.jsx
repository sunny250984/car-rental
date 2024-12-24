import React, {useState} from 'react'
import './Navbar.css'

// imported logo
import logo from '../../Assets/logo.png'

// imported Icons
import {IoIosCloseCircle} from 'react-icons/io'
import {MdAccountCircle} from 'react-icons/md'
import {TbGridDots} from 'react-icons/tb'


const Navbar = () => {

  // Statement to hold the state
  const [navbar, setNavbar]  = useState('navBar')

  // function to show navbar
  const showNavbar = ()=>{
    setNavbar('navBar showNavbar')
  }

  // function to remove navbar
  const removeNavbar = ()=>{
    setNavbar('navBar')
  }

  // funtion to add header Background color
  const [header, setHeader] =  useState('header')
  const addBg = ()=>{
    if(window.scrollY >= 20){
      setHeader('header addBg')
    }
    else{
      setHeader('header')
    }
  }
  window.addEventListener('scroll', addBg)

  return (
    <div className={header}>
      <div className="logoDiv">
        <img src={logo} alt='logo Image' className='logo' />
      </div>
      <div className={navbar}>
        <ul className="menu">

          <li className="listItem">
            <a href="/" className='link'>Used Cars</a>
          </li>
        
          <li className="listItem">
            <a href="/" className='link'>New Cars</a>
          </li>

          <li className="listItem">
            <a href="/" className='link'>Auctions</a>
          </li>

          <li className="listItem">
            <a href="/" className='link'>Sell</a>
          </li>
        </ul>

        {/* Close Navbar icon */}
        <IoIosCloseCircle className='icon closeIcon' onClick={removeNavbar}/>

      </div>

      <div className="signUp flex">
           <span className="text">Sign Up</span>
            {/* Open/toggle Navbar icon */}
           <TbGridDots className='icon dotsIcon' onClick={showNavbar}/>
      </div>
    </div>
  )
}

export default Navbar