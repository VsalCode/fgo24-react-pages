import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="h-fit bg-third font-nunito">
      <Navbar />
      <section className="flex flex-col gap-7 md:px-20 sm:px-20 px-7 sm:my-10 my-1 md:mb-20 mb-15">
          <div className="text-center flex flex-col sm:gap-4 gap-2">
          <h1 className="sm:text-4xl text-2xl font-extrabold text-secondary">Contact Us</h1>
        </div>
        <form className="flex flex-col gap-5">
          <p>Email</p>
          <div className="flex gap-5 items-center w-full border-1 rounded-full border-primary bg-third px-5 py-3">
            <MdOutlineAlternateEmail className="text-primary"/>
            <input className="border-none outline-0 grow" type="text" placeholder="Input Your Email"/>
          </div>
          <p>Phone</p>
          <div className="flex gap-5 items-center w-full border-1 rounded-full border-primary bg-third px-5 py-3">
            <FaPhone className="text-primary"/>
            <input className="border-none outline-0 grow" type="text" placeholder="Input Your Phone Number" />
          </div>
          <button className="bg-primary text-white shadow font-semibold cursor-pointer py-3 rounded-full mt-4">Submit</button>
        </form> 
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
