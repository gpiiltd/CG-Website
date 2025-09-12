import React from 'react';
import type { CardITOProps } from '../Interfaces';
import Icon from '../../assets/SvgImagesAndIcons';

const CardImageTextOpa: React.FC<CardITOProps> = ({
  imageName = '',
  title,
  description,
  width = '302px',
  height = '211px',
}) => {
  return (
    <div
      className="relative rounded-lg overflow-hidden shadow-lg group transition-opacity duration-300 ease-in-out"
      style={{ width, height }}
    >
      <div className="w-full h-full transition-opacity duration-300 ease-in-out group-hover:opacity-90">
        <Icon type={imageName} className="w-full h-full object-cover" />
      </div>
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
