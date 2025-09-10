import React from 'react';
import cgLogo from './svgImages/cgLogo.svg';
import menPipe from './svgImages/menPipe.svg';
import type { Svgprops } from '../Components/Interfaces';

const Icon: React.FC<Svgprops> = ({ type, className, click }) => {
  const renderIcon = () => {
    switch (type) {
      case 'cgLogo':
        return <img src={cgLogo} alt="export" className={className} />;
      case 'menPipe':
        return <img src={menPipe} alt="menPipe" className={className} />;
      default:
        return null;
    }
  };
  return <div onClick={click}>{renderIcon()}</div>;
};

export default Icon;
