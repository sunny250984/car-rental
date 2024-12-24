import React, { useEffect } from "react";
import "./Trending.css";

//Imported images
import car1 from "../../Assets/nails.png";
import car2 from "../../Assets/nails.png";
import car3 from "../../Assets/threading.png";

//Imported Icons
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";

// Import Aos for Animation
import Aos from "aos";
import "aos/dist/aos.css";

const Trending = ({ parlors, userLocation }) => {
  console.log(parlors);

  const calcDistance = (pl) => {
    const lat1 = userLocation.lat; // user latitude
    const lng1 = userLocation.lng; // user longitude
    const lat2 = pl.location.lat(); // searched place's latitude
    const lng2 = pl.location.lng(); // searched place's longitude

    const earthRadius = 6371; // radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLng = (lng2 - lng1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return earthRadius * c;
  };

  //UseEffect to initialise Animation duration
  useEffect(() => {
    Aos.init({ duration: 4000 });
  }, []);

  return (
    <div className="trending section">
      <div className="secContainer container">
        <div className="secHeading flex">
          <h3 className="secTitle">Near You</h3>

          <div className="navBtns flex">
            {/* <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon rightIcon" /> */}
          </div>
        </div>

        <div className="carsContainer grid">
          {/* Single car */}
          {parlors.length > 0 &&
            parlors.map((parlor, ind) => {
              return (
                <div data-aos="fade-up" className="singleCar grid" key={ind}>
                  <div className="ImgDiv">
                    <img
                      src={
                        parlor?.photos && parlor?.photos.length
                          ? parlor.photos[0].getUrl()
                          : parlor.icon
                      }
                      alt="Car Image"
                    />
                  </div>
                  <h5 className="carTitle">{parlor?.name}</h5>
                  <span className="miles">
                    {calcDistance(parlor?.geometry)} km
                  </span>
                  <span className="AWD">
                    {parlor?.vicinity.length > 33
                      ? parlor?.vicinity.substr(0, 33) + "..."
                      : parlor?.vicinity}
                  </span>

                  <div className="price_seller flex">
                    {parlor?.rating ? (
                      <span className="price">Rating: {parlor?.rating}</span>
                    ) : (
                      null
                    )}
                    <span className="seller">Best Seller</span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Trending;
