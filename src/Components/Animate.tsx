import React from 'react';

type AnimationType = 'fadeIn' | 'fadeOut' | 'slideInLeft' | 'slideInRight';

interface AnimateProps {
  children: React.ReactNode;
  animationType: AnimationType;
  duration?: number;
  delay?: number;
  className?: string;
}

const Animate: React.FC<AnimateProps> = ({
  children,
  animationType,
  duration = 1000,
  delay = 0,
  className = '',
}) => {
  const animationClass = `${animationType} ${className}`;

  return (
    <div
      className={`animate ${animationClass}`}
      style={{
        animationDuration: `${duration}ms`,
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default Animate;
