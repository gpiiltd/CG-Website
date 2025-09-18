export interface Video {
  id: string;
  videoUrl: string;
  thumbnail: string;
  title: string;
  description?: string;
}

export interface VideoSliderProps {
  videos: Video[];
  autoPlay?: boolean;
  showControls?: boolean;
  className?: string;
}

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Play } from 'lucide-react';

const VideoSlider: React.FC<VideoSliderProps> = ({ videos }) => {
  if (!videos.length) return null;

 return (
  <div className="relative w-full max-w-6xl mx-auto">
    <div className="flex items-center justify-between gap-4 mb-4">
      {/* Left arrow */}
      <button className="swiper-button-prev text-[#ED6C30] font-bold text-2xl">

      </button>

      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-[#11092F] mb-2">
          {videos[0].title.toUpperCase()}
        </h2>
        {videos[0].description && (
          <p className="text-base md:text-lg text-gray-700 px-2 md:px-10">
            {videos[0].description}
          </p>
        )}
      </div>

      {/* Right arrow */}
      <button className="swiper-button-next text-[#ED6C30] font-bold text-2xl">
        →
      </button>
    </div>

    <Swiper
      modules={[Navigation]}
      spaceBetween={30}
      slidesPerView={1.2}
      centeredSlides={true}
      loop={true}
      navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }}
      className="w-full"
    >
      {videos.map((video, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center">
            {/* Video/Thumbnail Container */}
            <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-lg">
              <video
                src={video.videoUrl}
                poster={video.thumbnail}
                className="w-full h-full object-cover"
                controls
                muted
                playsInline
              />

              {/* Overlay play icon */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Play className="w-20 h-20 text-white opacity-50" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);
};

export default VideoSlider;
