import React from 'react';
import '../styles/landingPage.css';

export default function Roadmap() {
  return (
    <section id="roadmap">
      <div className="h-full flex flex-col items-center justify-center py-12 md:py-24 container mx-auto w-[92%]">
        <h1 className="text-white text-center text-2xl md:text-4xl font-extrabold mb-8">
          Roadmap
        </h1>
        <img src={require('../img/roadmap-content.svg').default} alt="" />
      </div>
    </section>
  );
}
