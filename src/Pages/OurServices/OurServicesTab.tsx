import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OverlaySection from './OverlaySection';
import StatsBar from './StatsBar';
import OurProjects from '../Home/OurProjects';
import usePageTitle from '../../Components/PageTitle';
import dsc00741 from '../../assets/000A0706.jpg';

const OurServicesTab = () => {
  usePageTitle('Century Group | Services');
  const navigate = useNavigate();
  const [currentOverlay, setCurrentOverlay] = useState(0);
  const [services, setServices] = useState<Service[]>([]);

  const [canScroll, setCanScroll] = useState(true);
  // Animation classes for fade-in/out
  const animationClass = 'transition-all duration-500 ease-in-out opacity-100 scale-100';

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const fetchedServices = await client.fetch(queryServices);
        const sortedServices = fetchedServices.sort(
          (a: { id: number }, b: { id: number }) => a.id - b.id
        );
        setServices(sortedServices);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  const handleLearnMore = (overlayIndex: number) => {
    const overlayId = services[overlayIndex].id;
    navigate(`/services/${overlayId}`);
  };

  return (
    <>
      <div className="relative">
        {activeServiceIndex === null ? (
          <>
            {/* Hero Section */}
            <div
              className="relative bg-cover bg-center py-20 px-6 text-center flex flex-col justify-center items-center min-h-[650px] "
              style={{ backgroundImage: `url(${dsc00741})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black"></div>
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
          </div>

          {/* Overlay Section for mobile view */}
          <div className="md:hidden space-y-38">
            {services.map((overlay, idx) => (
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
          {services.length > 0 && (
            <div
              className="w-full hidden md:flex justify-center cursor-move"
              onWheel={(e) => {
                if (!canScroll) return;
                setCanScroll(false);

                if (e.deltaY > 0) {
                  setCurrentOverlay((prev) => (prev + 1) % services.length);
                } else if (e.deltaY < 0) {
                  setCurrentOverlay((prev) => (prev - 1 + services.length) % services.length);
                }

                setTimeout(() => setCanScroll(true), 500);
              }}
              style={{ cursor: 'grabbing' }}
            >
              <div className={animationClass} key={currentOverlay}>
                <OverlaySection
                  title={services[currentOverlay]?.title || ''}
                  description={services[currentOverlay]?.description || ''}
                  image={services[currentOverlay]?.image || ''}
                  contactLink="/contact-us"
                  onLearnMore={() => handleLearnMore(currentOverlay)}
                  bgColor={services[currentOverlay]?.bgColor || '#FFFFFF'}
                />
              </div>
            </div>
          )}
        </>
      </div>

      <OurProjects />

      {/* Stats Section */}
      <StatsBar />
    </>
  );
};

export default OurServicesTab;
