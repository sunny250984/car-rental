import React, {useEffect} from 'react'
import './Review.css'

//Imported images
import car1 from '../../Assets/image1.png'
import car2 from '../../Assets/image8.png'
import car3 from '../../Assets/image9.png'
import User1 from '../../Assets/user (14).png'
import User2 from '../../Assets/user (6).png'
import User3 from '../../Assets/user (23).png'

//Imported Icons
import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'

// Import Aos for Animation
import Aos from 'aos'
import 'aos/dist/aos.css'

const Review = () => {

  //UseEffect to initialise Animation duration
 useEffect(()=>{
  Aos.init({duration: 4000})
 }, [])

  return (
    <div className='review section'>
    <div className="secContainer container">
        <div className="secHeading flex">
           <h3 className="secTitle">
             Recent Reviews
           </h3>

           <div className="navBtns flex">
             <BsArrowLeftShort className='icon leftIcon'/>
             <BsArrowRightShort className='icon rightIcon'/>
           </div>
        </div>

        <div className="reviewContainer grid">
         {/* Single Review */}
         <div data-aos='fade-up' className="singleReview grid">
            <div className="ImgDiv">
            <img src={car1} alt="Car Image" />
            </div>
             <h5 className="reviewTitle">
               2023 Cadiallac
             </h5>
             <span className="desc">
             Good cars are safe, fast, affordable to purchase, economical to operate, reliable, capacious, comfortable, and attractive.
             </span>

             <div className="reviewerDiv flex">
              <div className="leftDiv flex">
                <div className="reviewerImg">
                  <img src={User2} alt="Reviewer Image" />
                </div>
                <div className="aboutReviewer">
                  <span className="name">
                    Jakline Nelson
                  </span>
                  <p>Cheif Editor</p>
                </div>
              </div>
              <div className="rightDiv flex">
                <AiFillStar className='icon'/>
                <blockquote>4.84</blockquote>
              </div>
             </div>
             
         </div>

         {/* Single Review */}
         <div data-aos='fade-up' className="singleReview grid">
            <div className="ImgDiv">
            <img src={car3} alt="Car Image" />
            </div>
             <h5 className="reviewTitle">
               2023 Toyota
             </h5>
             <span className="desc">
             Good cars are safe, fast, affordable to purchase, economical to operate, reliable, capacious, comfortable, and attractive.
             </span>

             <div className="reviewerDiv flex">
              <div className="leftDiv flex">
                <div className="reviewerImg">
                  <img src={User1} alt="Reviewer Image" />
                </div>
                <div className="aboutReviewer">
                  <span className="name">
                    Nicole Webb
                  </span>
                  <p>CEO Atlantis</p>
                </div>
              </div>
              <div className="rightDiv flex">
                <AiFillStar className='icon'/>
                <blockquote>5.00</blockquote>
              </div>
             </div>
             
         </div>

         {/* Single Review */}
         <div data-aos='fade-up' className="singleReview grid">
            <div className="ImgDiv">
            <img src={car2} alt="Car Image" />
            </div>
             <h5 className="reviewTitle">
               2023 Cadiallac
             </h5>
             <span className="desc">
             Good cars are safe, fast, affordable to purchase, economical to operate, reliable, capacious, comfortable, and attractive.
             </span>

             <div className="reviewerDiv flex">
              <div className="leftDiv flex">
                <div className="reviewerImg">
                  <img src={User3} alt="Reviewer Image" />
                </div>
                <div className="aboutReviewer">
                  <span className="name">
                    Israel Abaho
                  </span>
                  <p>Sou Chef</p>
                </div>
              </div>
              <div className="rightDiv flex">
                <AiFillStar className='icon'/>
                <blockquote>4.94</blockquote>
              </div>
             </div>
             
         </div>

        </div>
    </div>
 </div>
  )
}

export default Review