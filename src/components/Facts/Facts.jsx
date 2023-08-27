import React from "react";
import "./Facts.css";
import { RiShipLine } from "react-icons/ri";
import { LiaGlobeEuropeSolid } from "react-icons/lia";
import {VscLocation} from 'react-icons/vsc';
import {MdOutlineEngineering} from 'react-icons/md';
import CountUp from "react-countup";

const Facts = () => {
  return (
    <section className="facts-wrapper">
      <div className="facts-container">
        <header className="flexCol">
          <h4>TRUE FACTS</h4>
          <h1>THE FACTS SPEAKS FOR THEMSELVES</h1>
          <hr className="hr" />
        </header>
        <div className="flexCol facts-main">
          <div className="flex fact-row">
            <div className="flex fact-card">
              <div className="fact-card-left">
                <CountUp start={4000} end={8600} duration={2} />
              </div>
              <div className="flexCol fact-card-right">
                <MdOutlineEngineering size={80} color="#303049" />
                <h5>EMPLOYEES ALL OVER THE WORLD</h5>
                <p>
                  Credibly pursue superior resources whereas pandemic
                  e-commerce. Appropriately synthesize cross functional
                  meta-services before tactical e-markets.
                </p>
              </div>
            </div>
            <div className="flex fact-card">
              <div className="fact-card-left">
                +<CountUp start={200} end={936} duration={2} />K
              </div>
              <div className="flexCol fact-card-right">
                <VscLocation size={80} color="#303049" />
                <h5>KILOMETERS PER YEAR</h5>
                <p>
                  Credibly pursue superior resources whereas pandemic
                  e-commerce. Appropriately synthesize cross functional
                  meta-services before tactical e-markets.
                </p>
              </div>
            </div>
          </div>
          <div className="flex fact-row">
            <div className="flex fact-card">
              <div className="fact-card-left">
                <CountUp start={200} end={617} duration={2} />
              </div>
              <div className="flexCol fact-card-right">
                <RiShipLine size={80} color="#303049" />
                <h5>FLEET SIZE</h5>
                <p>
                  Credibly pursue superior resources whereas pandemic
                  e-commerce. Appropriately synthesize cross functional
                  meta-services before tactical e-markets.
                </p>
              </div>
            </div>
            <div className="flex fact-card">
              <div className="fact-card-left">
                <CountUp start={0} end={489} duration={2} />
              </div>
              <div className="flexCol fact-card-right">
                <LiaGlobeEuropeSolid size={80} color="#303049" />
                <h5>CLIENTS WORLDWIDE</h5>
                <p>
                  Credibly pursue superior resources whereas pandemic
                  e-commerce. Appropriately synthesize cross functional
                  meta-services before tactical e-markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts;
