import React from "react";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mb-10">
      <div className="flex bg-[teal] flex-col lg:flex-row lg:justify-between justify-center items-center px-2 py-6">
        <div className="flex justify-center lg:w-1/2 items-center">
          <h2 className="text-2xl lg:text-4xl font-bold pb-2">
            Subscribe for our newsletters
          </h2>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <input type="text" className="w-2/3" />
          <button className="bg-black text-[teal] py-1 px-2 font-bold">Sign up</button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between justify-center items-center py-10 lg:px-6 lg:pr-20">
        <img src={Logo} className="w-28" alt="" />
        <div className="flex justify-center gap-10 pt-5">
          <div className="flex flex-col justify-center items-center">
            <h3 className="font-bold text-lg">Categories</h3>
            <div className="flex flex-col font-light">
              <Link className="ll">Science</Link>
              <Link className="ll">Art</Link>
              <Link className="ll">Technology</Link>
              <Link className="ll">Cinema</Link>
              <Link className="ll">Design</Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg">Quick Links</h3>
            <div className="flex flex-col font-light">
              <Link className="ll">Contact Us</Link>
              <Link className="ll">Adversiting</Link>
              {/* <Link>A</Link> */}
            </div>
          </div>
        </div>

      </div>

      {/* <span>
        Made with ♥️ and <b>React.js</b>.
      </span> */}
    </footer>
  );
};

export default Footer;
