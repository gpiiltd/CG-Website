import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from 'react-icons/io5';

interface VideoSliderProps {
  videos: {
    id: string;
    videoUrl: string;
    thumbnail: string;
    title: string;
    description?: string;
  }[];
}

const VideoSlider: React.FC<VideoSliderProps> = ({ videos }) => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

return (
  <div className="relative w-full px-2 md:px-4 lg:px-6">
    {/* Title + Nav */}
    <div className="flex items-center justify-between mb-2 md:mb-4 lg:mb-6">
      <button
        onClick={handlePrev}
        className="p-1 md:p-2 rounded-full hover:bg-gray-300"
      >
        <IoArrowBackCircleOutline className="text-gray-700" size={20}  />
      </button>

      <div className="text-center flex-1 px-1 md:px-2">
        <h2 className="text-base md:text-lg lg:text-2xl xl:text-4xl font-bold text-[#11092F] mb-1 md:mb-2 leading-snug">
          {videos[current].title.toUpperCase()}
        </h2>
        {videos[current].description && (
          <p className="text-xs md:text-sm lg:text-base xl:text-lg text-gray-700 px-1 md:px-2 lg:px-4 xl:px-10">
            {videos[current].description}
          </p>
        )}
      </div>

      <button
        onClick={handleNext}
        className="p-1 md:p-2 rounded-full cursor-pointer hover:bg-gray-300"
      >
        <IoArrowForwardCircleOutline className="text-gray-700" size={20}  />
      </button>
    </div>

    {/* Video slider */}
    <div className="overflow-hidden">
      <div className="flex justify-center">
        <div className="w-full">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className={`relative aspect-video rounded-2xl overflow-hidden shadow-lg ${
                index === current ? 'block' : 'hidden'
              }`}
            >
              <video
                src={video.videoUrl}
                poster={video.thumbnail}
                className="w-full  object-cover"
                controls
              />
              {/* Play overlay (optional) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Play className="w-8 md:w-12 lg:w-16 xl:w-20 h-8 md:h-12 lg:h-16 xl:h-20 text-white opacity-60" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Dots */}
    <div className="flex justify-center mt-2 md:mt-3 lg:mt-4 space-x-1 md:space-x-2 lg:space-x-3">
      {videos.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrent(index)}
          className={`w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 flex items-center justify-center rounded-full border-2 transition ${
            index === current ? 'border-[#ED6C30]' : 'border-gray-300'
          }`}
        >
          <span
            className={`w-2 h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 rounded-full ${
              index === current ? 'bg-[#ED6C30]' : 'bg-gray-300'
            }`}
          />
        </button>
      ))}
    </div>
  </div>
);

};

export default VideoSlider;
