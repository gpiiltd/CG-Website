import React, { useState } from 'react';
import CardFace from '../../Components/Cards/CardFace';
import { cgFaces } from './ListofFaces';
import CustomModal from '../../Components/Modal/Modal';
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';
import Icon from '../../assets/SvgImagesAndIcons';

const FacesOfCG: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('directors');
  // const [showModal, setShowModal] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedFace, setSelectedFace] = useState<any>(null);

  return (
    <>
      <div className="min-h-screen bg-white pb-16">
        <div className="max-w-6xl mx-auto px-4 pt-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#18193F] text-center mb-4">
            Faces Of Century Group
          </h1>
          <p className="text-[#3E3E41] text-center max-w-2xl mx-auto mb-8">
            From offshore infrastructure deployment, to energy logistics, our integrated services
            are designed too optimize operation, minimize risk and maximize . value for
            stakeholders.
          </p>

          {/* Responsive tabs */}
          <div className="flex justify-center bg-[#FCEEEA] space-x-2 sm:space-x-4 mb-6 w-full md:w-[70%] lg:w-[60%] mx-auto rounded-xl p-2">
            <button
              className={`flex-1 py-3 px-2 sm:px-6 rounded-lg text-sm sm:text-base ${
                activeTab === 'directors' ? 'bg-white text-[#ED6C30]' : 'text-[#667085]'
              }`}
              onClick={() => setActiveTab('directors')}
            >
              Board of Directors
            </button>
            <button
              className={`flex-1 py-3 px-2 sm:px-6 rounded-lg text-sm sm:text-base ${
                activeTab === 'management' ? 'bg-white text-[#ED6C30]' : 'text-[#667085]'
              }`}
              onClick={() => setActiveTab('management')}
            >
              Management
            </button>
          </div>

          {activeTab === 'directors' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-20 justify-items-center mb-16">
              {cgFaces.map((face) => (
                <div
                  key={face.faceName}
                  onClick={() => setSelectedFace(face)}
                  className="cursor-pointer"
                >
                  <CardFace
                    key={face.faceName}
                    imageName={face.imageName}
                    faceName={face.faceName}
                    role={face.role}
                    description={face.description}
                    // onClick={() => setShowModal(true)}
                  />
                </div>
              ))}
            </div>
          )}

          {activeTab === 'management' && (
            <h1 className="text-4xl md:text-5xl font-bold text-[#18193F] text-center mb-4">
              MANAGEMENT
            </h1>
          )}
        </div>
        <div className="max-w-5xl mx-auto mt-12 px-4">
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
          isOpen={!!selectedFace}
          onClose={() => setSelectedFace(null)}
          width="1022px"
          height="585px"
        >
          {selectedFace && (
            <div className="flex flex-col md:flex-row gap-8 px-10 py-2">
              {/* Left: Image and name/role card */}

              <div className="relative flex flex-col items-center md:w-[295px] md:h-[295px]">
                <div className="absolute inset-0 ">
                  <div className="w-full h-full rounded-[48px] relative">
                    <Icon
                      type={selectedFace.imageName}
                      className="w-full` h-[460px] object-cover rounded-xl"
                    />
                    <div className="absolute left-0 bottom-[-200px] w-[90%] bg-[#FCEEEA] rounded-tr-[24px] shadow-md py-4 px-4 flex flex-col items-center">
                      <span className="text-[#ED6C30] font-semibold text-xl">
                        {selectedFace.faceName}
                      </span>
                      <span className="text-[#3E3E41] text-lg mt-1">{selectedFace.role}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Bio and social links */}
              <div className="flex-1 flex flex-col">
                <div>
                  <p className="text-[#18193F] text-sm leading-relaxed whitespace-pre-line">
                    <span className="text-[#ED6C30] font-semibold mr-1">
                      {selectedFace.faceName}
                    </span>
                    {selectedFace.bio}
                  </p>
                </div>
                <div className="flex items-center gap-6 mt-8">
                  <a
                    href={selectedFace.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ED6C30] hover:text-[#18193F]"
                  >
                    <FaLinkedinIn size={24} />
                  </a>
                  <a
                    href={selectedFace.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ED6C30] hover:text-[#18193F]"
                  >
                    <FaFacebookF size={24} />
                  </a>
                  <a
                    href={selectedFace.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ED6C30] hover:text-[#18193F]"
                  >
                    <FaTwitter size={24} />
                  </a>
                  <a
                    href={selectedFace.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ED6C30] hover:text-[#18193F]"
                  >
                    <FaInstagram size={24} />
                  </a>
                </div>
              </div>
            </div>
          )}
        </CustomModal>
      </div>
    </>
  );
};

export default FacesOfCG;
