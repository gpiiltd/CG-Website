import { Typography } from '../../Components/Typography';
import workers2 from '../../assets/svgImages/workers2.svg';
import provenTrackRecord from '../../assets/Proven track record.jpg'
import riskMitigatedInvestment from '../../assets/Risk-mitigated-investment.jpg'
import opitmizedCostEfficiency from '../../assets/Optimized cost efficiency.jpg'

import { ButtonComponent } from '../../Components/ButtonComponent';
import { HoverCard } from '../../Components/HoverCard';
import { Link } from 'react-router-dom';

const WhyCG = () => {
  return (
    <div className="bg-[#0F082B] py-12 w-full">
      {' '}
      {/* <Typography size="3xl" weight="bold" className="mb-8 text-center text-white">
        Why Century Group?
      </Typography> */}
      <h2 className='text-3xl sm:text-5xl font-bold text-center text-white mb-8'>
        Why Century Group?
      </h2>
      <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[90%] mx-auto">
        <HoverCard
          title="Safety"
          description="Aligned with rigorous governance and HSE Policies"
          imageSrc={workers2}
          className="h-72 lg:col-span-1"
        />
        <HoverCard
          title="Optimised cost efficiency"
          description="20+ years of continuous operation with an average of 30% cost savings for clients"
          imageSrc={opitmizedCostEfficiency}
          className="h-72 lg:col-span-2"
        />
        <HoverCard
          title="Proven track record"
          description="Trusted energy partner infrastructure across Nigeria and West Africa"
          imageSrc={provenTrackRecord}
          className="h-72 lg:col-span-2"
        />
        <HoverCard
          title="Risk mitigated investment"
          description="From infrastructure supply to exposure, we reduce exposure"
          imageSrc={riskMitigatedInvestment}
          className="h-72 lg:col-span-1"
        />
      </div>
      <div className="flex flex-col justify-center items-center px-3 md:px-48 py-8">
        <Typography size="lg" weight="normal" className="mb-8 text-center text-balance text-white">
          {/* We fuel your offshore energy ambition by seamlessly integrating world class floater (FPSO,
          FSO, etc) deploying unmatched efficiency, reduced risked and accelerated project delivery.
          Partner with us to navigate complexity with confidence, leveraging unified expertise that
          drive cost-efficient and effective goal attainment in the energy sector. */}
          We power your offshore ambitions by seamlessly delivering world-class energy infrastructure solutions (FPSOs, FSOs and more).
          Partner with us to navigate complex challenges with confidence leveraging our
          integrated expertise to achieve cost-effective, high-impact results in the energy
          sector
        </Typography>
        <div className="inline-block">
          <Link to="/contact-us">
            <ButtonComponent text="Contact us" bg_color="#ED6C30" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhyCG;
