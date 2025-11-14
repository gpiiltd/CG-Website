import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Typography } from '../Typography';
import LazyImage from '../LazyImage';
import { FaRegCircleDot } from 'react-icons/fa6';
import { FaRegCheckCircle } from 'react-icons/fa';

interface TimelineYear {
  year: number;
  milestones: string[];
}

interface TimelineProps {
  years: TimelineYear[];
  image: string;
}

export default function Timeline({ years, image }: TimelineProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeYear = years[activeIndex];
  const scrollRef = useRef<HTMLDivElement>(null);

  // Get current year for the timeline
  const currentYear = new Date().getFullYear();

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

  if (!years || years.length === 0) {
    return <div>No timeline data available</div>;
  }

  return (
    <div className="w-full px-4">
      <div className="h-15 md:w-[85%] w-[85%] mb-24 m-auto text-center rounded-xl">
        <div className="overflow-x-auto scrollbar-hide" ref={scrollRef}>
          <div className="flex justify-start md:justify-center items-center gap-4 mt-6 min-w-max">
            {years.map((item, i) => (
              <div key={item.year} className="flex items-center">
                <button
                  id={`year-${i}`}
                  onClick={() => setActiveIndex(i)}
                  className={`relative flex flex-col items-center text-md ${
                    i <= activeIndex ? 'font-bold text-orange-500' : 'font- text-gray-400'
                  }`}
                >
                  <span>
                    {i === years.length - 1 && item.year < currentYear ? `${item.year}` : item.year}
                  </span>
                  {i <= activeIndex ? (
                    <FaRegCircleDot className="text-orange-500 mt-1 h-6 w-6" />
                  ) : (
                    <FaRegCircleDot className="text-gray-400 mt-1 h-6 w-6" />
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
        <div className="w-full md:w-1/2 h-[400px] md:h-[500px]">
          <LazyImage
            src={image ?? ''}
            alt="Timeline Illustration"
            className="rounded-xl object-cover w-full h-full"
          />
        </div>

        <div className="bg-white w-full md:h-[500px] flex flex-col">
          <div className="flex justify-between items-center mb-12">
            <Typography weight="semibold" className="text-orange-500 font-semibold text-3xl">
              {activeIndex < years.length - 1
                ? `${activeYear.year} - ${years[activeIndex + 1].year}`
                : `${activeYear.year} - ${currentYear}`}{' '}
            </Typography>

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
          <div className="flex-1 overflow-y-auto px-4 pb-4">
            <div className="space-y-4">
              {activeYear.milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl border border-gray-200"
                >
                  <div className="flex-shrink-0">
                    <FaRegCheckCircle className="text-gray-400 w-6 h-6" />
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
