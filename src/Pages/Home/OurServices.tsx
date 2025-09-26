import { Typography } from '../../Components/Typography';
import atalaEP from '../../assets/Atala-E&P.png'
import tnFPSO from '../../assets/TN FPSO- Deployment - O&M.jpg'
import LNGVessel from '../../assets/LNG Vessel.jpg';
import CPTLOps from '../../assets/CPTL Ops.jpeg'
import CardImageTitleAndDescription from '../../Components/Cards/CardImageTitleAndDescription';
import { useNavigate } from 'react-router-dom';
import AnimatedScreen from '../../Components/Animations';

const OurServices = () => {
  const navigate = useNavigate();

  return (
    <>
     <AnimatedScreen>
  <div className="bg-[#FFF3EE] py-12 w-full relative pb-8 md:pb-12 lg:pb-16">
    <Typography size="3xl" weight="bold" className="sm:mb-8 text-center" color="primary">
      Our Services
    </Typography>

    {/* Services Grid */}
    <div className="max-w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 py-12 mb-4 md:mb-6 lg:mb-8">
  <CardImageTitleAndDescription
        imageSrc={atalaEP}
        title="Deployment, Operation & Maintenance of Offshore infrastructure"
        description="Century Group manages the full lifecycle of offshore infrastructure, from safe commissioning to long-term performance. Through robust systems and digital solutions, we maximize uptime, extend asset life, and reduce costs while safeguarding people and the environment."
        onLearnMoreClick={() => {
          navigate('services/1');
        }}
      />

 <CardImageTitleAndDescription
        imageSrc={LNGVessel}
        title="Natural Gas Transmission and Distribution"
        description="We deliver safe and efficient midstream solutions for LNG and LPG, connecting production to markets through pipelines, storage, and distribution networks. Our flexible operations support power generation, industry, and households while ensuring cost efficiency and environmental responsibility. Through Gasplus Synergy Limited, we strengthen energy security and advance cleaner fuel adoption across the energy landscape"
        onLearnMoreClick={() => {
          navigate('services/4');
        }}
      />

 <CardImageTitleAndDescription
        imageSrc={tnFPSO}
        title="Exploration and Production"
        description="We responsibly explore and develop hydrocarbon resources using advanced technology and disciplined project execution. Our expertise spans from discovery to production, ensuring safe operations, optimized recovery, and sustainable value creation for partners and communities."
        onLearnMoreClick={() => {
          navigate('services/2');
        }}
      />


      <CardImageTitleAndDescription
        imageSrc={CPTLOps}
        title="Ports and Terminal Management Services"
        description="Century group provides end-to-end management of ports and terminals, from vessel berthing to storage and distribution, ensuring safe and efficient cargo handling. With strong safety systems, advanced technologies, and performance-driven operations, we maximize asset utilization and minimize downtime. Our dedicated subsidiary, Century Ports & Terminals Limited, delivers long-term value, reliability, and cost efficiency across critical maritime infrastructure"
        onLearnMoreClick={() => {
          navigate('services/3');
        }}
      />

    </div>

    {/* Statistics Card - Closer positioning with subtle overlap */}
    <div className="max-w-[85%] mx-auto px-4 relative z-10">
      <div className="bg-[#0F082B] rounded-2xl px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-12 transform -translate-y-2 md:-translate-y-4 lg:-translate-y-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 text-white text-center">
          <div className="lg:border-r lg:border-gray-600 pb-4 lg:pb-0">
            <div className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold mb-1 md:mb-2">3</div>
            <div className="text-xs md:text-sm lg:text-base opacity-90">FPSO'S</div>
          </div>
          <div className="lg:border-r lg:border-gray-600 pb-4 lg:pb-0">
            <div className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold mb-1 md:mb-2">1</div>
            <div className="text-xs md:text-sm lg:text-base opacity-90">FSO</div>
          </div>
          <div className="lg:border-r lg:border-gray-600 pb-4 lg:pb-0">
            <div className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold mb-1 md:mb-2">30%</div>
            <div className="text-xs md:text-sm lg:text-base opacity-90 px-2">
              Average cost savings for clients
            </div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold mb-1 md:mb-2">25%</div>
            <div className="text-xs md:text-sm lg:text-base opacity-90">CAGR Projected growth</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</AnimatedScreen>
    </>
  );
};

export default OurServices;
