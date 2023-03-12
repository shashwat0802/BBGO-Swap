import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/landingPage.css';

export default function Section1() {
  const onToggleMenu = (e) => {
    const navLinks = document.querySelector('.nav-links');
    e.name = e.name === 'menu' ? 'close' : 'menu';
    navLinks.classList.toggle('top-[9%]');
  };
  return (
    <section id="section-1" className="container mx-auto w-[92%] ">
      <nav className="flex justify-between items-center mx-auto md:pt-4">
        <div>
          <img
            className="cursor-pointer"
            src={require('../img/logo.svg').default}
            alt="..."
          />
        </div>
        <div className="nav-links duration-500 lg:static absolute lg:min-h-fit min-h-[60vh] left-0 top-[-100%] lg:w-auto  w-full flex items-center px-5">
          <ul className="flex lg:flex-row flex-col lg:items-center lg:gap-[4vw] gap-8 font-semibold">
            <li>
              <Link className="text-[#A09FB0] hover:text-white" to="#">
                Ecosystem
              </Link>
            </li>
            <li>
              <Link className="text-[#A09FB0] hover:text-white" to="#">
                DEX
              </Link>
            </li>
            <li>
              <Link className="text-[#A09FB0] hover:text-white" to="#">
                IDO
              </Link>
            </li>
            <li>
              <Link className="text-[#A09FB0] hover:text-white" to="#">
                Roadmap
              </Link>
            </li>
            <li>
              <Link className="text-[#A09FB0] hover:text-white" to="#">
                Docs
              </Link>
            </li>
          </ul>
        </div>
        <button
          onClick={onToggleMenu}
          name="menu"
          className="text-3xl cursor-pointer lg:hidden"
        >
          <FontAwesomeIcon icon={faBars} className="text-white" />
        </button>
      </nav>
      <div className="grid grid-col-12 md:grid-cols-2 md:mt-14 lg:mt-24">
        <div className="text-white ">
          <h1 className="font-extrabold text-4xl md:text-6xl leading-snug">
            Power Your Crypto Revolution With <br />
            <span className="text-[#FBA45A]">BBGOSwap</span>
          </h1>
          <p className="my-4">
            BBGOSwap is a community-supported DEX with cross- chain liquidity,
            an IDO launchpad, and a focus on sustainability.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 text-center font-semibold my-8 ">
            <div className="crypto-wrapper">
              <img src={require('../img/eth.svg').default} alt="" />
              <p className="crypto-text">ETHEREUM</p>
            </div>
            <div className="crypto-wrapper">
              <img src={require('../img/poly.svg').default} alt="" />
              <p className="crypto-text">POLYGON</p>
            </div>
            <div className="crypto-wrapper">
              <img src={require('../img/bnb.svg').default} alt="" />
              <p className="crypto-text">BNB</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-2 lg:gap-12">
            <button className="border-white border-solid border-2 rounded-lg hoverable my-8 lg:px-4 py-4">
              Launch DEX
            </button>
            <button className="border-white border-solid border-2 rounded-lg  hoverable my-8 lg:px-4 py-4">
              Launch IDO
            </button>
            <button className="border-white border-solid border-2 rounded-lg  hoverable my-8 lg:px-4 py-4">
              Whitepaper
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
