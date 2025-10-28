import React, { useEffect, useState } from 'react';
import { TabBar } from '../Components/Tab';
import Certificates from '../Components/Certificates';
import { Typography } from '../Components/Typography';
import Policy from '../Components/Policy';
import usePageTitle from '../Components/PageTitle';
import AnimatedScreen from '../Components/Animations';
import { useLocation} from 'react-router-dom';


const GovernanceAndPolicyMain: React.FC = () => {
  usePageTitle('Century Group | Governance & Policy');
const location = useLocation();
  const initialTab = location.state?.activeTab || "policy";
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tab = searchParams.get('tab');
    if (tab) {
      setActiveTab(tab);
    }
  }, [location.search]);

  const tabs = [
{ id: 'policy', label: 'Policy' },
    { id: 'certificate', label: 'Certificate' },

  ];

  return (
    <AnimatedScreen>
      <div className="max-w-[90%] mx-auto px-4 py-12">
        {/* Heading */}
        {activeTab === 'policy' && (
          <div className="mb-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 lg:gap-24">
            {/* Left side */}
            <div className="text-center lg:text-left">
              <Typography size="sm" weight="bold" color="secondary" className="mb-2 text-[#ED6C30]">
                TRUSTED & REGULATED
              </Typography>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#11092F]">
                Governance, Licenses & Certifications
              </h1>
            </div>

            {/* Right side */}
            <div className="text-center lg:text-left">
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto lg:mx-0">
                Transparency and compliance are at the heart of everything we do. Explore our
                comprehensive regulatory credentials and certifications that demonstrate our
                commitment to the highest industry standards.
              </p>
            </div>
          </div>
        )}
        {activeTab === 'certificate' && (
          <div className="mb-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 lg:gap-24">
            {/* Left side */}
            <div className="text-center lg:text-left">
              <Typography size="sm" weight="bold" color="secondary" className="mb-2 text-[#ED6C30]">
                TRUSTED & REGULATED
              </Typography>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#11092F]">
                Governance, Licenses & Certifications
              </h1>
            </div>

            {/* Right side */}
            <div className="text-center lg:text-left">
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto lg:mx-0">
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
        defaultActiveTab={activeTab}
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
    </AnimatedScreen>
  );
};


export default GovernanceAndPolicyMain;
