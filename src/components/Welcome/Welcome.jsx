import React from "react";
import "./Welcome.css";
import {FiTruck} from 'react-icons/fi'
import { PiAirplaneInFlightBold } from "react-icons/pi";
import { RiShipLine } from "react-icons/ri";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="flexCol heading">
        <span>welcome to</span>
        <span>Olakunle's Cargo</span>
        <hr />
      </div>
      <div className="flex welcome-cards">
        <div className="welcome-card">
          <div className="card-overlay"></div>
          <img src="./images/ground-shipping.jpg" alt="" />
          <div className="flexCol welcome-card-text">
            <FiTruck size={55} color="white" />
            <span>Ground delivery</span>
          </div>
        </div>
        <div className="welcome-card">
          <div className="card-overlay"></div>
          <img src="./images/air-delivery.jpg" alt="" />
          <div className="flexCol welcome-card-text">
            <PiAirplaneInFlightBold size={55} color="white" />
            <span>Air delivery</span>
          </div>
        </div>
        <div className="welcome-card">
          <div className="card-overlay"></div>
          <img src="./images/sea-delivery.jpg" alt="" />
          <div className="flexCol welcome-card-text">
            <RiShipLine size={55} color="white" />
            <span>Sea delivery</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
