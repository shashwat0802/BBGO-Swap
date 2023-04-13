import React from 'react';
import '../styles/landingPage.css';

export default function Roadmap() {
  return (
    <section id="roadmap">
      <div className="h-full flex flex-col items-center justify-center py-12 md:py-24 container mx-auto w-[92%]">
        <h1 className="text-white text-center text-2xl md:text-4xl font-extrabold mb-8">
          Roadmap
        </h1>
        <div className="flex justify-around w-[50%]">
          <img src={require('../img/roadmap-lg.svg').default} alt="" />
          <div>
            <div className="roadmap-card px-10 py-2 mb-8">
              <ul className="text-white font-semibold list-disc">
                <li className="my-4">Company Establishment</li>
                <li className="my-4">White Paper Release</li>
                <li className="my-4">Architecture design</li>
                <li className="my-4">Seed Private sale</li>
              </ul>
            </div>
            <div className="roadmap-card px-10 py-2 my-8">
              <ul className="text-white font-semibold list-disc">
                <li className="my-4">DEX Aggregator Launch</li>
                <li className="my-4">Strategy Private sale</li>
                <li className="my-4">DEX Launchpad design</li>
                <li className="my-4">Public sale</li>
              </ul>
            </div>
            <div className="roadmap-card px-10 py-2 my-8">
              <ul className="text-white font-semibold list-disc">
                <li className="my-4">Aggregator & Launchpad integration</li>
                <li className="my-4">DEX Launchpad Launch</li>
                <li className="my-4">Crypto Wallet design</li>
              </ul>
            </div>
            <div className="roadmap-card px-10 py-2 my-8">
              <ul className="text-white font-semibold list-disc">
                <li className="my-4">DEX & Wallet integration</li>
                <li className="my-4">Crypto Wallet Launch</li>
                <li className="my-4">Governance design</li>
              </ul>
            </div>
            <div className="roadmap-card px-10 py-2 my-8">
              <ul className="text-white font-semibold list-disc">
                <li className="my-4">Analytics Page</li>
                <li className="my-4">Governance Protocol Launch</li>
                <li className="my-4">Platform extension</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
