import React from 'react';
import type { Svgprops } from '../Components/Interfaces';
// import cgLogo from '../assets/cg-logo.svg';
import { FaArrowRightLong } from 'react-icons/fa6';

const Icon: React.FC<Svgprops> = ({ type, className, click }) => {
  const renderIcon = () => {
    switch (type) {
      // case 'cgLogo':
      //   return <img src={cgLogo} alt="export" className={className} />;
      case 'Arrow':
        return <FaArrowRightLong className={className}/>;
      default:
        return null;
    }
  };
  return <div onClick={click}>{renderIcon()}</div>;
};

export default Icon;
