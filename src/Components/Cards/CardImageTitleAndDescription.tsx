// CardComponent.tsx
import React from 'react';
import { Typography } from '../Typography';
import LazyImage from '../LazyImage';

interface CardComponentProps {
  imageSrc: string;
  title: string;
  description: string;
  onLearnMoreClick: () => void;
}

const CardImageTitleAndDescription: React.FC<CardComponentProps> = ({
  imageSrc,
  title,
  description,
  onLearnMoreClick,
}) => {
  return (
    <div className="bg-white flex flex-col md:flex-row rounded-lg shadow-md border border-gray-200 overflow-hidden">
      {/* Image Container */}
      <div className="w-full md:w-1/3 lg:w-2/5 flex-shrink-0 py-4 px-3 ">

      <LazyImage src={imageSrc} alt={title} className="w-full h-48 md:h-full object-cover rounded-lg" />

      </div>

      {/* Content Container */}
      <div className="flex-1 p-4 md:p-6 flex flex-col justify-between">
        <div>
          <Typography
            size="2xl"
color='primary'
            className="mb-3 text-start text-lg sm:text-xl md:text-2xl font-bold line-clamp-2"
          >
            {title}
          </Typography>
          <Typography
            size="sm"
            weight="light"
            className="mb-4 text-start text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed line-clamp-3"
          >
            {description}
          </Typography>
        </div>

        {/* Button */}
        <button
          className="cursor-pointer text-start text-sm sm:text-base text-[#ED6C30] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#ED6C30] focus:ring-opacity-50 rounded transition-all duration-200 self-start"
          onClick={onLearnMoreClick}
        >
          Learn more
        </button>
      </div>
    </div>
  );
};

export default CardImageTitleAndDescription;
