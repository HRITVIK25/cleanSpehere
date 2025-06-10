import React, { useState } from 'react';
import { Camera, Bell, Battery, Users, BarChart3, MapPin, Mail, Phone, X, Cctv } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import TrashBotNavbar from '../components/TrashBotNavbar';
import { motion } from 'framer-motion';

const TrashBotPage: React.FC = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <TrashBotNavbar />
      
      {/* Contact Info Modal */}
      {showContact && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-lg w-full p-6 relative">
            <button 
              onClick={() => setShowContact(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
            
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Our Location</h4>
                  <p className="text-gray-600 mt-1">
                    1234 Tech Park Avenue, <br />
                    Innovation District, <br />
                    Bangalore 560001, India
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Email Us</h4>
                  <p className="text-gray-600 mt-1">
                    info@cleansphere.tech <br />
                    support@cleansphere.tech
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Call Us</h4>
                  <p className="text-gray-600 mt-1">
                    +91 98765 43210 <br />
                    +91 12345 67890
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="pt-16">
        <section className="relative overflow-hidden bg-gradient-to-r from-primary-50 to-secondary-50">
          <div className="container-custom py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <FadeIn direction="left">
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                    TrashBot
                    <span className="block text-primary-600 mt-2">Smart Waste Management</span>
                  </h1>
                  <p className="text-xl text-gray-600">
                    Revolutionizing cleanliness in private spaces through advanced technology and community engagement
                  </p>
                  <div className="flex gap-4">
                    <button onClick={() => setShowContact(true)} className="btn btn-primary">
                      Get Started
                    </button>
                    <a href="#features" className="btn btn-outline">
                      Learn More
                    </a>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={0.2}>
                <div className="relative">
                  <motion.div 
                    className="absolute -top-8 -left-8 bg-primary-100 rounded-full p-8"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Cctv className="h-16 w-16 text-primary-600" />
                  </motion.div>
                  <div className="bg-white rounded-2xl shadow-2xl p-8 ml-12">
                    <img 
                      src="https://images.pexels.com/photos/4207785/pexels-photo-4207785.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                      alt="Smart waste management system" 
                      className="rounded-xl w-full h-auto"
                    />
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-primary-600">Real-time</h4>
                        <p className="text-sm text-gray-600">Monitoring System</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-secondary-600">AI-Powered</h4>
                        <p className="text-sm text-gray-600">Detection</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container-custom">
            <FadeIn>
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Overview</h2>
                <p className="text-lg text-gray-600">
                  TrashBot is an intelligent waste management solution developed by CleanSphere Innovations Pvt. Ltd., 
                  aiming to revolutionize cleanliness in private spaces such as organizations, universities, and 
                  residential complexes. Leveraging advanced technologies like face recognition and real-time monitoring, 
                  TrashBot identifies individuals disposing of waste improperly and sends instant notifications, 
                  promoting responsible waste disposal practices.
                </p>
              </div>
            </FadeIn>

            <div className="mt-16 grid md:grid-cols-2 gap-8">
              <FadeIn direction="left">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-primary-100 p-3 rounded-full">
                      <Camera className="h-6 w-6 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold">Face Recognition</h3>
                  </div>
                  <p className="text-gray-600">
                    Advanced facial recognition system identifies individuals and monitors waste 
                    disposal behavior, ensuring accountability and proper waste management practices.
                  </p>
                </div>
              </FadeIn>

              <FadeIn direction="right">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-secondary-100 p-3 rounded-full">
                      <Bell className="h-6 w-6 text-secondary-600" />
                    </div>
                    <h3 className="text-xl font-semibold">Instant Alerts</h3>
                  </div>
                  <p className="text-gray-600">
                    Real-time notification system alerts relevant authorities about improper waste 
                    disposal, enabling quick corrective actions and maintaining cleanliness.
                  </p>
                </div>
              </FadeIn>

              <FadeIn direction="left">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-accent-100 p-3 rounded-full">
                      <Battery className="h-6 w-6 text-accent-600" />
                    </div>
                    <h3 className="text-xl font-semibold">Energy Efficient</h3>
                  </div>
                  <p className="text-gray-600">
                    Designed with sustainability in mind, TrashBot operates on low-power sensors 
                    and optimized algorithms to minimize environmental impact.
                  </p>
                </div>
              </FadeIn>

              <FadeIn direction="right">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-primary-100 p-3 rounded-full">
                      <Users className="h-6 w-6 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold">Community Engagement</h3>
                  </div>
                  <p className="text-gray-600">
                    Promotes collective responsibility through awareness campaigns and regular 
                    feedback, fostering a culture of cleanliness in the community.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <FadeIn>
              <div className="flex items-center space-x-4 mb-12">
                <div className="bg-secondary-100 p-3 rounded-full">
                  <BarChart3 className="h-6 w-6 text-secondary-600" />
                </div>
                <h2 className="text-3xl font-bold">Impact & Results</h2>
              </div>
            </FadeIn>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <FadeIn direction="up" delay={0.1}>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">85%</div>
                  <p className="text-gray-600">Reduction in Improper Disposal</p>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-secondary-600 mb-2">90%</div>
                  <p className="text-gray-600">User Compliance Rate</p>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-accent-600 mb-2">60%</div>
                  <p className="text-gray-600">Cost Savings</p>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.4}>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">95%</div>
                  <p className="text-gray-600">User Satisfaction</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section id="contact-section" className="py-16 md:py-24">
          <div className="container-custom">
            <FadeIn>
              <div className="bg-primary-50 p-8 md:p-12 rounded-2xl text-center">
                <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Space?</h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Join the clean revolution with TrashBot. Get in touch today and see how our 
                  smart waste management solution can benefit your organization.
                </p>
                <button 
                  onClick={() => setShowContact(true)} 
                  className="btn btn-primary"
                >
                  Request a Demo
                </button>
              </div>
            </FadeIn>
          </div>
        </section>
      </div>
    </>
  );
};

export default TrashBotPage;