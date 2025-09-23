import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

interface Image {
  src: string;
  alt: string;
}

interface ImageSliderProps {
  images: Image[];
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={5}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      loop={true}
      breakpoints={{
        320: { slidesPerView: 1 },
        480: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
        1280: { slidesPerView: 5 },
      }}
      className="w-full"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="flex justify-center">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-40 object-contain"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
