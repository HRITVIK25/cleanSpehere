import React from 'react';
import { MapPin, Users, Recycle, Building } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import FadeIn from '../components/FadeIn';

const ImpactSection: React.FC = () => {
  return (
    <section id="impact" className="section bg-white">
      <div className="container-custom">
        <FadeIn>
          <div className="section-title">
            <h2>Our <span className="text-accent-600">Impact</span></h2>
            <p className="section-subtitle">
              Making a measurable difference in communities across the nation
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <FadeIn direction="up" delay={0.1}>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
              <div className="flex justify-center mb-3">
                <div className="bg-primary-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
              </div>
              <AnimatedCounter end={12} />
              <p className="text-gray-600 mt-2 font-medium">Cities Served</p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
              <div className="flex justify-center mb-3">
                <div className="bg-secondary-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-secondary-600" />
                </div>
              </div>
              <AnimatedCounter end={250000} prefix="+" />
              <p className="text-gray-600 mt-2 font-medium">People Impacted</p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
              <div className="flex justify-center mb-3">
                <div className="bg-accent-100 p-3 rounded-full">
                  <Recycle className="h-6 w-6 text-accent-600" />
                </div>
              </div>
              <AnimatedCounter end={850} suffix="+" />
              <p className="text-gray-600 mt-2 font-medium">TrashBots Deployed</p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
              <div className="flex justify-center mb-3">
                <div className="bg-primary-100 p-3 rounded-full">
                  <Building className="h-6 w-6 text-primary-600" />
                </div>
              </div>
              <AnimatedCounter end={50} prefix="+" />
              <p className="text-gray-600 mt-2 font-medium">Partner Organizations</p>
            </div>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/70 to-secondary-600/70 z-10 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <h3 className="text-2xl font-bold mb-3">Watch Our Impact</h3>
                  <p className="mb-6">See how CleanSphere is transforming communities</p>
                  <button className="inline-flex items-center justify-center bg-white text-primary-600 rounded-full w-16 h-16">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 4.99658V19.0034C5 19.371 5.18986 19.7147 5.50672 19.9222C5.82358 20.1297 6.22783 20.1738 6.58304 20.0425L19.5854 14.5392C20.0027 14.3908 20.2784 14.0126 20.2784 13.5C20.2784 12.9874 20.0027 12.6092 19.5854 12.4608L6.58304 6.95752C6.22783 6.82618 5.82358 6.87027 5.50672 7.07779C5.18986 7.28531 5 7.62903 5 7.99658Z" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
              <img 
                src="https://images.pexels.com/photos/5191371/pexels-photo-5191371.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Impact video thumbnail" 
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Measurable Environmental Impact</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-gray-700 font-medium">Waste Reduction</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>0%</span>
                    <span>78% improvement in target areas</span>
                    <span>100%</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-gray-700 font-medium">Recycling Rates</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-secondary-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>0%</span>
                    <span>65% increase in recycling</span>
                    <span>100%</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-gray-700 font-medium">Community Engagement</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-accent-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>0%</span>
                    <span>92% satisfaction rate</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                Our solutions have led to significant improvements in waste management efficiency,
                reduction in illegal dumping, and increased community participation in environmental initiatives.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;