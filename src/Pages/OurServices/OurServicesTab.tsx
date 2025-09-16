import { Link, useNavigate } from 'react-router-dom';
import manshore from '../../assets/svgImages/manshore.svg';
import shore from '../../assets/svgImages/shore.svg';

// import ship from '../../assets/svgImages/ship.svg';
// import workers1 from '../../assets/svgImages/workers.svg';
// import workers2 from '../../assets/svgImages/workers2.svg';
import { ButtonComponent } from '../../Components/ButtonComponent';

const OurServicesTab = () => {
  const navigate = useNavigate();
  return (
    <div className="relative">
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
            From offshore infrastructure deployment, to energy logistics, our integrated services
            are designed too optimize operation, minimize risk and maximize value for stakeholders.
          </p>
        </div>
      </div>

      {/* Overlay Section */}
      <div className="relative -mt-24 bg-[#EDFFFF] w-[90%] justify-center items-center mx-auto rounded-2xl shadow-lg z-20">
        <div className="max-w-[95%] mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center md:flex-row-reverse flex-col">
          {/* left side text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-snug">
              Deployment, Operation and maintenance of Offshore infrastructure
            </h2>
            <p className="text-gray-700 mb-4 font-medium">
              A detailed wireframe kit made of comprehensive components to get you started on you
              next website or landing pageproject.
            </p>
            <div className="flex gap-4">
              <Link to="/contact-us">
                <ButtonComponent text="Contact us" bg_color="#ED6C30" />
              </Link>
              <ButtonComponent
                text="Learn More"
                variant="outline"
                bg_color="#642D14"
                onClick={() => navigate('/discover-century-group')}
              />
            </div>
          </div>

          {/* right side images */}
          <div className="">
            <img src={manshore} alt="Team" className="rounded object-cover w-full full" />
          </div>
        </div>
      </div>

      {/* SERVICE 2 */}
      <div className="bg-[#F5F1FE] mt-12">
        <div className="justify-start max-w-[585px] px-16 pt-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-snug">
            Exploration & Production
          </h2>
          <p className="text-gray-700 mb-4 font-medium">
            From offshore infrastructure deployment, to energy logistics, our integrated services
            are designed too optimize operation, minimize risk and maximize, value for stakeholders.
          </p>
        </div>

        <div className="max-w-[95%] mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 ">
          {/* Left side images */}
          <div className="grid grid-cols-2 gap-4">
            <img src={shore} alt="Team" className="rounded-lg object-cover w-full h-48" />
            <img src={shore} alt="Ship" className="rounded-lg object-cover w-full  row-span-2" />
            <img src={shore} alt="Team" className="rounded-lg object-cover w-full h-48" />
          </div>

          {/* Right side text */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-snug">
              Century Exploration & Production Limited (CEPL)
            </h2>
            <p className="text-gray-700 mb-4 font-medium">
              CESL is one of the leading domestic providers of premium field development solutions
              and Operation & Maintenance services. We collaborate with world-renowned technical
              partners to deliver exceptional services in deep offshore, swamp, and land locations
              within the Gulf of Guinea.
            </p>
            <p className="text-gray-600 mb-8">
              Our comprehensive offerings extend to training and manpower services, community
              liaison, and logistics support for FPSO operations, catering to various International
              Oil Companies (IOCs) operating in Sub-Saharan Africa. As part of our strategic vision,
              CESL is actively expanding its operations beyond the West African Coast.
            </p>

            <Link to="/contact-us">
              <ButtonComponent text="Contact us" bg_color="#ED6C30" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServicesTab;
