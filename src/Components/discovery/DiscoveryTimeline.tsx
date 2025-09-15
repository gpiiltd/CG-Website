import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import disShipBig from '../../assets/svgImages/disShipBig.svg';
import Icon from '../../assets/SvgImagesAndIcons';
import { Typography } from '../Typography';

const years = [
  {
    year: 2003,
    milestones: [
      'Entered a partnership with the Niger-Delta Amnesty program to train and engage manpower.',
      'Secured a 15 years License to operate the Kidney Island Logistics base on behalf of SPDC.',
      'Secured an Engineering, Technical Manpower and Logistic services contract for Ebok MOPU & FSO.',
    ],
  },
  {
    year: 2008,
    milestones: [
      'Expanded operations to additional fields.',
      'Launched new logistics initiatives.',
    ],
  },
  { year: 2011, milestones: ['Started FPSO projects with faster commissioning.'] },
  { year: 2015, milestones: ['Started FPSO projects with faster commissioning.'] },
  { year: 2020, milestones: ['Started FPSO projects with faster commissioning.'] },
  { year: 2025, milestones: ['Started FPSO projects with faster commissioning.'] },
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
                    i === activeIndex ? 'font-bold' : 'font-light'
                  } ${i === activeIndex ? 'text-orange-500' : 'text-gray-400'}`}
                >
                  <span>{item.year}</span>
                  {i === activeIndex ? (
                    <Icon type="dotted" className="text-orange-500 mt-1 " />
                  ) : (
                    <Icon type="dull" className="text-gray-400 mt-1 " />
                  )}
                </button>
                {i < years.length - 1 && <span className="mx-2 text-gray-400 select-none">—</span>}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-[7%] flex flex-col-reverse md:flex-row gap-6 mt-6">
        <div className="w-full">
          <img
            src={disShipBig}
            alt="Timeline Illustration"
            className="rounded-xl object-cover w-full h-full"
          />
        </div>

        <div className="bg-white w-full">
          <div className="flex justify-between items-center mb-12">
            <Typography weight="semibold" className="text-orange-500 font-semibold text-3xl">
              {activeYear.year}
              {activeYear.year !== 2025 && ' - ' + (activeYear.year + 4)}
            </Typography>
            <div className="flex gap-2">
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
            </div>
          </div>

          {/* Milestones */}
          <div className="mt-4 space-y-4">
            {activeYear.milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl border border-gray-200"
              >
                <Icon type="checks" className="text-gray-400 mt-1 h-20 md:h-10" />
                <p className="text-gray-700 text-sm leading-relaxed">{milestone}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
