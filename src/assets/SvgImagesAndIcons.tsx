import React from 'react';
import type { Svgprops } from '../Components/Interfaces';
import cgLogo from './svgImages/cgLogo.svg';
import menPipe from './svgImages/menPipe.svg';
import lightBulb from './svgImages/lightBulb.svg';
import kenEtete from './svgImages/kenEtete.svg';
import osaretin from './svgImages/osaretin.svg';

const Icon: React.FC<Svgprops> = ({ type, className, click }) => {
  const renderIcon = () => {
    switch (type) {
      case 'cgLogo':
        return <img src={cgLogo} alt="export" className={className} />;
      case 'menPipe':
        return <img src={menPipe} alt="menPipe" className={className} />;
      case 'lightBulb':
        return <img src={lightBulb} alt="lightBulb" className={className} />;
      case 'kenEtete':
        return <img src={kenEtete} alt="kenEtete" className={className} />;
      case 'osaretin':
        return <img src={osaretin} alt="osaretin" className={className} />;
      default:
        return null;
    }
  };
  return <div onClick={click}>{renderIcon()}</div>;
};

export default Icon;
