import HeroSection from './HeroSection';
import WhyCG from './WhyCG';
import TrustedPartners from './TrustedPartners';
import OurServices from './OurServices';
import OurProjects from './OurProjects';
import usePageTitle from '../../Components/PageTitle';

const HomeMain = () => {
  usePageTitle('Century Group | Home');
  return (
    <div>
      <HeroSection />
      <TrustedPartners />
      <WhyCG />
      <OurServices />
      <OurProjects />
    </div>
  );
};

export default HomeMain;
