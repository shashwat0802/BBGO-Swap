import React from 'react';
import Footer from '../components/Footer';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';

export default function LandingPage() {
  return (
    <>
      <div id="section-1-wrapper">
        <Section1 />
      </div>
      <Section2 />
      <Footer />
    </>
  );
}
