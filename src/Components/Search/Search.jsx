import React, { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

import "./Search.css";
import SmallTag from "../Tags/SmallTags";
import Trending from "../Trending/Trending";

// Imported Icons
import { AiOutlineSearch } from "react-icons/ai";

// Import Aos for Animation
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init();

const Search = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBavMbnKb8vR_Qea5emkkPJE8r2CzG8q-8",
    libraries: ["places"],
  });

  const types = ["restaurant", "lodging"]; //, "lodging", "spa", "beauty_salon", "hair_care"
  const [rating, setRating] = useState();
  const [rankBy, setrankBy] = useState("distance"); // DISTANCE, PROMINENCE
  const [price, setPrice] = useState(); // Maximum price level (1-4)
  const [openNow, setOpenNow] = useState();

  const [userLocation, setUserLocation] = useState(null);
  const [parlors, setParlors] = useState([]);

  useEffect(() => {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Error getting user location:", error);
      }
    );
  }, []);

  const handleSearch = async () => {
    // Search for nearby parlors
    const service = new window.google.maps.places.PlacesService(
      document.createElement("div")
    );
    let request = {
      location: userLocation,
      type: types,
      rankBy:
        rankBy === "distance"
          ? window.google.maps.places.RankBy.DISTANCE
          : window.google.maps.places.RankBy.PROMINENCE,
    };
    if (rankBy !== "distance") {
      request = { ...request, radius: 5000 };
    }
    if (price > 0) {
      request = { ...request, price_level: price };
    }

    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        const filteredRes = results.filter((res) => (res?.rating >= rating) || res?.opening_hours?.open_now);
        setParlors(rating || openNow ? filteredRes : results);
      } else {
        setParlors([]);
      }
    });
  };

  useEffect(() => {
    if (isLoaded && userLocation) {
      handleSearch();
    }
  }, [isLoaded, userLocation]);

  //UseEffect to initialise Animation duration
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="search">
        <div className="secContainer container">
          <h3 data-aos="fade-up" className="title">
            Find Your Parlour, just one click away!
          </h3>

          <div className="searchDiv grid">
            <input
              value={rating}
              onChange={(ev) => setRating(ev.target.value)}
              data-aos="fade-up"
              data-aos-duration="4000"
              type="number"
              placeholder="Rating"
            />
            <select
              value={openNow}
              onChange={(ev) => setOpenNow(ev.target.value)}
              data-aos="fade-up"
              data-aos-duration="7000"
              placeholder="Open Now"
            >
              <option value="">Any time</option>
              <option value="true">Open Now</option>
            </select>
            <select
              value={rankBy}
              onChange={(ev) => setrankBy(ev.target.value)}
              data-aos="fade-up"
              data-aos-duration="7000"
              placeholder="Sort By"
            >
              <option value=""></option>
              <option value="prominence">PROMINENCE</option>
              <option value="distance">DISTANCE</option>
            </select>
            <input
              value={price}
              onChange={(ev) => setPrice(ev.target.value)}
              data-aos="fade-up"
              data-aos-duration="9000"
              type="number"
              min={0}
              max={4}
              className=""
              placeholder="Price"
            />
            <button
              className="btn primaryBtn flex"
              onClick={() => handleSearch()}
            >
              <AiOutlineSearch className="icon" /> <span>Search</span>
            </button>
          </div>

          <div className="searchDiv grid">
            {types.map((typ, ind) => (
              <SmallTag key={ind} content={typ} />
            ))}
            {/* <SmallTag content="HAIR" />
            <SmallTag content="MASSAGE" />
            <SmallTag content="SPA" /> */}
          </div>

          {/* 
        <h1>Find Parlors Near Me</h1>
        <GoogleMap
          center={userLocation}
          zoom={20}
          style={{ height: "500px", width: "100%" }}
        >
          {parlors.map((parlor, index) => (
            <Marker
              key={index}
              position={{
                lat: parlor.geometry.location.lat(),
                lng: parlor.geometry.location.lng(),
              }}
              title={parlor.name}
            />
          ))}
        </GoogleMap> */}
        </div>
      </div>

      <Trending parlors={parlors} userLocation={userLocation} />
    </>
  );
};

export default Search;
