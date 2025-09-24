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
import manshore from './svgImages/manshore.svg';
import shore from './svgImages/shore.svg';
import manworker from './svgImages/manworker.svg';
import womanworker from './svgImages/womanworker.svg';
import gasplant from './svgImages/gasplant.svg';
import akintobiAkinpelu from './svgImages/akintobiAkinpelu.svg';
import michealIkinbor from './svgImages/michealIkinbor.svg';
import muhriAbiodun from './svgImages/muhriAbiodun.svg';
import ayebatariWilson from './svgImages/ayebatariWilson.svg';
import paulUkeneye from './svgImages/paulUkeneye.svg';
import ebimoboweiClifford from './svgImages/ebimoboweiClifford.svg';
import ship_asset from './svgImages/ship_asset.svg';


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
      case 'manshore':
        return <img src={manshore} alt="manshore" className={className} />;
      case 'shore':
        return <img src={shore} alt="shore" className={className} />;
      case 'manworker':
        return <img src={manworker} alt="manworker" className={className} />;
      case 'womanworker':
        return <img src={womanworker} alt="womanworker" className={className} />;
      case 'gasplant':
        return <img src={gasplant} alt="gasplant" className={className} />;
      case 'akintobiAkinpelu':
        return <img src={akintobiAkinpelu} alt="akintobiAkinpelu" className={className} />;
      case 'michealIkinbor':
        return <img src={michealIkinbor} alt="michealIkinbor" className={className} />;
      case 'muhriAbiodun':
        return <img src={muhriAbiodun} alt="muhriAbiodun" className={className} />;
      case 'ayebatariWilson':
        return <img src={ayebatariWilson} alt="ayebatariWilson" className={className} />;
      case 'paulUkeneye':
        return <img src={paulUkeneye} alt="paulUkeneye" className={className} />;
      case 'ebimoboweiClifford':
        return <img src={ebimoboweiClifford} alt="ebimoboweiClifford" className={className} />;
 case 'shipAsset':
        return <img src={ship_asset} alt="ebimoboweiClifford" className={className} />;
      default:
        return null;
    }
  };
  return <div onClick={click}>{renderIcon()}</div>;
};

export default Icon;
