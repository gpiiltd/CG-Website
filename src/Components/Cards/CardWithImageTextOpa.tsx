import React from 'react';
import type { CardITOProps } from '../Interfaces';
import Icon from '../../assets/SvgImagesAndIcons';

const CardImageTextOpa: React.FC<CardITOProps> = ({
  imageName = '',
  imageSrc, // ✅ new prop for normal images
  title,
  description,
  width = '',
  height = '',
}) => {
 return (
  <div
    className="relative rounded-lg overflow-hidden shadow-lg group transition-opacity duration-300 ease-in-out"
    style={{ width, height }}
  >
    {/* Image */}
    <div className="w-full ">
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={title}
  className="w-full object-cover" // removed h-full
        />
      ) : (
        <Icon type={imageName} className="w-full h-full object-cover" />
      )}
    </div>

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 ease-in-out"></div>

    {/* Text */}
    <div className="absolute inset-0 flex flex-col justify-end p-4">
      <div className="flex flex-col">
        <h3 className="text-white text-xl font-bold mb-2 transition-all duration-300 ease-in-out">
          {title}
        </h3>
        <p className="text-white text-sm font-semibold opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 overflow-hidden transition-all duration-300 ease-in-out">
          {description}
        </p>
      </div>
    </div>
  </div>
);

};

export default CardImageTextOpa;
