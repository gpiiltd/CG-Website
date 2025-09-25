import React, { useState } from 'react';
import CardFace from '../../Components/Cards/CardFace';
import { cgDirectors, cgManagment } from './ListofFaces';
import CustomModal from '../../Components/Modal/Modal';
import AnimatedScreen from '../../Components/Animations';
import usePageTitle from '../../Components/PageTitle';
import LazyImage from '../../Components/LazyImage';

const FacesOfCG: React.FC = () => {
  usePageTitle('Century Group | Our Team');
  const [activeTab, setActiveTab] = useState<string>('directors');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedDirector, setSelectedDirector] = useState<any>(null);
  return (
    <>
      <AnimatedScreen>
        <div className="min-h-screen bg-white pb-16 mx-4">
          <div className="max-w-6xl justify-center items-center mx-auto px-4 pt-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#18193F] text-center mb-4">
              Faces Of Century Group
            </h1>
            <p className="text-[#3E3E41] text-center max-w-2xl mx-auto mb-8">
              From offshore infrastructure deployment, to energy logistics, our integrated services
              are designed too optimize operation, minimize risk and maximize . value for
              stakeholders.
            </p>

            <div className="flex justify-center bg-[#FCEEEA] space-x-2 sm:space-x-4 mb-6 w-full md:w-[70%] lg:w-[60%] mx-auto rounded-xl p-2">
              <button
                className={`flex-1 py-3 px-2 sm:px-6 rounded-lg text-sm sm:text-base cursor-pointer ${
                  activeTab === 'directors' ? 'bg-white text-[#ED6C30] shadow-lg' : 'text-[#667085]'
                }`}
                onClick={() => setActiveTab('directors')}
              >
                Board of Directors
              </button>
              <button
                className={`flex-1 py-3 px-2 sm:px-6 rounded-lg text-sm sm:text-base cursor-pointer ${
                  activeTab === 'management'
                    ? 'bg-white text-[#ED6C30] shadow-lg'
                    : 'text-[#667085]'
                }`}
                onClick={() => setActiveTab('management')}
              >
                Management
              </button>
            </div>

            {activeTab === 'directors' && (
              <div className="w-full justify-items-center grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-x-4 gap-y-20  mb-16 mt-12">
                {cgDirectors.map((face) => (
                  <div
                    key={face.directorName}
                    onClick={() => setSelectedDirector(face)}
                    className="cursor-pointer"
                  >
                    <CardFace
                      key={face.directorName}
                      imageName={face.imageName}
                      faceName={face.directorName}
                      role={face.role}
                      description={face.description}
                    />
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'management' && (
              <div className="w-full justify-items-center grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-x-4 gap-y-20  mb-16 mt-12">
                {cgManagment.map((face) => (
                  <div
                    key={face.directorName}
                    onClick={() => setSelectedDirector(face)}
                    className="cursor-pointer"
                  >
                    <CardFace
                      key={face.directorName}
                      imageName={face.imageName}
                      faceName={face.directorName}
                      role={face.role}
                      description={face.description}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="max-w-5xl mx-auto  px-4 my-36">
            <div className="bg-[#18193F] rounded-[16px] py-12 px-8 flex flex-col md:flex-row items-center justify-between">
              <div>
                <h2 className="text-white text-3xl font-bold mb-2">Build a future with us</h2>
                <p className="text-white text-base max-w-xl">
                  We are shaping the future of energy and infrastructure across Africa. Together, we
                  can create lasting impact, drive growth, and open new possibilities. Join us and
                  let’s build the future today.
                </p>
              </div>
              <a
                href="#"
                className="mt-6 md:mt-0 bg-[#ED6C30] text-white font-semibold py-3 px-8 rounded-[32px] transition hover:bg-[#c95a1a]"
              >
                View openings
              </a>
            </div>
          </div>

          {/* Modal */}
          <CustomModal
            isOpen={!!selectedDirector}
            onClose={() => setSelectedDirector(null)}
            width="1022px"
            height="585px"
          >
            <AnimatedScreen>
              {selectedDirector && (
                <div className="flex flex-col md:flex-row gap-8 px-10 py-2 mb-8">
                  <div className="relative flex flex-col items-center md:w-[295px] md:h-[295px]">
                    <div className="absolute inset-0 ">
                      <div className="w-full h-full rounded-[48px] relative">
                        <LazyImage
                          src={selectedDirector.imageName}
                          alt="Director 1"
                          className="w-full md:h-[460px] object-cover rounded-xl"
                        />
                        <div className="absolute left-0 bottom-[-340px] md:bottom-[-200px] w-[90%] bg-[#FCEEEA] rounded-tr-[24px] shadow-md py-4 px-4 flex flex-col items-center">
                          <span className="text-[#ED6C30] font-semibold text-xl">
                            {selectedDirector.directorName}
                          </span>
                          <span className="text-[#3E3E41] text-lg mt-1">
                            {selectedDirector.role}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col mt-[350px] md:mt-0">
                    <div>
                      <p className="text-[#18193F] text-sm leading-relaxed whitespace-pre-line">
                        <span className="text-[#ED6C30] font-semibold mr-1">
                          {selectedDirector.directorName}
                        </span>
                        {selectedDirector.bio}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </AnimatedScreen>
          </CustomModal>
        </div>
      </AnimatedScreen>
    </>
  );
};

export default FacesOfCG;
