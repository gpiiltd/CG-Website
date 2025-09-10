import React from 'react';
import type { CardITOProps } from '../Interfaces';
import Icon from '../../assets/SvgImagesAndIcons';

const CardITO: React.FC<CardITOProps> = ({ title, description }) => {
  return (
    <div className="relative w-80 h-56 rounded-lg overflow-hidden shadow-lg">
      <Icon type="cgLogo" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
        <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
        <p className="text-white text-sm">{description}</p>
      </div>
    </div>
  );
};

export default CardITO;
