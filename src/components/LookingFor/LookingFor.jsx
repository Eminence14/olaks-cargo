import React from "react";
import "./LookingFor.css";
import { FiTruck } from "react-icons/fi";
import { TbCubeSend } from "react-icons/tb";
import { LiaGlobeEuropeSolid } from "react-icons/lia";
import { PiWarehouseBold } from "react-icons/pi";

const LookingFor = () => {
  return (
    <section className="looking_for-wrapper">
      <div className="looking_for-container">
        <h3>What are you looking for</h3>
        <hr className="hr"/>
        <p>
          Compellingly evisculate error-free e-commerce and cutting-edge best
          practices. Competently deploy customer directed benefits without
          premium opportunities. Completely productivate stand-alone materials
          with prospective scenarios.
        </p>
        <div className="flexCol items">
          <div className="flex row1">
            <div className="item">
              <FiTruck size={40} color="#0d5195" />
              <h5>FORWARDING SERVICES</h5>
              <p>
                Interactively generate covalent architectures whereas
                world-class leadership skills
              </p>
            </div>
            <div className="item">
              <TbCubeSend size={55} color="#0d5195" />
              <h5>TRANSPORT OF PACKAGED GOODS</h5>
              <p>
                Interactively generate covalent architectures whereas
                world-class leadership skills
              </p>
            </div>
          </div>
          <div className="flex row2">
            <div className="item">
              <LiaGlobeEuropeSolid size={45} color="#0d5195" />
              <h5>INTERNATIONAL ROAD TRANSPORT</h5>
              <p>
                Interactively generate covalent architectures whereas
                world-class leadership skills
              </p>
            </div>
            <div className="item">
              <PiWarehouseBold size={45} color="#0d5195" />
              <h5>WAREHOUSING SERVICE</h5>
              <p>
                Interactively generate covalent architectures whereas
                world-class leadership skills
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LookingFor;