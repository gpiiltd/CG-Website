import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import disShipBig from '../../assets/svgImages/disShipBig.svg';
import Icon from '../../assets/SvgImagesAndIcons';
import { Typography } from '../Typography';
import LazyImage from '../LazyImage';

const years = [
  {
    year: 2003,
    milestones: [
      'Supported Dresser Rand in the operation and maintenance of the Eku flowstation, OBNAGG, SPDC PEB facilities, SOKU booster station, Nun-River flowstation, Izonbe flowstation, Osa platform. Entered a JV with Bumi Armada to provide EPCI, O&M of FPSO, FSO, EPS.',
      'Mobilization, Installation, Operation and maintenance of the FPSO Armada Perkassa for Okoro-Setu field development on behalf of Afren/Amni',
      'Integration of a robust and effective security network across the Niger- Delta',
      'Strategic intervention that saved Chevron/Conoil JV a revenue loss of over $985m accrued from shut-in of the Pennington terminal.',
      'EPCI, O & M of Armada Perdana FPSO of the FPSO Armada Perdana for Oyo field development on behalf of CAMAC/ENI',
      'Acquisition of the first CESL wholly owned offshore support vessel- Akassa Supporter line handling tug',
      'Engineering services and project management support for the repairs of SPDC-owned offloading buoy in Bonny.',
    ],
  },
  {
    year: 2008,
    milestones: [
      'Entered a partnership with the Niger-Delta Amnesty program to train and engage the active manpower available from the Amnesty program',
      'Secured a 15 years License to Operate the Kidney Island Logistics base on behalf of SPDC',
      'Secured an Engineering, Technical Manpower and Logistics support services contract for Ebok MOPU & FSO for Ebok field development on behalf of Afren and Oriental',
      'Technical Services, O & M of the FPSO Mystras (OML 119) on a 3+1 contract term on behalf of NPDC',
      'Technical Services, O & M of the Okpoho production platform (OML 119) on behalf of NPDC',
      'Technical Services, O & M of OML 42 facilities on behalf of NPDC (the biggest asset divested by SPDC in 2011- 7 flowstations -production operations from BATAN flowstation',
      'Expansion of our in-country vessels fleet to offer marine support services for our diverse clients',
      'Acquisition of the busy bee oil tanker (renamed Principe Trader)',
      'Initiated discussion with Bayelsa Oil Company and Bayelsa state government for a farm-in agreement for development of the state-owned marginal field (Atala field)',
      'Signed the Joint Operating Agreement (JOA) for 29% economic interest and 80% working interest in ATALA field development',
    ],
  },
  {
    year: 2011,
    milestones: [
      'Partnered with PTT Public company Limited (Thailand National Oil Company) to lift and export 30,000bbls/day of crude on behalf of NNPC',
      'Secured a Technical Services, O & M contract for OML 40 facilities on behalf of NPDC (the only asset not producing during SPDC divestment',
      'Secured a term contract from NNPC to lift Oso Condensates and Natural Gas Liquids (NGLs)',
      'Secured a one-year term contract from NPDC to lift and trade 30,000bbls/day of crude',
      'Successful re-entry of Atala-1 well and commencement of production from Atala field',
      'Commissioned and commencement of production from Odidi flowstation located in OML 42',
      'Aggressively drove diverse Gas Utilization & commercialization solutions, including the “GAS-TO-POWER INITIATIVE”',
      'Secured a Gas Purchase Order from the GACN to acquire gas from SPDC for power generation projects.',
      'Secured a domestic gas distribution deal with NLNG for 500,000 metric tons of liquefied natural gas per annum.',
      'Initiated and completed the purchase of 3 FPSOs – FPSO TAMARA TOKONI, NANAYE & ELMINA.',
      'Designed and executed an alternative Crude Export Solution that made the resumption of operations at the Forcados Export Terminal on behalf of SHELL.',
      'Facilitated the storage and export of the maiden cargo of the Obodo crude blend on behalf of ConOil.',
    ],
  },
  {
    year: 2015,
    milestones: [
      'Partnered with PTT Public company Limited (Thailand National Oil Company) to lift and export 30,000bbls/day of crude on behalf of NNPC',
      'Secured a Technical Services, O & M contract for OML 40 facilities on behalf of NPDC (the only asset not producing during SPDC divestment',
      'Secured a term contract from NNPC to lift Oso Condensates and Natural Gas Liquids (NGLs)',
      'Secured a one-year term contract from NPDC to lift and trade 30,000bbls/day of crude',
      'Successful re-entry of Atala-1 well and commencement of production from Atala field',
      'Commissioned and commencement of production from Odidi flowstation located in OML 42',
      'Aggressively drove diverse Gas Utilization & commercialization solutions, including the “GAS-TO-POWER INITIATIVE”',
      'Secured a Gas Purchase Order from the GACN to acquire gas from SPDC for power generation projects.',
      'Secured a domestic gas distribution deal with NLNG for 500,000 metric tons of liquefied natural gas per annum.',
      'Initiated and completed the purchase of 3 FPSOs – FPSO TAMARA TOKONI, NANAYE & ELMINA.',
      'Designed and executed an alternative Crude Export Solution that made the resumption of operations at the Forcados Export Terminal on behalf of SHELL.',
      'Facilitated the storage and export of the maiden cargo of the Obodo crude blend on behalf of ConOil.',
    ],
  },
  {
    year: 2020,
    milestones: [
      'Partnered with PTT Public company Limited (Thailand National Oil Company) to lift and export 30,000bbls/day of crude on behalf of NNPC',
      'Secured a Technical Services, O & M contract for OML 40 facilities on behalf of NPDC (the only asset not producing during SPDC divestment',
      'Secured a term contract from NNPC to lift Oso Condensates and Natural Gas Liquids (NGLs)',
      'Secured a one-year term contract from NPDC to lift and trade 30,000bbls/day of crude',
      'Successful re-entry of Atala-1 well and commencement of production from Atala field',
      'Commissioned and commencement of production from Odidi flowstation located in OML 42',
      'Aggressively drove diverse Gas Utilization & commercialization solutions, including the “GAS-TO-POWER INITIATIVE”',
      'Secured a Gas Purchase Order from the GACN to acquire gas from SPDC for power generation projects.',
      'Secured a domestic gas distribution deal with NLNG for 500,000 metric tons of liquefied natural gas per annum.',
      'Initiated and completed the purchase of 3 FPSOs – FPSO TAMARA TOKONI, NANAYE & ELMINA.',
      'Designed and executed an alternative Crude Export Solution that made the resumption of operations at the Forcados Export Terminal on behalf of SHELL.',
      'Facilitated the storage and export of the maiden cargo of the Obodo crude blend on behalf of ConOil.',
    ],
  },
  {
    year: 2025,
    milestones: [
      'Partnered with PTT Public company Limited (Thailand National Oil Company) to lift and export 30,000bbls/day of crude on behalf of NNPC',
      'Secured a Technical Services, O & M contract for OML 40 facilities on behalf of NPDC (the only asset not producing during SPDC divestment',
      'Secured a term contract from NNPC to lift Oso Condensates and Natural Gas Liquids (NGLs)',
      'Secured a one-year term contract from NPDC to lift and trade 30,000bbls/day of crude',
      'Successful re-entry of Atala-1 well and commencement of production from Atala field',
      'Commissioned and commencement of production from Odidi flowstation located in OML 42',
      'Aggressively drove diverse Gas Utilization & commercialization solutions, including the “GAS-TO-POWER INITIATIVE”',
      'Secured a Gas Purchase Order from the GACN to acquire gas from SPDC for power generation projects.',
      'Secured a domestic gas distribution deal with NLNG for 500,000 metric tons of liquefied natural gas per annum.',
      'Initiated and completed the purchase of 3 FPSOs – FPSO TAMARA TOKONI, NANAYE & ELMINA.',
      'Designed and executed an alternative Crude Export Solution that made the resumption of operations at the Forcados Export Terminal on behalf of SHELL.',
      'Facilitated the storage and export of the maiden cargo of the Obodo crude blend on behalf of ConOil.',
    ],
  },
];

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeYear = years[activeIndex];
  const scrollRef = useRef<HTMLDivElement>(null);

  const goPrev = () => setActiveIndex((prev) => Math.max(prev - 1, 0));
  const goNext = () => setActiveIndex((prev) => Math.min(prev + 1, years.length - 1));

  useEffect(() => {
    if (scrollRef.current) {
      const activeButton = scrollRef.current.querySelector(`#year-${activeIndex}`);
      if (activeButton) {
        activeButton.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest',
        });
      }
    }
  }, [activeIndex]);

  return (
    <div className="w-full px-4">
      <div className="h-15 md:w-[85%] w-[85%] mb-24 m-auto text-center rounded-xl">
        <div className="overflow-x-auto scrollbar-hide" ref={scrollRef}>
          <div className="flex justify-start md:justify-center items-center gap-4 mt-6 min-w-max">
     {years.map((item, i) => (
              <div key={item.year} className="flex items-center">
                {/* Year Button */}
                <button
                  id={`year-${i}`}
                  onClick={() => setActiveIndex(i)}
                 className={`relative flex flex-col items-center text-md ${
  i <= activeIndex ? 'font-bold text-orange-500' : 'font-light text-gray-400'
}`}
                >
                  <span>{item.year}</span>
                  {i === activeIndex ? (
                    <Icon type="dotted" className="text-orange-500 mt-1 " />
                  ) : (
                    <Icon type="dull" className="text-gray-400 mt-1 " />
                  )}
                </button>


                {i < years.length - 1 && (
                  <div className="flex items-center mx-2">
                    <div className="w-3 h-[2px] bg-gray-300 mx-1" /> {/* line */}
                    <div className="w-2 h-2 bg-gray-300 rounded-full" /> {/* dot */}
                    <div className="w-3 h-[2px] bg-gray-300 mx-1" /> {/* line */}
                    <div className="w-2 h-2 bg-gray-300 rounded-full" /> {/* dot */}
                    <div className="w-3 h-[2px] bg-gray-300 mx-1" /> {/* line */}
                    <div className="w-2 h-2 bg-gray-300 rounded-full" /> {/* dot */}
                    <div className="w-3 h-[2px] bg-gray-300 mx-1" /> {/* line */}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-[7%] flex flex-col-reverse md:flex-row gap-6 mt-6">
        {/* Image Container - Fixed height */}
        <div className="w-full md:w-1/2 h-[400px] md:h-[500px]">
          <LazyImage
            src={disShipBig}
            alt="Timeline Illustration"
            className="rounded-xl object-cover w-full h-full"
          />
        </div>

        {/* Content Container - Same height with scrollable content */}
        <div className="bg-white w-full md:w-1/2 h-[400px] md:h-[500px] flex flex-col">
          <div className="flex justify-between items-center mb-6 px-4 pt-4 flex-shrink-0">
            <Typography weight="semibold" className="text-orange-500 font-semibold text-3xl">
              {activeYear.year}
              {activeYear.year !== 2025 && ' - ' + (activeYear.year + 4)}
            </Typography>
            {/* <div className="flex gap-2">
              <button
                onClick={goPrev}
                disabled={activeIndex === 0}
                className="p-2 border-1 rounded-full text-orange-500 opacity-30 disabled:opacity-50 cursor-pointer"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={goNext}
                disabled={activeIndex === years.length - 1}
                className="p-2 border-2 border-orange-500 rounded-full text-orange-500 disabled:opacity-50 cursor-pointer"
              >
                <ChevronRight size={20} />
              </button>
            </div> */}
<div className="flex gap-2">
  <button
    onClick={goPrev}
    disabled={activeIndex === 0}
    className={`p-2 rounded-full transition-all duration-200 ${
      activeIndex === 0
        ? 'border-1 border-gray-300 text-gray-300 cursor-not-allowed opacity-50'
        : 'border-2 border-orange-500 text-orange-500 hover:bg-orange-50 cursor-pointer'
    }`}
  >
    <ChevronLeft size={20} />
  </button>
  <button
    onClick={goNext}
    disabled={activeIndex === years.length - 1}
    className={`p-2 rounded-full transition-all duration-200 ${
      activeIndex === years.length - 1
        ? 'border-1 border-gray-300 text-gray-300 cursor-not-allowed opacity-50'
        : 'border-2 border-orange-500 text-orange-500 hover:bg-orange-50 cursor-pointer'
    }`}
  >
    <ChevronRight size={20} />
  </button>
</div>
          </div>

          {/* Scrollable Milestones */}
          <div className="flex-1 overflow-y-auto px-4 pb-4">
            <div className="space-y-4">
              {activeYear.milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl border border-gray-200"
                >
                  {/* Fixed icon with flex-shrink-0 */}
                  <div className="flex-shrink-0">
                    <Icon type="checks" className="text-gray-400 w-6 h-6" />
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed flex-1">{milestone}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
