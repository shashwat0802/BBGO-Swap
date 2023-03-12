import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function Section1() {
  const onToggleMenu = (e) => {
    const navLinks = document.querySelector('.nav-links');
    e.name = e.name === 'menu' ? 'close' : 'menu';
    navLinks.classList.toggle('top-[9%]');
  };
  return (
    <section id="section-1" className="container mx-auto">
      <nav className="flex justify-between items-center w-[92%]  mx-auto md:my-4">
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
              <a className="text-[#A09FB0] hover:text-white" href="#">
                Ecosystem
              </a>
            </li>
            <li>
              <a className="text-[#A09FB0] hover:text-white" href="#">
                DEX
              </a>
            </li>
            <li>
              <a className="text-[#A09FB0] hover:text-white" href="#">
                IDO
              </a>
            </li>
            <li>
              <a className="text-[#A09FB0] hover:text-white" href="#">
                Roadmap
              </a>
            </li>
            <li>
              <a className="text-[#A09FB0] hover:text-white" href="#">
                Docs
              </a>
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
    </section>
  );
}
