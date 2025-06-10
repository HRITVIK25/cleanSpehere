import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import Logo from './Logo';

const TrashBotNavbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container-custom py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Logo className="h-10 w-auto" />
            <span className="text-xl font-bold text-gray-900">CleanSphere</span>
          </Link>

          <div className="flex items-center gap-6">
            <Link 
              to="/" 
              className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
            >
              <ChevronLeft className="h-5 w-5 mr-1" />
              Back to Home
            </Link>
            <button 
              onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-primary"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TrashBotNavbar;