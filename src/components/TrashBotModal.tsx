import React from 'react';
import { X, Camera, Bell, Battery, Users, BarChart3 } from 'lucide-react';
import FadeIn from './FadeIn';

interface TrashBotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TrashBotModal: React.FC<TrashBotModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white z-10 p-6 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold">TrashBot: Smart Waste Management Solution</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          <FadeIn>
            <div className="aspect-video rounded-xl overflow-hidden">
              <video 
                className="w-full h-full object-cover"
                autoPlay 
                loop 
                muted 
                playsInline
              >
                <source src="https://player.vimeo.com/external/449759940.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Overview</h3>
              <p className="text-gray-600">
                TrashBot is our flagship smart waste management solution designed for organizations, 
                universities, and residential complexes. Using advanced AI and IoT technology, it 
                promotes responsible waste disposal and maintains cleanliness in private spaces.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <Camera className="h-6 w-6 text-primary-600" />
                  </div>
                  <h4 className="text-lg font-semibold">Face Recognition</h4>
                </div>
                <p className="text-gray-600">
                  Advanced facial recognition system identifies individuals and monitors waste 
                  disposal behavior, ensuring accountability and proper waste management practices.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-secondary-100 p-3 rounded-full">
                    <Bell className="h-6 w-6 text-secondary-600" />
                  </div>
                  <h4 className="text-lg font-semibold">Instant Alerts</h4>
                </div>
                <p className="text-gray-600">
                  Real-time notification system alerts relevant authorities about improper waste 
                  disposal, enabling quick corrective actions and maintaining cleanliness.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-accent-100 p-3 rounded-full">
                    <Battery className="h-6 w-6 text-accent-600" />
                  </div>
                  <h4 className="text-lg font-semibold">Energy Efficient</h4>
                </div>
                <p className="text-gray-600">
                  Designed with sustainability in mind, TrashBot operates on low-power sensors 
                  and optimized algorithms to minimize environmental impact.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-primary-600" />
                  </div>
                  <h4 className="text-lg font-semibold">Community Engagement</h4>
                </div>
                <p className="text-gray-600">
                  Promotes collective responsibility through awareness campaigns and regular 
                  feedback, fostering a culture of cleanliness in the community.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-secondary-100 p-3 rounded-full">
                  <BarChart3 className="h-6 w-6 text-secondary-600" />
                </div>
                <h3 className="text-xl font-semibold">Impact Statistics</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg border text-center">
                  <div className="text-3xl font-bold text-primary-600">85%</div>
                  <p className="text-sm text-gray-600 mt-1">Reduction in Improper Disposal</p>
                </div>
                <div className="bg-white p-4 rounded-lg border text-center">
                  <div className="text-3xl font-bold text-secondary-600">90%</div>
                  <p className="text-sm text-gray-600 mt-1">User Compliance Rate</p>
                </div>
                <div className="bg-white p-4 rounded-lg border text-center">
                  <div className="text-3xl font-bold text-accent-600">60%</div>
                  <p className="text-sm text-gray-600 mt-1">Cost Savings</p>
                </div>
                <div className="bg-white p-4 rounded-lg border text-center">
                  <div className="text-3xl font-bold text-primary-600">95%</div>
                  <p className="text-sm text-gray-600 mt-1">User Satisfaction</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="bg-primary-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Get Started with TrashBot</h3>
              <p className="text-gray-600 mb-6">
                Ready to transform waste management in your space? Contact us to schedule a 
                demo and learn how TrashBot can benefit your organization.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  onClick={() => {
                    onClose();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn btn-primary"
                >
                  Request a Demo
                </a>
                <button 
                  onClick={onClose}
                  className="btn btn-outline"
                >
                  Close
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default TrashBotModal;