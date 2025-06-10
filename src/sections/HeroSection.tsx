import React from 'react';
import { ChevronDown } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
      style={{ 
        background: 'linear-gradient(135deg, rgba(13,148,136,0.05) 0%, rgba(3,105,161,0.05) 100%)' 
      }}
    >
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/4207891/pexels-photo-4207891.jpeg?auto=compress&cs=tinysrgb&w=1600")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)'
        }}
      ></div>
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <FadeIn direction="left">
            <div className="space-y-6">
              <h1 className="font-bold text-gray-900">
                Creating Cleaner Communities 
                <span className="text-primary-600 block mt-2">Together</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-lg">
                Revolutionizing environmental technology to build a cleaner, greener, and more sustainable future for all.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#innovations" className="btn btn-primary">
                  Discover Our Solutions
                </a>
                <a href="#about" className="btn btn-outline">
                  Learn More
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/4207785/pexels-photo-4207785.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Smart waste sorting technology" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 hover:text-primary-600 transition-colors duration-300 animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default HeroSection;