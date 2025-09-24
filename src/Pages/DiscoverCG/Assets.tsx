import { Typography } from '../../Components/Typography';
import ship from '../../assets/svgImages/bg_discovery.svg';

import { assets } from './data';

const Assets = () => {
  return (
    <div className="min-h-screen bg-white pb-12">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center py-20 px-6 text-center flex flex-col justify-center items-center min-h-[400px]"
        style={{ backgroundImage: `url(${ship})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 text-white max-w-2xl">
          <Typography weight="bold" size="3xl" className=" ">
            Our Assets
          </Typography>

          <Typography weight="medium" className="pt-4 ">
            From offshore infrastructure deployment, to energy logistics, our integrated services
            are designed to optimize operation.
          </Typography>
        </div>
      </div>

      {/* Assets Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {assets.map((asset) => (
            <div key={asset.id} className="relative">
              {/* Asset Card */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                {/* Text Content */}
                <div className="p-6 pb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{asset.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{asset.description}</p>
                </div>

                {/* Image */}
                <div className="relative">
                  <img src={asset.image} alt={asset.title} className="w-full h-64 object-cover" />

                  <div className="absolute bottom-4 left-4 flex gap-3">
                    <button className="px-4 py-2 bg-transparent border border-white text-white text-sm rounded-full hover:bg-white hover:text-gray-900 transition-colors">
                      View Asset Details
                    </button>
                    <button className="px-4 py-2 bg-transparent border border-white text-white text-sm rounded-full hover:bg-white hover:text-gray-900 transition-colors flex items-center gap-2">
                      Watch The Tour
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                  {/* )} */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Statistics Card - Closer positioning with subtle overlap */}
      <div className="max-w-[85%] mx-auto px-4 relative z-10 mt-12">
        <div className="bg-[#0F082B] rounded-2xl px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-12 transform -translate-y-2 md:-translate-y-4 lg:-translate-y-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 text-white text-center">
            <div className="lg:border-r lg:border-gray-600 pb-4 lg:pb-0">
              <div className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold mb-1 md:mb-2">
                3
              </div>
              <div className="text-xs md:text-sm lg:text-base opacity-90">FPSO'S</div>
            </div>
            <div className="lg:border-r lg:border-gray-600 pb-4 lg:pb-0">
              <div className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold mb-1 md:mb-2">
                1
              </div>
              <div className="text-xs md:text-sm lg:text-base opacity-90">FSO</div>
            </div>
            <div className="lg:border-r lg:border-gray-600 pb-4 lg:pb-0">
              <div className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold mb-1 md:mb-2">
                30%
              </div>
              <div className="text-xs md:text-sm lg:text-base opacity-90 px-2">
                Average cost savings for clients
              </div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold mb-1 md:mb-2">
                25%
              </div>
              <div className="text-xs md:text-sm lg:text-base opacity-90">
                CAGR Projected growth
              </div>
            </div>
          </div>
        </div>
      </div>

{/* modal  */}
  {/* <CustomModal
            isOpen={}
            onClose={}
            width="1022px"
            height="585px"
          >

          </CustomModal> */}
    </div>
  );
};

export default Assets;
