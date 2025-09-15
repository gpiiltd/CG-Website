import React from 'react';
import type { Svgprops } from '../Components/Interfaces';
import cgLogo from './svgImages/cgLogo.svg';
import menPipe from './svgImages/menPipe.svg';
import lightBulb from './svgImages/lightBulb.svg';
import kenEtete from './svgImages/kenEtete.svg';
import osaretinAmadasu from './svgImages/osaretinAmadasu.svg';
import maclarenKosuwei from './svgImages/maclarenKosuwei.svg';
import osasUwaifo from './svgImages/osasUwaifo.svg';
import edwardYinkere from './svgImages/edwardYinkere.svg';
import teikariyeEtete from './svgImages/teikariyeEtete.svg';
import preyeAngaye from './svgImages/preyeAngaye.svg';
import twitterIcon from './svgImages/twitterIcon.svg';
import linkedinIcon from './svgImages/linkedinIcon.svg';
import instagramIcon from './svgImages/instagramIcon.svg';
import facebookIcon from './svgImages/facebookIcon.svg';

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
      case 'osaretinAmadasu':
        return <img src={osaretinAmadasu} alt="osaretinAmadasu" className={className} />;
      case 'maclarenKosuwei':
        return <img src={maclarenKosuwei} alt="maclarenKosuwei" className={className} />;
      case 'osasUwaifo':
        return <img src={osasUwaifo} alt="osasUwaifo" className={className} />;
      case 'edwardYinkere':
        return <img src={edwardYinkere} alt="edwardYinkere" className={className} />;
      case 'teikariyeEtete':
        return <img src={teikariyeEtete} alt="teikariyeEtete" className={className} />;
      case 'preyeAngaye':
        return <img src={preyeAngaye} alt="preyeAngaye" className={className} />;
      case 'twitterIcon':
        return <img src={twitterIcon} alt="twitterIcon" className={className} />;
      case 'linkedinIcon':
        return <img src={linkedinIcon} alt="linkedinIcon" className={className} />;
      case 'instagramIcon':
        return <img src={instagramIcon} alt="instagramIcon" className={className} />;
      case 'facebookIcon':
        return <img src={facebookIcon} alt="facebookIcon" className={className} />;
      default:
        return null;
    }
  };
  return <div onClick={click}>{renderIcon()}</div>;
};

export default Icon;
