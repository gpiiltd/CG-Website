import React, { useState } from 'react';
import { TabBar } from '../Components/Tab';
import Certificates from '../Components/Certificates';
import { Typography } from '../Components/Typography';
import Policy from '../Components/Policy';

const GovernanceAndPolicyMain: React.FC = () => {
  const [activeTab, setActiveTab] = useState('certificate');

  const tabs = [
    { id: 'certificate', label: 'Certificate' },
    { id: 'policy', label: 'Policy' },
  ];

  return (
    <div className="max-w-[90%] mx-auto px-4 py-12">
      {/* Heading */}
     {activeTab === 'certificate' && (
  <div className="mb-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 lg:gap-24">
    {/* Left side */}
    <div className="text-center lg:text-left">
      <Typography
        size="sm"
        weight="bold"
        color="secondary"
        className="mb-2 text-[#ED6C30]"
      >
        TRUSTED & REGULATED
      </Typography>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#11092F]">
        Governance, Licenses & Certifications
      </h1>
    </div>

    {/* Right side */}
    <div className="text-center lg:text-left">
      <p className="text-gray-600 mt-3 max-w-2xl mx-auto lg:mx-0">
        Transparency and compliance are at the heart of everything we do. Explore
        our comprehensive regulatory credentials and certifications that
        demonstrate our commitment to the highest industry standards.
      </p>
    </div>
  </div>
)}

{activeTab === 'policy' && (
  <div className="mb-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 lg:gap-24">
    {/* Left side */}
    <div className="text-center lg:text-left">
      <Typography
        size="sm"
        weight="bold"
        color="secondary"
        className="mb-2 text-[#ED6C30]"
      >
        TRUSTED & REGULATED
      </Typography>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#11092F]">
        Governance, Licenses & Certifications
      </h1>
    </div>

    {/* Right side */}
    <div className="text-center lg:text-left">
      <p className="text-gray-600 mt-3 max-w-2xl mx-auto lg:mx-0">
        Transparency and compliance are at the heart of everything we do. Explore
        our comprehensive regulatory credentials and certifications that
        demonstrate our commitment to the highest industry standards.
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

        {activeTab === 'policy' && <Policy />}
      </div>
    </div>
  );
};

export default GovernanceAndPolicyMain;
