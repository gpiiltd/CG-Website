import React from 'react';
import type { Svgprops } from '../Components/Interfaces';
import cgLogo from './svgImages/cgLogo.svg';
import menPipe from './svgImages/menPipe.svg';
import lightBulb from './svgImages/lightBulb.svg';

import shield from './svgImages/shieldCard.svg';
import light from './svgImages/light.svg';
import teamwork from './svgImages/teamwork.svg';
import service from './svgImages/service.svg';
import loading from './svgImages/loading.svg';
import disImageTag from './svgImages/disImageTag.svg';
import Arrow from './svgImages/Arrow.svg';
import dotted from './svgImages/dotted.svg';
import dull from './svgImages/dull.svg';
import checks from './svgImages/checks.svg';

const Icon: React.FC<Svgprops> = ({ type, className, click }) => {
  const renderIcon = () => {
    switch (type) {
      case 'cgLogo':
        return <img src={cgLogo} alt="export" className={className} />;
      case 'menPipe':
        return <img src={menPipe} alt="menPipe" className={className} />;
      case 'lightBulb':
        return <img src={lightBulb} alt="lightBulb" className={className} />;

      case 'shield':
        return <img src={shield} alt="shield" className={className} />;
      case 'light':
        return <img src={light} alt="light" className={className} />;
      case 'teamwork':
        return <img src={teamwork} alt="teamwork" className={className} />;
      case 'service':
        return <img src={service} alt="service" className={className} />;
      case 'loading':
        return <img src={loading} alt="loading" className={className} />;
      case 'disImageTag':
        return <img src={disImageTag} alt="disImageTag" className={className} />;
      case 'Arrow':
        return <img src={Arrow} alt="Arrow" className={className} />;
      case 'dotted':
        return <img src={dotted} alt="dotted" className={className} />;
      case 'dull':
        return <img src={dull} alt="dull" className={className} />;
      case 'checks':
        return <img src={checks} alt="checks" className={className} />;
      default:
        return null;
    }
  };
  return <div onClick={click}>{renderIcon()}</div>;
};

export default Icon;
