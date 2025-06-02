import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  interactive?: boolean;
  glass?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  interactive = false,
  glass = false,
}) => {
  const baseClasses = 'rounded-xl overflow-hidden';
  const glassClasses = glass 
    ? 'bg-white/70 dark:bg-surface-800/70 backdrop-blur-sm border border-white/20 dark:border-surface-700/50' 
    : 'bg-white dark:bg-surface-800 shadow-md dark:shadow-surface-900/30';
  const interactiveClasses = interactive
    ? 'cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1'
    : '';

  const cardVariants = {
    hover: {
      scale: interactive ? 1.02 : 1,
      transition: { duration: 0.3, ease: 'easeInOut' },
    }
  };

  return (
    <motion.div
      whileHover="hover"
      variants={cardVariants}
      className={`${baseClasses} ${glassClasses} ${interactiveClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => (
  <div className={`p-4 border-b border-surface-200 dark:border-surface-700 ${className}`}>
    {children}
  </div>
);

export const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => (
  <div className={`p-4 ${className}`}>
    {children}
  </div>
);

export const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => (
  <div className={`p-4 border-t border-surface-200 dark:border-surface-700 ${className}`}>
    {children}
  </div>
);