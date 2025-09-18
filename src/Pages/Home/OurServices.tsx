import { Typography } from '../../Components/Typography';
import ship2 from '../../assets/svgImages/ship_inthe_sea.svg';
import workers from '../../assets/svgImages/people_working.svg';
import ship from '../../assets/svgImages/ship2.svg';
import tamara from '../../assets/svgImages/tamara.svg';
import CardImageTitleAndDescription from '../../Components/Cards/CardImageTitleAndDescription';
import { useNavigate } from 'react-router-dom';
import AnimatedScreen from '../../Components/Animations';

const OurServices = () => {
  const navigate = useNavigate();

  return (
    <>
      <AnimatedScreen>
        <div className="bg-[#FFF3EE] py-12 w-full h-screen  relative pb-32">
          <Typography size="3xl" weight="bold" className="mb-8 text-center" color="primary">
            Our Services
            <div className="max-w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 py-12">
              <CardImageTitleAndDescription
                imageSrc={ship}
                title="Deployment, Operation & Maintenance of Offshore infrastructure"
                description="From offshore infrastructure deployment, to energy logistics, our integrated services are designed"
                onLearnMoreClick={() => {
                  navigate('services');
                }}
              />
              <CardImageTitleAndDescription
                imageSrc={ship2}
                title="Deployment, Operation & Maintenance of Offshore infrastructure"
                description="From offshore infrastructure deployment, to energy logistics, our integrated services are designed"
                onLearnMoreClick={() => {
                  navigate('services');
                }}
              />
              <CardImageTitleAndDescription
                imageSrc={workers}
                title="Deployment, Operation & Maintenance of Offshore infrastructure"
                description="From offshore infrastructure deployment, to energy logistics, our integrated services are designed"
                onLearnMoreClick={() => {
                  navigate('services');
                }}
              />
              <CardImageTitleAndDescription
                imageSrc={tamara}
                title="Deployment, Operation & Maintenance of Offshore infrastructure"
                description="From offshore infrastructure deployment, to energy logistics, our integrated services are designed"
                onLearnMoreClick={() => {
                  console.log('lern more');
                }}
              />
            </div>
          </Typography>
          <div className=" max-w-[85%] mx-auto absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full px-4">
            <div className="bg-[#0F082B] rounded-2xl px-8 py-12">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-white text-center">
                <div className="lg:border-r lg:border-gray-600 last:border-r-0 lg:border-r lg:last:border-r-0">
                  <div className="text-4xl md:text-6xl font-bold mb-2">3</div>
                  <div className="text-sm md:text-base opacity-90">FPSO'S</div>
                </div>
                <div className="lg:border-r lg:border-gray-600 last:border-r-0 lg:border-r lg:last:border-r-0">
                  <div className="text-4xl md:text-6xl font-bold mb-2">1</div>
                  <div className="text-sm md:text-base opacity-90">FSO</div>
                </div>
                <div className="lg:border-r lg:border-gray-600 last:border-r-0 lg:border-r lg:last:border-r-0">
                  <div className="text-4xl md:text-6xl font-bold mb-2">30%</div>
                  <div className="text-sm md:text-base opacity-90">
                    Average cost savings for clients
                  </div>
                </div>
                <div>
                  <div className="text-4xl md:text-6xl font-bold mb-2">25%</div>
                  <div className="text-sm md:text-base opacity-90">CAGR Projected growth</div>
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
