import { useEffect, useState, type JSX } from 'react';
import { Typography } from '../../Components/Typography';
import ship from '../../assets/svgImages/bg_discovery.svg';
import { type Asset } from './data';
import CustomModal from '../../Components/Modal/Modal';
import { IoPlayOutline } from 'react-icons/io5';
import AnimatedScreen from '../../Components/Animations';
import usePageTitle from '../../Components/PageTitle';
import LazyImage from '../../Components/LazyImage';
import Stats from '../Home/Stats';
import { client } from '../../sanityClient';

type ModalType = 'details' | 'tour' | null;

type SanityAsset = {
  _id: string;
  title: string;
  description: string;
  image: string;
  videoUrl?: string;
  factSheet?: { label: string; value: string }[];
};

const Assets = () => {
  usePageTitle('Century Group | Assets');
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  const [modalType, setModalType] = useState<ModalType>(null);
  const [expandedStates, setExpandedStates] = useState<Record<number, boolean>>({});
  const [allAssets, setAllAssets] = useState<Asset[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    client
      .fetch(
        `*[_type == "asset"]{
        _id,
        title,
        description,
        "image": image.asset->url,
  "videoUrl": videoUrl.asset->url,
        factSheet[]{
          label,
          value
        }
      }`
      )
      .then((data: SanityAsset[]) => {
        const formatted = data.map((item, index) => ({
          id: index + 1,
          title: item.title,
          description: item.description,
          image: item.image,
          videoUrl: item.videoUrl || null,
          factSheet: Object.fromEntries(item.factSheet?.map((fs) => [fs.label, fs.value]) || []),
          buttons: ['View Asset Details', 'Watch The Tour'],
        }));
        setAllAssets(formatted);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const toggleExpanded = (assetId: number) => {
    setExpandedStates((prev) => ({
      ...prev,
      [assetId]: !prev[assetId],
    }));
  };
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

console.log("Selected asset:", JSON.stringify(selectedAsset,null,2));


  const renderFactSheet = (asset: Asset): JSX.Element => {
    const { factSheet } = asset;
    if (!factSheet || Object.keys(factSheet).length === 0) {
      return (
        <div className="pb-6 bg-gray-900 text-white min-h-full flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold mb-4">{asset.title}</h2>
          <p className="text-lg text-gray-300 text-center">
            A fact sheet isn’t available for this vessel at the moment
          </p>
        </div>
      );
    }

    return (
      <div className="pb-6 bg-gray-900 text-white min-h-full">
        <div className="mb-6">
          <img
            src={asset.image}
            alt={asset.title}
            className="w-full h-80 object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="px-2 md:px-6 lg:px-12">
          <div className="mb-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-2">{asset.title}</h2>
            <h3 className="text-2xl text-orange-400 font-semibold">FACT SHEET</h3>
          </div>

          {/* Dynamic Fact Sheet Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(factSheet).map(([key, value], index) => (
              <div key={index} className="border border-gray-600 rounded p-4 text-center">
                <div className="text-gray-300 text-sm mb-2">{key.replace(/([A-Z])/g, ' $1')}</div>
                <div className="text-orange-400 font-bold text-lg">{value || '-'}</div>
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
        {loading ? (
          <div className="text-center text-gray-600 py-10">Loading assets...</div>
        ) : allAssets.length === 0 ? (
          <div className="text-center text-gray-600 py-10">No assets found.</div>
        ) : (
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {allAssets.map((asset) => {
                const isExpanded = expandedStates[asset.id] || false;

                return (
                  <div
                    key={asset.id}
                    className="bg-white rounded-lg overflow-hidden flex flex-col h-full relative"
                  >
                    {/* Text Section */}
                    <div className="p-1 pb-6 flex-1 relative">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">{asset.title}</h2>

                      <p
                        className={`text-gray-600 leading-relaxed mb-2 transition-all duration-300 ${
                          isExpanded ? 'line-clamp-none' : 'line-clamp-3'
                        }`}
                      >
                        {asset.description}
                      </p>

                      {asset.description.length > 120 && (
                        <button
                          onClick={() => toggleExpanded(asset.id)}
                          className="cursor-pointer text-sm font-medium text-orange-400 hover:underline focus:outline-none"
                        >
                          {isExpanded ? 'Show less' : 'Read more'}
                        </button>
                      )}

                      {/* Expanded Overlay */}
                      {isExpanded && (
                        <div className="absolute inset-0 bg-white z-20 p-1 overflow-y-auto">
                          <h2 className="text-2xl font-bold text-gray-900 mb-4">{asset.title}</h2>
                          <p className="text-gray-600 leading-relaxed mb-4">{asset.description}</p>
                          <button
                            onClick={() => toggleExpanded(asset.id)}
                            className="cursor-pointer text-sm font-medium text-orange-400 hover:underline focus:outline-none"
                          >
                            Show less
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Image Section */}
                    <div className="relative">
                      <LazyImage
                        src={asset.image}
                        alt={asset.title}
                        className="w-full h-64 object-cover"
                      />

                      <div className="absolute bottom-4 left-4 flex gap-3">
                        <button
                          onClick={() => handleViewDetails(asset)}
                          className="cursor-pointer px-4 py-2 bg-transparent border border-white text-white text-sm rounded-full hover:bg-white hover:text-gray-900 transition-colors duration-300"
                        >
                          View Asset Details
                        </button>

                        <button
                          onClick={() => handleWatchTour(asset)}
                          className="cursor-pointer px-4 py-2 bg-transparent border border-white text-white text-sm rounded-full hover:bg-white hover:text-gray-900 transition-colors duration-300 flex items-center gap-2"
                        >
                          Watch The Tour
                          <IoPlayOutline />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <Stats />
        {/* modal  */}
        <CustomModal isOpen={modalType !== null} onClose={closeModal} width="1022px" height="585px">
          {modalType === 'details' && selectedAsset && renderFactSheet(selectedAsset)}
          {modalType === 'tour' && selectedAsset && (
            <AnimatedScreen>
              <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                {selectedAsset.videoUrl !== null ? (
                  <video
                    src={selectedAsset.videoUrl}
                    controls
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <p className="text-gray-200 text-lg">
                    {' '}
                    A tour video isn’t available for this asset yet, but please enjoy exploring its
                    fact sheet and highlights.
                  </p>
                )}

              </div>
            </AnimatedScreen>
          )}
        </CustomModal>
      </div>
    </AnimatedScreen>
  );
};

export default Assets;
