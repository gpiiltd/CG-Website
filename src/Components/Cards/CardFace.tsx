import React from 'react';
// import Icon from '../../assets/SvgImagesAndIcons';
import type { CardITOProps } from '../Interfaces';
import LazyImage from '../LazyImage';

const CardFace: React.FC<CardITOProps> = ({
  imageName = '',
  description,
  width = '260px',
  height = '295px',
  faceName = '',
  role = '',
}) => (
  <div className="relative  group cursor-pointer" style={{ width, height }}>
    {/* front */}
    <div className="absolute inset-0 transition-all duration-500 ease-in-out z-20 group-hover:opacity-0">
      <div className="w-full h-full rounded-[48px] relative">
        {/* <Icon type={imageName} className="w-full h-full object-cover rounded-xl" /> */}
        <LazyImage
          src={imageName}
          alt="Director 1"
          className="w-full h-full object-cover rounded-xl"
        />

        <div className="absolute left-0 bottom-[-20px] w-[90%] bg-[#FCEEEA] rounded-tr-[24px] shadow-md py-4 px-4 flex flex-col ">
          <span className="text-[#ED6C30] font-semibold text-lg">{faceName}</span>
          <span className="text-[#3E3E41] text-md mt-1">{role}</span>
        </div>
      </div>
    </div>

    {/* back */}
    <div className="absolute inset-0 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 z-30">
      <div className="bg-[#ED6C30] w-full h-full rounded-2xl flex flex-col justify-center items-center px-8 text-center relative">
        <p className="text-white text-sm font-normal mb-4">{description}</p>
        <a href="#" className="text-white underline font-semibold text-sm mb-8">
          Learn more
        </a>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-48px] w-[90%] bg-white rounded-t-[24px] shadow-md py-4 px-4 flex flex-col items-center">
          <span className="text-[#11092F] font-semibold text-xl">{faceName}</span>
          <span className="text-[#3E3E41] text-md mt-1">{role}</span>
        </div>
      </div>
    </div>
  </div>
);

export default CardFace;
