import React, { useState } from 'react';
import safetyCert from '../assets/svgImages/cert2.svg';
import environmentCert from '../assets/svgImages/cert2.svg';
import { TabBar } from '../Components/Tab';
import Certificates from '../Components/Certificates';
import { Typography } from '../Components/Typography';

const GovernanceAndPolicyMain: React.FC = () => {
  const [activeTab, setActiveTab] = useState('certificate');

  const tabs = [
    { id: 'certificate', label: 'Certificate' },
    { id: 'Policy', label: 'Policy' },
    { id: 'environment', label: 'Environmental Management System' },
  ];

  return (
    <div className="max-w-[90%] mx-auto px-4 py-12">
      {/* Heading */}
      {activeTab === 'certificate' && (
        <div className="mb-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24">
          <div>
            <Typography size="sm" weight="bold" color="secondary" className="mb-2  text-[#ED6C30]">
              TRUSTED & REGULATED
            </Typography>{' '}
            <h1 className="text-2xl md:text-4xl font-bold text-[#11092F]">
              Governance, Licenses & Certifications
            </h1>
          </div>

          <div>
            {' '}
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Transparency and compliance are at the heart of everything we do. Explore our
              comprehensive regulatory credentials and certifications that demonstrate our
              commitment to the highest industry standards.
            </p>
          </div>
        </div>
      )}

      {activeTab === 'policy' && (
        <div className="mb-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24">
          <div>
            <Typography size="sm" weight="bold" color="secondary" className="mb-2  text-[#ED6C30]">
              TRUSTED & REGULATED
            </Typography>{' '}
            <h1 className="text-2xl md:text-4xl font-bold text-[#11092F]">
              Governance, Licenses & Certifications
            </h1>
          </div>

          <div>
            {' '}
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Transparency and compliance are at the heart of everything we do. Explore our
              comprehensive regulatory credentials and certifications that demonstrate our
              commitment to the highest industry standards.
            </p>
          </div>
        </div>
      )}

      {/* Tabs */}
      <TabBar
        tabs={tabs}
        defaultActiveTab="certificate"
        onTabChange={(id) => setActiveTab(id)}
        variant="elevated"
        size="medium"
        fullWidth
      />

      {/* Tab Content */}
      <div className="mt-8">
        {activeTab === 'certificate' && <Certificates />}

        {activeTab === 'certicate' && (
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <img
              src={safetyCert}
              alt="Safety Certificate"
              className="rounded-lg shadow-md w-full h-auto"
            />
            <div>
              <h2 className="text-xl font-semibold mb-4">Health & Safety Management</h2>
              <p className="text-gray-700 mb-4">
                We are proud to be certified to ISO 45001:2018, the international standard for
                Occupational Health & Safety Management Systems (OHSMS).
              </p>
              {/* reuse same list */}
            </div>
          </div>
        )}

        {activeTab === 'environment' && (
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <img
              src={environmentCert}
              alt="Environmental Certificate"
              className="rounded-lg shadow-md w-full h-auto"
            />
            <div>
              <h2 className="text-xl font-semibold mb-4">Environmental Management System</h2>
              <p className="text-gray-700 mb-4">
                Our certification to ISO 14001:2015 is proof of our commitment to environmental
                responsibility while delivering energy solutions.
              </p>
              {/* reuse same list */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GovernanceAndPolicyMain;
