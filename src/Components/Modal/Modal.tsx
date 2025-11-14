import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import type { Modalprops } from '../Interfaces';

const CustomModal: React.FC<Modalprops> = ({
  isOpen,
  onClose,
  children,
  width = "80%",
}) => {
  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[1000] flex items-center justify-center px-4 sm:px-6 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      } transition-opacity duration-300`}
      style={{
        background: "rgba(0,0,0,0.55)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl relative w-full overflow-hidden flex flex-col"
        style={{
          maxWidth: width,
          maxHeight: "90vh",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <MdOutlineCancel size={26} />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto px-2 sm:px-4 pb-6">
          {children}
        </div>
      </div>
    </div>
  );
};


export default CustomModal;
