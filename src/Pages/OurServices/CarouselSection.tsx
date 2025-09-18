import { useState, useEffect } from 'react';
import bg_video from '../../assets/videos/CD_video.mp4';
import { Typography } from '../../Components/Typography';
import type { CarouselItem } from '../../Components/Interfaces';

interface CarouselSectionProps {
  data: CarouselItem[];
}

const CarouselSection: React.FC<CarouselSectionProps> = ({ data }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCarouselIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    setIsVideoPlaying(false);
  }, [carouselIndex]);

  return (
    <div className="w-full flex flex-col items-center justify-center py-12 bg-white mt-12">
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 z-10"
          aria-label="Previous"
        >
          <span className="text-3xl font-bold">&larr;</span>
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 z-10"
          aria-label="Next"
        >
          <span className="text-3xl font-bold">&rarr;</span>
        </button>

        {/* Carousel Content */}
        <div className="flex flex-col items-center justify-center">
          <Typography size="sm" weight="bold" className="text-[#ED6C30] uppercase mb-2">
            Our Projects
          </Typography>
          <Typography size="3xl" weight="bold" className="mb-4 text-center text-[#1A1A2C]">
            {data[carouselIndex].title}
          </Typography>
          <Typography size="lg" weight="normal" className="mb-6 text-center text-[#3E3E41]">
            {data[carouselIndex].description}
          </Typography>
          <div className="w-full flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-lg w-full max-w-3xl h-[400px] flex items-center justify-center bg-gray-100 relative">
              {!isVideoPlaying ? (
                <>
                  <img
                    src={data[carouselIndex].image}
                    alt={data[carouselIndex].title}
                    className="object-cover w-full h-full"
                  />
                  {/* Play button overlay */}
                  <button
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-4 shadow-lg"
                    aria-label="Play Video"
                    onClick={() => setIsVideoPlaying(true)}
                  >
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <circle cx="20" cy="20" r="20" fill="#fff" />
                      <polygon points="16,13 28,20 16,27" fill="#ED6C30" />
                    </svg>
                  </button>
                </>
              ) : (
                <video
                  src={bg_video}
                  controls
                  autoPlay
                  className="object-cover w-full h-full"
                  onEnded={() => setIsVideoPlaying(false)}
                />
              )}
            </div>
          </div>
          {/* Carousel Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {data.map((_, idx) => (
              <span
                key={idx}
                className={`w-3 h-3 rounded-full ${
                  idx === carouselIndex ? 'bg-[#ED6C30]' : 'bg-gray-300'
                } inline-block`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselSection;
