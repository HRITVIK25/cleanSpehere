import React from 'react';
import { motion } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  className?: string;
}

const getDirectionOffset = (direction: string) => {
  switch (direction) {
    case 'up': return { y: 40 };
    case 'down': return { y: -40 };
    case 'left': return { x: 40 };
    case 'right': return { x: -40 };
    default: return { y: 0 };
  }
};

const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  direction = 'up', 
  delay = 0,
  className = '' 
}) => {
  return (
    <motion.div
      initial={{ 
        opacity: 0,
        ...getDirectionOffset(direction)
      }}
      whileInView={{ 
        opacity: 1,
        x: 0,
        y: 0
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        ease: "easeOut",
        delay 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;