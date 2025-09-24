import { useState, type JSX } from 'react';
import { Typography } from '../../Components/Typography';
import ship from '../../assets/svgImages/bg_discovery.svg';
import { assets, type Asset } from './data';
import CustomModal from '../../Components/Modal/Modal';
import { IoPlayOutline } from 'react-icons/io5';
import AnimatedScreen from '../../Components/Animations';

type ModalType = 'details' | 'tour' | null;

const Assets = () => {
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  const [modalType, setModalType] = useState<ModalType>(null);

  const handleViewDetails = (asset: Asset) => {
    setSelectedAsset(asset);
    setModalType('details');
  };

  const handleWatchTour = (asset: Asset) => {
    setSelectedAsset(asset);
    setModalType('tour');
  };

  const closeModal = () => {
    setSelectedAsset(null);
    setModalType(null);
  };
  const renderFactSheet = (asset: Asset): JSX.Element => {
    const { factSheet } = asset;

    const topRow = [
      { label: 'Year Build', value: factSheet.yearBuild },
      { label: 'IMO', value: factSheet.imo },
      { label: 'Beam', value: factSheet.beam },
      { label: 'Overall Length', value: factSheet.overallLength },
      { label: 'Overall Width', value: factSheet.overallWidth },
      { label: 'Vessel Type', value: factSheet.vesselType },
    ];

    const bottomRow = [
      { label: 'Vessel Type - Detailed', value: factSheet.vesselTypeDetailed },
      { label: 'Navigational Status', value: factSheet.navigationalStatus },
      { label: 'MMSI', value: factSheet.mmsi },
      { label: 'Call Sign', value: factSheet.callSign },
      { label: 'Gross Tonnage', value: factSheet.grossTonnage },
    ];

    return (
      <div className="pb-6 bg-gray-900 text-white min-h-full">
        {/* Asset Image */}
        <div className="mb-6">
          <img
            src={asset.image}
            alt={asset.title}
            className="w-full h-80 object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="px-2 md:px-6 lg:px-12">
          <div className="mb-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-2">{selectedAsset?.title}</h2>
            <h3 className="text-2xl text-orange-400 font-semibold">FACT SHEET</h3>
          </div>

          {/* Top Row */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
            {topRow.map((item, index) => (
              <div key={index} className="border border-gray-600 rounded p-4 text-center">
                <div className="text-gray-300 text-sm mb-2">{item.label}</div>
                <div className="text-orange-400 font-bold text-lg">{item.value}</div>
              </div>
            ))}
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {bottomRow.map((item, index) => (
              <div key={index} className="border border-gray-600 rounded p-4 text-center">
                <div className="text-gray-300 text-sm mb-2">{item.label}</div>
                <div className="text-orange-400 font-bold text-lg">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <AnimatedScreen>
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
                <div className="bg-white rounded-lg overflow-hidden ">
                  {/* Text Content */}
                  <div className="p-6 pb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{asset.title}</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">{asset.description}</p>
                  </div>

                  {/* Image */}
                  <div className="relative">
                    <img src={asset.image} alt={asset.title} className="w-full h-64 object-cover" />

                    <div className="absolute bottom-4 left-4 flex gap-3">
                      <button
                        onClick={() => handleViewDetails(asset)}
                        className="cursor-pointer px-4 py-2 bg-transparent border border-white text-white text-sm rounded-full hover:bg-white hover:text-gray-900 transition-colors hover:duration-600"
                      >
                        View Asset Details
                      </button>
                      <button
                        onClick={() => handleWatchTour(asset)}
                        className="cursor-pointer px-4 py-2 bg-transparent border border-white text-white text-sm rounded-full hover:bg-white hover:text-gray-900 transition-colors flex items-center gap-2 hover:duration-600"
                      >
                        Watch The Tour
                        <IoPlayOutline />
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
        <CustomModal isOpen={modalType !== null} onClose={closeModal} width="1022px" height="585px" >
          {modalType === 'details' && selectedAsset && renderFactSheet(selectedAsset)}

          {modalType === 'tour' && selectedAsset && (
            <AnimatedScreen>
              <div className="w-full h-full bg-white">
                <iframe
                  src={selectedAsset.videoUrl}
                  title={`${selectedAsset.title} Tour`}
                  className="w-full h-full object-cover"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </AnimatedScreen>
          )}
        </CustomModal>
      </div>
    </AnimatedScreen>
  );
};

export default Assets;
