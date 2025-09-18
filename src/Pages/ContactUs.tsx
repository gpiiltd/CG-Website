import React from 'react';
import man from '../assets/svgImages/man_standing.svg';
import { ButtonComponent } from '../Components/ButtonComponent';
import { Typography } from '../Components/Typography';
import AnimatedScreen from '../Components/Animations';

const ContactUs: React.FC = () => {
  return (
    <AnimatedScreen>

    <div className="bg-white">
      {/* Top section */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left image */}
        <div>
          <img
            src={man}
            alt="Oil rig worker"
            className="rounded-lg shadow-lg object-cover w-full  h-[600px]"
          />
        </div>

        {/* Right form */}
        <div>
          <h2 className="text-3xl font-bold text-[#1D0C3D] mb-2">Send Us A Message</h2>
          <p className="text-gray-600 mb-6">We hope to hear from you soon!</p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <Typography size="md" weight="normal" color="primary" className='mb-2'>
                  First name
                </Typography>
                <input
                  type="text"
                  placeholder="Enter first Name"
                  className="border border-gray-300 rounded-md px-4 py-2 w-full
               focus:outline-none focus:ring-2 focus:ring-orange-500
               text-gray-900 placeholder-gray-400"
                />
              </div>

              <div>
                <Typography size="md" weight="normal" color="primary" className='mb-2'>
                  Last name
                </Typography>
                <input
                  type="text"
                  placeholder="Enter last name"
                  className="border border-gray-300 rounded-md px-4 py-2 w-full
               focus:outline-none focus:ring-2 focus:ring-orange-500
               text-gray-900 placeholder-gray-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Typography size="md" weight="normal" color="primary" className='mb-2'>
                  Email
                </Typography>
                <input
                  type="text"
                  placeholder="Enter email"
                  className="border border-gray-300 rounded-md px-4 py-2 w-full
               focus:outline-none focus:ring-2 focus:ring-orange-500
               text-gray-900 placeholder-gray-400"
                />
              </div>
              <div>
                <Typography size="md" weight="normal" color="primary" className='mb-2'>
                  Phone Number
                </Typography>
                <input
                  type="text"
                  placeholder="Enter phone number"
                  className="border border-gray-300 rounded-md px-4 py-2 w-full
               focus:outline-none focus:ring-2 focus:ring-orange-500
               text-gray-900 placeholder-gray-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Typography size="md" weight="normal" color="primary" className='mb-2'>
                  Role/Position
                </Typography>
                <input
                  type="text"
                  placeholder="Enter Role/Position"
                  className="border border-gray-300 rounded-md px-4 py-2 w-full
               focus:outline-none focus:ring-2 focus:ring-orange-500
               text-gray-900 placeholder-gray-400"
                />
              </div>
              <div>
                <Typography size="md" weight="normal" color="primary" className='mb-2'>
                  Company/Organisation
                </Typography>
                <input
                  type="text"
                  placeholder="Enter Company/Organisation"
                  className="border border-gray-300 rounded-md px-4 py-2 w-full
               focus:outline-none focus:ring-2 focus:ring-orange-500
               text-gray-900 placeholder-gray-400"
                />
              </div>
            </div>

            <div>
                <Typography size="md" weight="normal" color="primary" className='mb-2'>
                Message
              </Typography>
              <textarea
                placeholder="Type message"
                rows={4}
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
            </div>

            <ButtonComponent text="Send a message" bg_color="#ED6C30" />
          </form>
        </div>
      </div>

      {/* Bottom section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-center text-[#1D0C3D] mb-10">
            More Ways To Contact Us
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Address */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#1D0C3D] text-white rounded-full">
                  📍
                </div>
              </div>
              <h4 className="font-semibold text-lg mb-2">Address</h4>
              <p className="text-gray-600 text-sm">
                Ibukun House Block 105, No 8 Baderinwa Alabi Street, Lekki Phase 1, Lagos
              </p>
            </div>

            {/* Phone */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#1D0C3D] text-white rounded-full">
                  📞
                </div>
              </div>
              <h4 className="font-semibold text-lg mb-2">Phone numbers</h4>
              <p className="text-gray-600 text-sm">+2342017009825</p>
              <p className="text-gray-600 text-sm">+2342017009826</p>
            </div>

            {/* Email */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#1D0C3D] text-white rounded-full">
                  📧
                </div>
              </div>
              <h4 className="font-semibold text-lg mb-2">Email address</h4>
              <p className="text-gray-600 text-sm">enquiries@ceslintgroup.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </AnimatedScreen>

  );
};

export default ContactUs;
