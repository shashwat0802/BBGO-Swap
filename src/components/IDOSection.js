import React from 'react';
import '../styles/landingPage.css';

export default function IDOSection() {
  return (
    <section id="ido-section">
      <div className="container w-[92%] mx-auto py-8 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex justify-center items-center">
            <img src={require('../img/ido.svg').default} alt="" />
          </div>
          <div className="text-white flex flex-col justify-center max-w-xl">
            <h1 className="text-2xl md:text-4xl font-extrabold my-8">
              What is BBGOSWAP IDO Launchpad?
            </h1>
            <p>
              BBGOSWAP launchpadhelps people to create and launch NFT and
              metaverseinitiatives. The creators can boost finances to develop,
              launch, and sell their projects using BBGOSWAP Launchpad
              development services. These are comparable to IDO Launchpad's.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
