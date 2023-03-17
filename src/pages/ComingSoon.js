import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/comingSoon.css';

export default function ComingSoon() {
  return (
    <div className="text-white" id="coming-soon">
      <div className="flex flex-col container mx-auto text-center items-center justify-between h-full">
        <img src={require('../img/logo.svg').default} alt="" className="mt-8" />
        <h1 className="font-extrabold text-4xl lg:text-9xl">Coming Soon</h1>
        <p className="text-lg md:text-2xl font-semibold">
          Get Early Access To Latest Projects
        </p>
        <form action="" className="bg-[#26243C] p-4 rounded-lg">
          <input
            type="text"
            name=""
            id=""
            placeholder="Get Early Access To Latest Projects"
            className="placeholder-text-[#E6E6EB] bg-transparent md:w-96"
          />
          <button
            type="submit"
            className="hover-btn p-4 font-semibold rounded-lg hidden md:inline-block"
          >
            Subscribe
          </button>
          <button
            type="submit"
            className="hover-btn p-4 font-semibold rounded-lg md:hidden ml-4"
          >
            <img src={require('../img/arrow.svg').default} alt="" />
          </button>
        </form>
        <button className="bg-[#FBA45A] px-6 py-4 font-semibold rounded-lg">
          Back To Home
        </button>
        <div>
          <p className="font-semibold text-xl my-6">Follow Our Community</p>
          <div className="flex justify-between items-center max-w-xs ">
            <Link
              to="#"
              className="footer-btn hoverable hover:text-white flex justify-center items-center"
            >
              <img src={require('../img/twitter.svg').default} alt="" />
            </Link>
            <Link
              to="#"
              className="footer-btn hoverable hover:text-white flex justify-center items-center"
            >
              <img src={require('../img/Discord.svg').default} alt="" />
            </Link>
            <Link
              to="#"
              className="footer-btn hoverable hover:text-white flex justify-center items-center"
            >
              <img src={require('../img/Telegram.svg').default} alt="" />
            </Link>
            <Link
              to="#"
              className="footer-btn hoverable hover:text-white flex justify-center items-center"
            >
              <img src={require('../img/Medium.svg').default} alt="" />
            </Link>
          </div>
        </div>
        <p className=" text-sm text-[#A09FB0] text-center p-4">
          Copyright © 2023 BBGOSWAP DEX. All right reserved.
        </p>
      </div>
    </div>
  );
}
