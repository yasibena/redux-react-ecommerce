// AIzaSyCFYDto_PjwDmP50Un3ufwswpR7jS597Wc

import React from "react";
import GoogleMapReact from "google-map-react";
// import "./map.css";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";


const location = {
    address: "1600 Amphitheatre Parkway, Mountain View, california.",
    lat: 37.42216,
    lng: -122.08427,
  };

  const LocationPin = ({ text }) => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  );


export const Map = () => {
    return (
      <div className="map">
        <h2 className="map-h2 font-bold">اطلاعات شاپیفای</h2>
        <div className="google-map mx-[2rem]">
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyCFYDto_PjwDmP50Un3ufwswpR7jS597Wc" }}
            defaultCenter={location}
            defaultZoom={17}>
          {/* <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyCFYDto_PjwDmP50Un3ufwswpR7jS597Wc" }}
            defaultCenter={location}
            defaultZoom={17}> */}
            <LocationPin
              lat={location.lat}
              lng={location.lng}
              text={location.address}
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  };