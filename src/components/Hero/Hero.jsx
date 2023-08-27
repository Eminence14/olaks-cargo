import React from "react";
import "./Hero.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import {CiClock1} from 'react-icons/ci'
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="hero-container">
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Navigation, EffectFade]}
        navigation
        effect="fade"
      >
        <SwiperSlide>
          <div className="overlay"></div>
          <img src="./images/bg.jpg" alt="" className="hero-images" />
          <div className="in-text">
            <span>Ground, Air or Sea</span>
            <span>we deliver your package in no-time</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="overlay"></div>
          <img src="./images/slide_05.jpg" alt="" className="hero-images" />
          <div className="in-text">
            <span>Fast, safe and accurate</span>
            <span>anywhere in this world</span>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="flex hero-side-note">
        <div className="flex note-item">
          <CiClock1 size={40} color="#5c5c70" />
          <div className=" flexCol note-text">
            <h3>opening hours</h3>
            <span>Monday - Friday 09.00 - 18.00</span>
            <span>Saturday 09.00 - 14.00</span>
          </div>
        </div>
        <div className="flex note-item">
          <AiOutlinePhone size={40} color="#5c5c70" />
          <div className=" flexCol note-text">
            <h3>call us anytime</h3>
            <span>+2348121435465</span>
            <span>+2347089674523</span>
          </div>
        </div>
        <div className="flex note-item">
          <AiOutlineMail size={40} color="#5c5c70" />
          <div className=" flexCol note-text">
            <h3>email us</h3>
            <span>Monday - Friday 09.00 - 18.00</span>
            <span>Saturday 09.00 - 14.00</span>
          </div>
        </div>
        <button className="button">REQUEST A QUOTE NOW</button>
      </div>
    </div>
  );
};

export default Hero;
