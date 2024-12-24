import React, {useEffect} from 'react'
import './Sellers.css'

// Imported Images
import sellerImage1 from '../../Assets/logo (1).png'
import sellerImage2 from '../../Assets/logo (6).png'
import sellerImage3 from '../../Assets/logo (3).png'
import sellerImage4 from '../../Assets/logo (4).png'

// Import Aos for Animation
import Aos from 'aos'
import 'aos/dist/aos.css'

const Sellers = () => {
    //UseEffect to initialise Animation duration
    useEffect(()=>{
    Aos.init({duration: 4000})
    }, [])
    
  return (
    <div className='sellers section'>
        <div className="secContainer container">
            <div className="secHeading grid">
              <h3 className="secTitle">
                Explore top sellers in town
              </h3>

              <p>Joseph Samuel Girard holds the Guinness World Record for being the greatest salesman in the world.</p>
           </div>

           <div className="sellersContainer grid">
            {/* Single Seller */}
            <div data-aos='fade-up' className="singleSeller flex">
                <div className="imgDiv flex">
                <img src={sellerImage1} alt="" className="img" />
                </div>
                <span className="info">
                    <h4 className='name'>Toyota</h4>
                    <p>from $40k</p>
                </span>
            </div>
            {/* Single Seller */}
            <div data-aos='fade-up' className="singleSeller flex">
                <div className="imgDiv flex">
                <img src={sellerImage2} alt="" className="img" />
                </div>
                <span className="info">
                    <h4 className='name'>Mercedes Benz</h4>
                    <p>from $60k</p>
                </span>
            </div>
            {/* Single Seller */}
            <div data-aos='fade-up' className="singleSeller flex">
                <div className="imgDiv flex">
                <img src={sellerImage3} alt="" className="img" />
                </div>
                <span className="info">
                    <h4 className='name'>Volkswagen</h4>
                    <p>from $15k</p>
                </span>
            </div>
            {/* Single Seller */}
            <div data-aos='fade-up' className="singleSeller flex">
                <div className="imgDiv flex">
                <img src={sellerImage4} alt="" className="img" />
                </div>
                <span className="info">
                    <h4 className='name'>Hyundai</h4>
                    <p>from $30k</p>
                </span>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Sellers