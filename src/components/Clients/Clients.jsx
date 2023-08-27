import React from "react";
import "./Clients.css";

const Clients = () => {
  return (
    <section className="clients-wrapper">
      <div className="clients-container">
        <h4>some of our clients</h4>
        <hr className="hr" />
        <div className="testimony">
          <p>
            Phosfluorescently leverage other's pandemic e-commerce via
            principle-centered relationships. Rapidiously whiteboard team
            building systems for mission-critical.
          </p>
          <div className="flex client">
            <img src="./images/33.jpg" alt="" />
            <div className="flexCol client-info">
              <div className="name">
                <span>CLARA SEINFIELD</span>
                <span>Client</span>
              </div>
              <div className="rating">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            </div>
          </div>
        </div>
        <div className="flex clients">
          <img src="./images/client_01.svg" alt="" />
          <img src="./images/client_02.svg" alt="" />
          <img src="./images/client_03.svg" alt="" />
          <img src="./images/client_04.svg" alt="" />
          <img src="./images/client_05.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Clients;
