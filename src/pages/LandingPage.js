import React from 'react';
import Footer from '../components/Footer';
import IDOSection from '../components/IDOSection';
import Roadmap from '../components/Roadmap';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import SwapSection from '../components/SwapSection';

export default function LandingPage() {
  return (
    <>
      <div id="section-1-wrapper">
        <Section1 />
      </div>
      <Section2 />
      <SwapSection />
      <IDOSection />
      <Roadmap />
      <Footer />
    </>
  );
}
