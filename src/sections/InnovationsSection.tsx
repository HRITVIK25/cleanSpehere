import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowRight, Recycle, WifiIcon, BarChart3 } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const InnovationsSection: React.FC = () => {
  return (
    <section 
      id="innovations" 
      className="section relative"
      style={{ 
        background: 'linear-gradient(135deg, rgba(3,105,161,0.05) 0%, rgba(13,148,136,0.05) 100%)' 
      }}
    >
      <div className="container-custom">
        <FadeIn>
          <div className="section-title">
            <h2>Our <span className="text-secondary-600">Innovations</span></h2>
            <p className="section-subtitle">
              Revolutionary solutions for cleaner, smarter, and more sustainable communities
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/2768961/pexels-photo-2768961.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="TrashBot in action" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-8 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-secondary-100 p-2 rounded-full">
                    <Trash2 className="h-6 w-6 text-secondary-600" />
                  </div>
                  <h3 className="text-2xl font-bold">TrashBot</h3>
                </div>
                <p className="text-gray-600">
                  TrashBot is our flagship smart waste management solution that revolutionizes how communities 
                  handle waste. Using advanced sensors, AI, and IoT technology, TrashBot optimizes waste 
                  collection, encourages recycling, and promotes cleaner public spaces.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <WifiIcon className="h-5 w-5 text-secondary-600 mb-2" />
                    <p className="text-sm font-medium">IoT Connected</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <Recycle className="h-5 w-5 text-secondary-600 mb-2" />
                    <p className="text-sm font-medium">Waste Sorting</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <BarChart3 className="h-5 w-5 text-secondary-600 mb-2" />
                    <p className="text-sm font-medium">Analytics</p>
                  </div>
                </div>
                <Link 
                  to="/trashbot"
                  className="inline-flex items-center text-secondary-600 font-medium hover:text-secondary-700 transition-colors"
                >
                  Learn more about TrashBot
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Smart Waste Management</h3>
              <p className="text-gray-600">
                TrashBot represents the future of waste management, combining cutting-edge technology 
                with environmental consciousness. Our solution helps communities:
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <div className="bg-secondary-100 p-2 rounded-full mr-3 mt-1">
                    <Recycle className="h-4 w-4 text-secondary-600" />
                  </div>
                  <span>Optimize waste collection routes and schedules</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary-100 p-2 rounded-full mr-3 mt-1">
                    <Recycle className="h-4 w-4 text-secondary-600" />
                  </div>
                  <span>Monitor fill levels in real-time</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary-100 p-2 rounded-full mr-3 mt-1">
                    <Recycle className="h-4 w-4 text-secondary-600" />
                  </div>
                  <span>Reduce operational costs and carbon emissions</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary-100 p-2 rounded-full mr-3 mt-1">
                    <Recycle className="h-4 w-4 text-secondary-600" />
                  </div>
                  <span>Improve recycling rates through smart sorting</span>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default InnovationsSection;