import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { CiClock1 } from "react-icons/ci";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { TfiGoogle } from "react-icons/tfi";

const Footer = () => {
  return (
    <footer className="flex">
      <div className="flexCol footer-desc">
        <img src="./images/logo.svg" alt="" className="footer_logo_img" />
        <p>
          Conveniently administrate resource maximizing meta-services vis-a-vis
          alternative platforms. Phosfluorescently generate interoperable
          processes with principle-centered mindshare. Competently foster
          premier value and client-focused schemas.
        </p>
      </div>
      <div>
        <nav className="flexCol footer-nav">
          <Link to="/home">HOME</Link>
          <Link to="/about">COMPANY</Link>
          <Link to="contact">GLOBAL COVERAGE</Link>
          <Link to="/social">CONTACT</Link>
        </nav>
      </div>
      <div className="flexCol socials">
        <div className="flexCol">
          <h4>company info</h4>
          <div>
            <CiClock1 size={25} color="#545454" />
            <span>Monday - Friday 09.00AM - 09.00PM</span>
          </div>
          <div>
            <AiOutlinePhone size={25} color="#545454" />
            <span>+2347056682385 &nbsp; +2348105759528</span>
          </div>
          <div>
            <AiOutlineMail size={25} color="#545454" />
            <span>victoribidunmoye@gmail.com</span>
          </div>
        </div>
        <div className="flexCol">
          <h4>we're social</h4>
          <div className="images">
            <BiLogoFacebook size={40} className="social-icons" />
            <BiLogoTwitter size={40} className="social-icons" />
            <TfiGoogle size={40} className="social-icons" />
            <BiLogoLinkedin size={40} className="social-icons" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
