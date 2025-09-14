import React, { useState } from 'react';
import CardFace from '../Components/Cards/CardFace';

const cgFaces = [
  {
    imageName: 'kenEtete',
    faceName: 'Ken Etete',
    role: 'ED & Group CEO',
    description:
      'Ken Etete serves as an Executive Director and Group CEO of Century Group, providing visionary leadership to its functional subsidiaries.',
    linkedin: 'https://linkedin.com/in/ken-etete',
    twitter: 'https://twitter.com/kenetete',
    facebook: 'https://facebook.com/ken.etete',
    instagram: 'https://instagram.com/kenetete',
  },
  {
    imageName: 'osaretinAmadasu',
    faceName: 'Osaretin Amadasu',
    role: 'MD CPLT',
    description:
      'Osaretin Amadasu holds the position of Managing Director at Century Ports & Terminal Limited, with more than two decades of experience in the Oil & Gas Industry, he is a certified Associate Specialist in Oil & Gas Technology.',
    linkedin: 'https://linkedin.com/in/osaretin-amadasu',
    twitter: 'https://twitter.com/osaretinamadasu',
    facebook: 'https://facebook.com/osaretin.amadasu',
    instagram: 'https://instagram.com/osaretinamadasu',
  },
  {
    imageName: 'maclarenKosuwei',
    faceName: 'Maclaren Kosuwei',
    role: 'ED Century Group',
    description:
      'Maclaren Kosuowei assumed the role of  Executive Director at Century Group in 2008.',
    linkedin: 'https://linkedin.com/in/maclaren-kosuwei',
    twitter: 'https://twitter.com/maclarenkosuwei',
    facebook: 'https://facebook.com/maclaren.kosuwei',
    instagram: 'https://instagram.com/maclarenkosuwei',
  },
  {
    imageName: 'osasUwaifo',
    faceName: 'Osas Uwaifo',
    role: 'MD CEPL',
    description:
      'Osas Uwaifo serves as the managing director of century exploration and production limited. ',
    linkedin: 'https://linkedin.com/in/osas-uwaifo',
    twitter: 'https://twitter.com/osasuwaifo',
    facebook: 'https://facebook.com/osas.uwaifo',
    instagram: 'https://instagram.com/osasuwaifo',
  },
  {
    imageName: 'edwardYinkere',
    faceName: 'Captain Edward Yinkere',
    role: 'Non Executive Director',
    description:
      'Captain Edward Yinkere  functioned as a Director of Century Energy Services Limited; a Director of Century Bumi Limited and since 2010 assumed the Chairmanship of, Century Ports & Terminals Limited.',
    linkedin: 'https://linkedin.com/in/edward-yinkere',
    twitter: 'https://twitter.com/edwardyinkere',
    facebook: 'https://facebook.com/edward.yinkere',
    instagram: 'https://instagram.com/edwardyinkere',
  },
  {
    imageName: 'teikariyeEtete',
    faceName: 'Teikariye Etete',
    role: 'Non Executive Director',
    description:
      'Teikariye Etete serves as non-executive director, , has been associated with Century Energy Services as an Executive Director since 2007. ',
    linkedin: 'https://linkedin.com/in/teikariye-etete',
    twitter: 'https://twitter.com/teikariyeetete',
    facebook: 'https://facebook.com/teikariye.etete',
    instagram: 'https://instagram.com/teikariyeetete',
  },
  {
    imageName: 'preyeAngaye',
    faceName: 'Dr. Preye E. G Angaye',
    role: 'Head Business Strategy',
    description:
      'Dr. Preye E.G Angaye serves as Head of Business Strategy & New Business, his also responsible for overseeing Special Projects in the office of the Group CEO.',
    linkedin: 'https://linkedin.com/in/preye-angaye',
    twitter: 'https://twitter.com/preyeangaye',
    facebook: 'https://facebook.com/preye.angaye',
    instagram: 'https://instagram.com/preyeangaye',
  },
];

const FacesOfCG: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('directors');

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
                <CardFace
                  key={face.faceName}
                  imageName={face.imageName}
                  faceName={face.faceName}
                  role={face.role}
                  description={face.description}
                />
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
      </div>
    </>
  );
};

export default FacesOfCG;
