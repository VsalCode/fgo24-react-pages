import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <div className="h-fit bg-third font-nunito">
      <Navbar />
      <section className="flex flex-col items-center md:px-30 sm:px-20 px-7 sm:my-10 my-1 mb-15">
          <div className="flex flex-col items-center justify-center text-center gap-6 py-7">
            <h1 className="sm:text-4xl text-2xl font-extrabold text-secondary font-nunito">Make your dream business goal come true</h1>
            <p className="sm:text-xl text-base text-secondary">when you need us for improve your business, then come with us to help your business have reach it, you just sit and feel that goal </p>
            <button className="bg-primary text-white px-5 py-3 rounded-full font-semibold cursor-pointer">Start Project</button>
          </div>
          <div className="flex items-center justify-center">
            <img className="md:w-[70%]" src="/src/assets/banner.png" alt="" />
          </div>
      </section>
      <Footer/>
    </div>
  );
};

export default HomePage;
