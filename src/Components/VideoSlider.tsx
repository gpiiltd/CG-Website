import React, { useState } from 'react';
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from 'react-icons/io5';
import { FaRegCirclePlay } from 'react-icons/fa6';

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
    <div className="relative w-full">
      {/* Title + Nav */}
      <div className="max-w-[90%] mx-auto">
        <div className="text-center">
          <div className="flex items-center justify-between mb-1 md:mb-2 lg:mb-3">
            <button onClick={handlePrev} className="p-1 md:p-2 rounded-full hover:bg-gray-300">
              <IoArrowBackCircleOutline className="text-gray-700" size={30} />
            </button>

            <h2 className="text-base md:text-lg lg:text-2xl xl:text-4xl font-bold text-[#11092F] mb-1 md:mb-2 leading-snug">
              {videos[current].title.toUpperCase()}
            </h2>

            <button
              onClick={handleNext}
              className="p-1 md:p-2 rounded-full cursor-pointer hover:bg-gray-300"
            >
              <IoArrowForwardCircleOutline className="text-gray-700" size={30} />
            </button>
          </div>

          {videos[current].description && (
            <p className="max-w-[700px] mx-auto text-center text-xs md:text-sm text-gray-700 pt-4 pb-5 lg:pt-0 lg:pb-7">
              {videos[current].description}
            </p>
          )}
        </div>

        {/* Video slider */}
        <div className="overflow-hidden">
          <div className="flex justify-center">
            <div className="w-full">
              {videos.map((video, index) => (
                <div
                  key={video.id}
                  className={`relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[579px] rounded-2xl overflow-hidden ${
                    index === current ? 'block' : 'hidden'
                  }`}
                >
                  <video
                    src={video.videoUrl}
                    poster={video.thumbnail}
                    className="absolute inset-0 w-full h-full object-cover"
                    controls
                  />
                  {/* Play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FaRegCirclePlay
                      className="text-white cursor-pointer z-10"
                      size={50}
                      onClick={() => {
                        const videoElement = document.getElementById(
                          `video-${video.id}`
                        ) as HTMLVideoElement;
                        if (videoElement.paused) {
                          videoElement.play();
                        } else {
                          videoElement.pause();
                        }
                      }}
                    />
                  </div>

                  <video
                    id={`video-${video.id}`}
                    src={video.videoUrl}
                    poster={video.thumbnail}
                    className="absolute inset-0 w-full h-full object-cover"
                    controls
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-5 space-x-2">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`cursor-pointer w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 flex items-center justify-center rounded-full border-2 transition ${
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
    </div>
  );
};

export default VideoSlider;
