/* eslint-disable no-unused-vars */
import React from "react";
import BannerImg from "../../assets/767.jpg";


const BgStyle = {
  backgroundImage: `url(${BannerImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const Hero = () => {
  return (
    <div
      style={BgStyle}
      className=" duration-300 "
    >
      <div className="bg-white/60 duration-300 ">
        <div className="container min-h-[620px] flex items-center">
          <div className="w-full md:w-[850px] mx-auto text-center space-y-5 heading">
            <p data-aos="fade-up" className="text-primary text-2xl">
              2024 International Conference on
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-5xl md:text-7xl font-bold"
            >
              Responsible, Generative and Explainable AI (ResGenXAI)
            </h1>
            <p data-aos="fade-up" data-aos-delay="500" className="text-2xl md:text-3xl">
              Advancing AI with Responsibility, Creativity, and Transparency{" "}
            </p>
            <h3 data-aos="fade-up" data-aos-delay="500" className="text-2xl md:text-3xl">August 1-3, 2024 | Bhubaneswar, Odisha</h3>
            <button
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-once={"true"}
              className="primary-btn"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
