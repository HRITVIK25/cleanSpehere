import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-8" }) => {
  return (
    <img 
      src="/WhatsApp Image 2025-05-18 at 20.38.29_bb524bc4.jpg"
      alt="CleanSphere Innovations Logo"
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
};

export default Logo;