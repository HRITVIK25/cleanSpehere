import React from 'react';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import InnovationsSection from '../sections/InnovationsSection';
import ImpactSection from '../sections/ImpactSection';
import ContactSection from '../sections/ContactSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <InnovationsSection />
      <ImpactSection />
      <ContactSection />
    </>
  );
};

export default HomePage;