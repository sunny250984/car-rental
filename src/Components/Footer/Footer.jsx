import React, {useEffect} from 'react'
import './Footer.css'

// Import Aos for Animation
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  
  //UseEffect to initialise Animation duration
 useEffect(()=>{
  Aos.init({duration: 4000})
 }, [])

  return (
    <div className='footer'>
       <div className="footerContainer container">
          <div className="footerMenuDiv grid">
            {/* Single grid */}
            <div data-aos='fade-up' className="singleGrid">
              <span className="footerTitle">
                About
              </span>
              <ul className="footerUl grid">
                <li className="footerLi">
                  How it works
                </li>
                <li className="footerLi">
                  Careers
                </li>
                <li className="footerLi">
                  Affliates
                </li>
                <li className="footerLi">
                  Media
                </li>
              </ul>
             
            </div>

            {/* Single grid */}
            <div data-aos='fade-up' className="singleGrid ">
              <span className="footerTitle">
                Community
              </span>
              <ul className="footerUl grid">
                <li className="footerLi">
                  Recommendations
                </li>
                <li className="footerLi">
                  Gift Cards
                </li>
                <li className="footerLi">
                  Affliates
                </li>
                <li className="footerLi">
                  Selling
                </li>
              </ul>
             
            </div>

            {/* Single grid */}
            <div data-aos='fade-up' className="singleGrid ">
              <span className="footerTitle">
                Become Seller
              </span>
              <ul className="footerUl grid">
                <li className="footerLi">
                  Add Vehicles
                </li>
                <li className="footerLi">
                  Resourcce center
                </li>
                <li className="footerLi">
                  Bonds
                </li>
                <li className="footerLi">
                  Release Dates
                </li>
              </ul>
             
            </div>

            {/* Single grid */}
            <div data-aos='fade-up' className="singleGrid ">
              <span className="footerTitle">
                Booking Support
              </span>
              <ul className="footerUl grid">
                <li className="footerLi">
                  Updates for Covid-19
                </li>
                <li className="footerLi">
                  Help center 
                </li>
                <li className="footerLi">
                  Garages
                </li>
                <li className="footerLi">
                  Trust & Safety
                </li>
              </ul>
             
            </div>
          </div>
          <div className="lowerDiv grid">
             <p>2023 All right reserved</p>
             <blockquote>IsraTech Projects</blockquote>
          </div>
       </div>
    </div>
  )
}

export default Footer