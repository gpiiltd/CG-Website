import { useNavigate } from 'react-router-dom';
import manshore from '../../assets/svgImages/manshore.svg';
import womanworker from '../../assets/svgImages/womanworker.svg';
import manworker from '../../assets/svgImages/manworker.svg';
import gasplant from '../../assets/svgImages/gasplant.svg';
import shore from '../../assets/svgImages/shore.svg';
import ServiceSection from './ServiceSection';
import OverlaySection from './OverlaySection';

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
      <OverlaySection
        title="Deployment, Operation and maintenance of Offshore infrastructure"
        description="A detailed wireframe kit made of comprehensive components to get you started on your next website or landing page project."
        image={manshore}
        contactLink="/contact-us"
        onLearnMore={() => navigate('/discover-century-group')}
        bgColor="#EDFFFF"
      />

      <OverlaySection
        title="Exploration and production"
        description="A detailed wireframe kit made of comprehensive components to get you started on your next website or landing page project."
        image={womanworker}
        contactLink="/contact-us"
        onLearnMore={() => navigate('/discover-century-group')}
        bgColor="#F5F1FE"
      />

      <OverlaySection
        title="Deployment, Operation and maintenance of Offshore infrastructure"
        description="A detailed wireframe kit made of comprehensive components to get you started on your next website or landing page project."
        image={manworker}
        contactLink="/contact-us"
        onLearnMore={() => navigate('/discover-century-group')}
        bgColor="#F6E4F0"
      />

      <OverlaySection
        title="Deployment, Operation and maintenance of Offshore infrastructure"
        description="A detailed wireframe kit made of comprehensive components to get you started on your next website or landing page project."
        image={gasplant}
        contactLink="/contact-us"
        onLearnMore={() => navigate('/discover-century-group')}
        bgColor="#FEF3EF"
      />

      {/* MAIN SERVICE SECTIONS */}
      <div>
        {/* SERVICE 2 */}
        <ServiceSection
          bgColor="#F5F1FE"
          title="Exploration & Production"
          subtitle="From offshore infrastructure deployment, to energy logistics, our integrated services are designed too optimize operation, minimize risk and maximize, value for stakeholders."
          images={[shore, shore, shore]}
          companyTitle="Century Exploration & Production Limited (CEPL)"
          companyDescription="CESL is one of the leading domestic providers of premium field development solutions and Operation & Maintenance services. We collaborate with world-renowned technical partners to deliver exceptional services in deep offshore, swamp, and land locations within the Gulf of Guinea."
          companyDetails="Our comprehensive offerings extend to training and manpower services, community liaison, and logistics support for FPSO operations, catering to various International Oil Companies (IOCs) operating in Sub-Saharan Africa. As part of our strategic vision, CESL is actively expanding its operations beyond the West African Coast."
          contactLink="/contact-us"
        />

        {/* SERVICE 3 */}
        <ServiceSection
          bgColor="#F6E4F0"
          title="Ports Terminal and Management Services"
          subtitle="From offshore infrastructure deployment, to energy logistics, our integrated services are designed too optimize operation, minimize risk and maximize, value for stakeholders."
          images={[shore, shore, shore]}
          companyTitle="Century Ports & Terminal Limited (CPTL)"
          companyDescription="CESL is one of the leading domestic providers of premium field development solutions and Operation & Maintenance services. We collaborate with world-renowned technical partners to deliver exceptional services in deep offshore, swamp, and land locations within the Gulf of Guinea."
          companyDetails="Our comprehensive offerings extend to training and manpower services, community liaison, and logistics support for FPSO operations, catering to various International Oil Companies (IOCs) operating in Sub-Saharan Africa. As part of our strategic vision, CESL is actively expanding its operations beyond the West African Coast."
          contactLink="/contact-us"
        />

        {/* SERVICE 4 */}
        <ServiceSection
          bgColor="#FFF3EE4D"
          title="Natural Gas Transmission and Distribution"
          subtitle="From offshore infrastructure deployment, to energy logistics, our integrated services are designed too optimize operation, minimize risk and maximize, value for stakeholders."
          images={[shore, shore, shore]}
          companyTitle="Gas Plus Synergy (GPS)"
          companyDescription="CESL is one of the leading domestic providers of premium field development solutions and Operation & Maintenance services. We collaborate with world-renowned technical partners to deliver exceptional services in deep offshore, swamp, and land locations within the Gulf of Guinea."
          companyDetails="Our comprehensive offerings extend to training and manpower services, community liaison, and logistics support for FPSO operations, catering to various International Oil Companies (IOCs) operating in Sub-Saharan Africa. As part of our strategic vision, CESL is actively expanding its operations beyond the West African Coast."
          contactLink="/contact-us"
        />
      </div>
    </div>
  );
};

export default OurServicesTab;
