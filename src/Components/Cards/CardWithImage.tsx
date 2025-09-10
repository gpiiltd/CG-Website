import React from 'react';
import Icon from '../../assets/SvgImagesAndIcons';
import type { CardITOProps } from '../Interfaces';

const CardWithImage: React.FC<CardITOProps> = ({
  imageName = '',
  title,
  description,
  link,
  width = '617.5px',
  height = '278',
}) => (
  <div
    className="flex gap-4 w-full bg-white rounded-lg shadow-md overflow-hidden p-6"
    style={{ width, height }}
  >
    <Icon type={imageName} className="w-full h-full object-cover rounded-xl" />

    <div className="w-[70%]  flex flex-col justify-center">
      <h2 className="text-[#11092F] text-lg font-semibold">{title}</h2>
      <p className="text-[#3E3E41] my-1">{description}</p>
      <p className="text-[#ED6C30]">{link}</p>
    </div>
  </div>
);

export default CardWithImage;
