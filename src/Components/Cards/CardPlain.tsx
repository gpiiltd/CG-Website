import React from 'react';
import Icon from '../../assets/SvgImagesAndIcons';
import type { CardITOProps } from '../Interfaces';

const CardPlain: React.FC<CardITOProps> = ({
  imageName = '',
  title,
  description,
  width = '400px',
  height = '272',
}) => (
  <div
    className="flex w-full bg-white rounded-lg shadow-md overflow-hidden p-6"
    style={{ width, height }}
  >
    <div className="flex flex-col justify-center">
      <Icon type={imageName} className="w-10 h-10 object-cover rounded-xl" />
      <h2 className="text-[#11092F] text-lg font-semibold my-4">{title}</h2>
      <p className="text-[#3E3E41]">{description}</p>
    </div>
  </div>
);

export default CardPlain;
