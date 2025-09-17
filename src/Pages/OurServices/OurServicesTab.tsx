// import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import manshore from '../../assets/svgImages/manshore.svg';
import womanworker from '../../assets/svgImages/womanworker.svg';
import manworker from '../../assets/svgImages/manworker.svg';
import gasplant from '../../assets/svgImages/gasplant.svg';
import shore from '../../assets/svgImages/shore.svg';
import ServiceSection from './ServiceSection';
import OverlaySection from './OverlaySection';
import { Typography } from '../../Components/Typography';
import { HoverCard } from '../../Components/HoverCard';
// import { ButtonComponent } from '../../Components/ButtonComponent';

const overlayData = [
  {
    id: 1,
    title: 'Deployment, Operation and maintenance of Offshore infrastructure',
    description:
      'A detailed wireframe kit made of comprehensive components to get you started on your next website or landing page project.',
    image: manshore,
    bgColor: '#EDFFFF',
  },
  {
    id: 2,
    title: 'Exploration and production',
    description:
      'A detailed wireframe kit made of comprehensive components to get you started on your next website or landing page project.',
    image: womanworker,
    bgColor: '#F5F1FE',
  },
  {
    id: 3,
    title: 'Ports Terminal and Management Services',
    description:
      'A detailed wireframe kit made of comprehensive components to get you started on your next website or landing page project.',
    image: manworker,
    bgColor: '#F6E4F0',
  },
  {
    id: 4,
    title: 'Natural Gas Transmission and Distribution',
    description:
      'A detailed wireframe kit made of comprehensive components to get you started on your next website or landing page project.',
    image: gasplant,
    bgColor: '#FEF3EF',
  },
];

const serviceSectionsData = [
  {
    id: 1,
    bgColor: '#F5F1FE',
    title: 'Deployment, Operation and maintenance of Offshore infrastructure',
    subtitle:
      'From offshore infrastructure deployment, to energy logistics, our integrated services are designed too optimize operation, minimize risk and maximize, value for stakeholders.',
    images: [shore, shore, shore],
    companyTitle: 'Century Exploration & Production Limited (CEPL)',
    companyDescription:
      'CESL is one of the leading domestic providers of premium field development solutions and Operation & Maintenance services. We collaborate with world-renowned technical partners to deliver exceptional services in deep offshore, swamp, and land locations within the Gulf of Guinea.',
    companyDetails:
      'Our comprehensive offerings extend to training and manpower services, community liaison, and logistics support for FPSO operations, catering to various International Oil Companies (IOCs) operating in Sub-Saharan Africa. As part of our strategic vision, CESL is actively expanding its operations beyond the West African Coast.',
    contactLink: '/contact-us',
  },
  {
    id: 2,
    bgColor: '#F6E4F0',
    title: 'Exploration and production',
    subtitle:
      'From offshore infrastructure deployment, to energy logistics, our integrated services are designed too optimize operation, minimize risk and maximize, value for stakeholders.',
    images: [shore, shore, shore],
    companyTitle: 'Century Ports & Terminal Limited (CPTL)',
    companyDescription:
      'CESL is one of the leading domestic providers of premium field development solutions and Operation & Maintenance services. We collaborate with world-renowned technical partners to deliver exceptional services in deep offshore, swamp, and land locations within the Gulf of Guinea.',
    companyDetails:
      'Our comprehensive offerings extend to training and manpower services, community liaison, and logistics support for FPSO operations, catering to various International Oil Companies (IOCs) operating in Sub-Saharan Africa. As part of our strategic vision, CESL is actively expanding its operations beyond the West African Coast.',
    contactLink: '/contact-us',
  },
  {
    id: 3,
    bgColor: '#FFF3EE4D',
    title: 'Ports Terminal and Management Services',
    subtitle:
      'From offshore infrastructure deployment, to energy logistics, our integrated services are designed too optimize operation, minimize risk and maximize, value for stakeholders.',
    images: [shore, shore, shore],
    companyTitle: 'Gas Plus Synergy (GPS)',
    companyDescription:
      'CESL is one of the leading domestic providers of premium field development solutions and Operation & Maintenance services. We collaborate with world-renowned technical partners to deliver exceptional services in deep offshore, swamp, and land locations within the Gulf of Guinea.',
    companyDetails:
      'Our comprehensive offerings extend to training and manpower services, community liaison, and logistics support for FPSO operations, catering to various International Oil Companies (IOCs) operating in Sub-Saharan Africa. As part of our strategic vision, CESL is actively expanding its operations beyond the West African Coast.',
    contactLink: '/contact-us',
  },
  {
    id: 4,
    bgColor: '#FEF3EF',
    title: 'Natural Gas Transmission and Distribution',
    subtitle:
      'From offshore infrastructure deployment, to energy logistics, our integrated services are designed too optimize operation, minimize risk and maximize, value for stakeholders.',
    images: [shore, shore, shore],
    companyTitle: 'Offshore Infrastructure Services',
    companyDescription:
      'CESL provides deployment, operation and maintenance of offshore infrastructure with a focus on safety and efficiency.',
    companyDetails:
      'Our services include logistics, community liaison, and technical support for offshore operations.',
    contactLink: '/contact-us',
  },
];

