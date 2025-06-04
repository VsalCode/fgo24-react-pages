import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/icon/logo-background.png'

const Footer = () => {
  return (
    <footer className="flex flex-col gap-7 h-fit bg-secondary text-white md:px-15 px-7 py-10">
      <div className="md:grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        <div>
          <img className="sm:w-30 w-30" src={logo} alt="logo" />
        </div>
        <div className="flex flex-col sm:my-0 my-7">
          <p className="font-bold text-lg pb-5">Company</p>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div>
          <p className="font-bold text-lg pb-5">Location</p>
          <p>PT Osiris Real Estate Internasional Jl. KH. Wahid Hasyim Kel No.10D Jakarta, Indonesia team@OsirisRealEstate.com</p>
        </div>
      </div>
      <hr />
      <p className="text-center py-5">Copyright @ 2022 Agency Creative. All Right Reserved</p>
    </footer>
  );
};

export default Footer;
