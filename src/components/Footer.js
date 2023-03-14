import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/landingPage.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container mx-auto w-[92%] ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 p-4">
          <div className="flex justify-center">
            <img
              src={require('../img/logo.svg').default}
              alt=""
              className="lg:col-span-3"
            />
          </div>
          <ul className="flex justify-around items-center font-semibold lg:col-start-5 lg:col-span-4">
            <li>
              <Link className=" text-sm text-[#A09FB0] hover:text-white" to="#">
                Ecosystem
              </Link>
            </li>
            <li>
              <Link className=" text-sm text-[#A09FB0] hover:text-white" to="#">
                DEX
              </Link>
            </li>
            <li>
              <Link className=" text-sm text-[#A09FB0] hover:text-white" to="#">
                IDO
              </Link>
            </li>
            <li>
              <Link className=" text-sm text-[#A09FB0] hover:text-white" to="#">
                Roadmap
              </Link>
            </li>
            <li>
              <Link className=" text-sm text-[#A09FB0] hover:text-white" to="#">
                Docs
              </Link>
            </li>
          </ul>
          <div className="flex justify-between items-center lg:col-span-2 lg:col-start-10">
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
      </div>
      <div className="border-t-2 border-[#424153]">
        <p className=" text-sm text-[#A09FB0] text-center p-4">
          Copyright © 2023 BBGOSWAP DEX. All right reserved.
        </p>
      </div>
    </footer>
  );
}