const OurServicesTab = () => {
  // const navigate = useNavigate();
  const [currentOverlay, setCurrentOverlay] = useState(0);
  const [activeServiceIndex, setActiveServiceIndex] = useState<number | null>(null);

  // Animation classes for fade-in/out
  const animationClass = 'transition-all duration-500 ease-in-out opacity-100 scale-100';

  const handleOverlayClick = () => {
    setCurrentOverlay((prev) => (prev + 1) % overlayData.length);
    setActiveServiceIndex(null); // Hide service section when overlay changes
  };

  const handleLearnMore = (overlayIndex: number) => {
    const overlayId = overlayData[overlayIndex].id;
    const serviceIndex = serviceSectionsData.findIndex((section) => section.id === overlayId);
    setActiveServiceIndex(serviceIndex !== -1 ? serviceIndex : null);
  };

  return (
    <>
      <div className="relative">
        {activeServiceIndex === null ? (
          <>
            {/* Hero Section */}
            <div
              className="relative bg-cover bg-center py-20 px-6 text-center flex flex-col justify-center items-center min-h-[518px] "
              style={{ backgroundImage: `url(${manshore})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black"></div>
              <div className="relative z-10 max-w-4xl mx-auto">
                <p className="text-sm uppercase tracking-widest text-gray-300 mb-4">our services</p>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-8">
                  Driving Growth Through Energy
                </h2>
                <p className="text-sm tracking-widest text-gray-300 mb-4 lg:w-[650px] mx-auto">
                  From offshore infrastructure deployment, to energy logistics, our integrated
                  services are designed too optimize operation, minimize risk and maximize value for
                  stakeholders.
                </p>
              </div>
            </div>

            {/* Overlay Section for mobile view */}
            <div className="md:hidden space-y-38">
              {overlayData.map((overlay, idx) => (
                <OverlaySection
                  key={idx}
                  title={overlay.title}
                  description={overlay.description}
                  image={overlay.image}
                  contactLink="/contact-us"
                  onLearnMore={() => handleLearnMore(idx)}
                  bgColor={overlay.bgColor}
                />
              ))}
            </div>

            {/* Animated Overlay Section for Large screen size */}
            <div
              className={`w-full hidden md:flex justify-center `}
              onClick={handleOverlayClick}
              onTouchStart={handleOverlayClick}
              style={{ cursor: 'pointer' }}
            >
              <div className={animationClass} key={currentOverlay}>
                <OverlaySection
                  title={overlayData[currentOverlay].title}
                  description={overlayData[currentOverlay].description}
                  image={overlayData[currentOverlay].image}
                  contactLink="/contact-us"
                  onLearnMore={() => handleLearnMore(currentOverlay)}
                  bgColor={overlayData[currentOverlay].bgColor}
                />
              </div>
            </div>
          </>
        ) : (
          // Only show the matching ServiceSection
          serviceSectionsData[activeServiceIndex] && (
            <ServiceSection {...serviceSectionsData[activeServiceIndex]} />
          )
        )}
      </div>

      <div className=" py-12 w-full">
        <div className="flex flex-col justify-center items-center px-3 lg:w-[650px] mx-auto py-8">
          <Typography size="3xl" weight="bold" className="mb-6 text-center text-black">
            Our Other Services
          </Typography>
          <Typography size="lg" weight="normal" className="w-full text-center text-[#3E3E41]">
            We fuel your offshore energy ambition by seamlessly integrating world class floater
            (FPSO, FSO, etc) deploying unmatched efficiency, reduced risked and accelerated project
            delivery. Partner with us to navigate complexity with confidence, leveraging unified
            expertise that drive cost-efficient and effective goal attainment in the energy sector.
          </Typography>
        </div>
        <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[90%] mx-auto">
          <HoverCard
            title="Ports Terminal & Management Services"
            description=""
            imageSrc={manworker}
            className="h-80 lg:col-span-1"
          />
          <HoverCard
            title="Deployment, Operation & maintenance of Offshore infrastructure"
            description=""
            imageSrc={womanworker}
            className="h-80 lg:col-span-1"
          />
          <HoverCard
            title="Natural Gas Transmission & Distribution"
            description=""
            imageSrc={gasplant}
            className="h-80 lg:col-span-1"
          />
        </div>
      </div>
    </>
  );
};

export default OurServicesTab;
