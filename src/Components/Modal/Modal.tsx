import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import type { Modalprops } from '../Interfaces';

const CustomModal: React.FC<Modalprops> = ({
  isOpen,
  onClose,
  children,
  width = '70%',
  height = '90%',
}) => {
  if (!isOpen) return null;
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-40 ${
        isOpen ? 'block' : 'hidden'
      }`}
      style={{
        background: 'rgba(0,0,0,0.55)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
      onClick={onClose}
    >
      <div
        className={'bg-white rounded-lg shadow-lg overflow-y-auto'}
        style={{ width, height }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end mr-4 mt-4">
          <button className="text-gray-400 hover:text-gray-600 cursor-pointer" onClick={onClose}>
            <MdOutlineCancel color="#5E5959" size={26} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default CustomModal;
