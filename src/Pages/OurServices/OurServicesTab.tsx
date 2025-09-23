import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import manshore from '../../assets/svgImages/manshore.svg';
import ServiceSection from './ServiceSection';
import OverlaySection from './OverlaySection';
import {  overlayData, serviceSectionsData } from './servicesDatalist';
// import CarouselSection from './CarouselSection';
import StatsBar from './StatsBar';
import OurProducts from '../Home/OurProjects';

const OurServicesTab = () => {
  const navigate = useNavigate();
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
    navigate(`/services/${overlayId}`);
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

      {/* Carousel Section */}
      {/* <CarouselSection data={carouselData} /> */}

      <OurProducts />

      {/* Stats Section */}
      <StatsBar />
    </>
  );
};

export default OurServicesTab;
