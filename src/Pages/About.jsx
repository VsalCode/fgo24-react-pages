import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import banner from '../assets/about-banner.png'

const About = () => {
  return (
    <div className="h-fit bg-third font-nunito">
      <Navbar/>
      <section className="flex flex-col gap-7 md:px-20 sm:px-20 px-7 sm:my-10 my-1 md:mb-20 mb-15">
        <div className="text-center flex flex-col sm:gap-4 gap-2">
          <h3 className="sm:text-2xl text-xl text-primary font-bold">About Us</h3>
          <h1 className="sm:text-5xl text-2xl font-extrabold text-secondary">Our Teammate</h1>
        </div>
        <div className="md:flex md:flex-row md:justify-between md:text-start gap-7 flex flex-col justify-center items-center text-center">
          <div className="flex items-center">
            <img src={banner} alt="about banner" />
          </div>
          <div className="flex flex-col justify-center gap-5 font-medium md:text-base text-sm   ">
            <p>We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business</p>
            <p>We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business</p>
            <div className="flex md:justify-start justify-center gap-3">
              <button className="shadow cursor-pointer bg-primary text-white rounded-full px-5 py-3">About Us</button>
              <button className="shadow cursor-pointer border-primary border-2 text-primary rounded-full px-5 py-3">Our Story</button>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default About;
