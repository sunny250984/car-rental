import React, {useEffect} from 'react'
import './Auctions.css'

// Import Aos for Animation
import Aos from 'aos'
import 'aos/dist/aos.css'

//Imported images
import car1 from '../../Assets/pngcars (1).png'
import car2 from '../../Assets/pngcars (2).png'
import car3 from '../../Assets/pngcars (7).png'
import car4 from '../../Assets/pngcars (4).png'
import car5 from '../../Assets/pngcars (5).png'
import car6 from '../../Assets/pngcars (6).png'

//Imported Icons
import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'

const Best = () => {
//UseEffect to initialise Animation duration
 useEffect(()=>{
  Aos.init({duration: 4000})
 }, [])

  return (
    <div className='auctions section'>
       <div className="secContainer container">
           <div className="secHeading flex">
              <h3 className="secTitle">
                Active Auctions
              </h3>

              <div className="navBtns flex">
                <BsArrowLeftShort className='icon leftIcon'/>
                <BsArrowRightShort className='icon rightIcon'/>
              </div>
           </div>

           <div className="carsContainer grid">
            {/* Single car */}
            <div data-aos='fade-up' className="singleCar grid">
               <div className="ImgDiv">
               <img src={car6} alt="Car Image" />
               </div>
                <h5 className="carTitle">
                  Used 2019 Audi S4 Premium Plus
                </h5>
                <span className="miles">
                  11457 Miles
                </span>
                <span className="AWD">
                  AWD  4-Cylinder Turbo
                </span>

                <div className="price_buyBtn flex">
                  <span className='price'>$41,400</span>
                  <span className='buyBtn'>Buy Now</span>
                </div>
            </div>
            {/* Single car */}
            <div data-aos='fade-up' className="singleCar grid singleCarActive">
               <div className="ImgDiv">
               <img src={car5} alt="Car Image" />
               </div>
                <h5 className="carTitle">
                  Mercedes Benz - 2022
                </h5>
                <span className="miles">
                  11457 Miles
                </span>
                <span className="AWD">
                  AWD  4-Cylinder Turbo
                </span>

                <div className="price_buyBtn flex">
                  <span className='price'>$41,400</span>
                  <span className='buyBtn'>Buy Now</span>
                </div>
            </div>
            {/* Single car */}
            <div data-aos='fade-up' className="singleCar grid">
               <div className="ImgDiv">
               <img src={car4} alt="Car Image" />
               </div>
                <h5 className="carTitle">
                  AUDI RB Advanced
                </h5>
                <span className="miles">
                  11457 Miles
                </span>
                <span className="AWD">
                  AWD  4-Cylinder Turbo
                </span>

                <div className="price_buyBtn flex">
                  <span className='price'>$41,400</span>
                  <span className='buyBtn'>Buy Now</span>
                </div>
            </div>
            {/* Single car */}
            <div data-aos='fade-up' className="singleCar grid singleCarActive">
               <div className="ImgDiv">
               <img src={car3} alt="Car Image" />
               </div>
                <h5 className="carTitle">
                  Used 2019 Audi S4 Premium Plus
                </h5>
                <span className="miles">
                  11457 Miles
                </span>
                <span className="AWD">
                  AWD  4-Cylinder Turbo
                </span>

                <div className="price_buyBtn flex">
                  <span className='price'>$41,400</span>
                  <span className='buyBtn'>Buy Now</span>
                </div>
            </div>
            {/* Single car */}
            <div data-aos='fade-up' className="singleCar grid">
               <div className="ImgDiv">
               <img src={car2} alt="Car Image" />
               </div>
                <h5 className="carTitle">
                  Used 2019 Audi S4 Premium Plus
                </h5>
                <span className="miles">
                  11457 Miles
                </span>
                <span className="AWD">
                  AWD  4-Cylinder Turbo
                </span>

                <div className="price_buyBtn flex">
                  <span className='price'>$41,400</span>
                  <span className='buyBtn'>Buy Now</span>
                </div>
            </div>
            {/* Single car */}
            <div data-aos='fade-up' className="singleCar grid singleCarActive">
               <div className="ImgDiv">
               <img src={car1} alt="Car Image" />
               </div>
                <h5 className="carTitle">
                  Used 2019 Audi S4 Premium Plus
                </h5>
                <span className="miles">
                  11457 Miles
                </span>
                <span className="AWD">
                  AWD  4-Cylinder Turbo
                </span>

                <div className="price_buyBtn flex">
                  <span className='price'>$41,400</span>
                  <span className='buyBtn'>Buy Now</span>
                </div>
            </div>
           </div>
       </div>
    </div>
  )
}

export default Best