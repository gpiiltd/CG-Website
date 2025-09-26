import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/svgImages/cg-logo.svg';
import { ButtonComponent } from './ButtonComponent';
import { Typography } from './Typography';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

const isActive = (path: string) => {
  const currentPath = location.pathname;

  // Exact match for home page to avoid matching everything
  if (path === '/') {
    return currentPath === '/';
  }

  // For all other routes, check if current path starts with the route
  return currentPath.startsWith(path);
};
  return (
    <nav className="sticky top-0 z-50 bg-white w-full shadow-sm">
      <div className="px-3 sm:px-4 lg:px-6 max-w-[95%] mx-auto flex items-center justify-between py-3">
        <Link to="/" className="flex cursor-pointer">
          <img src={logo} alt="logo" />
        </Link>
        <GiHamburgerMenu
          onClick={() => setIsOpen(true)}
          size={30}
          color="#11092F"
          className="lg:hidden cursor-pointer"
        />
        <div className="hidden lg:flex items-center space-x-8 xl:space-x-10">
          <Link to="/">
            <Typography
              size="md"
              weight="normal"
              className={`cursor-pointer duration-300 ease-in-out text-[#3E3E41] ${
                isActive('/') ? 'text-[#ED6C30]' : 'hover:text-[#ED6C30]'
              }`}
            >
              Home
            </Typography>
          </Link>
          <Link to="/discover-century-group">
            <Typography
              size="md"
              weight="normal"
              className={`cursor-pointer duration-300 ease-in-out text-[#3E3E41] ${
                isActive('/discover-century-group') ? 'text-[#ED6C30]' : 'hover:text-[#ED6C30]'
              }`}
            >
              Discover Century Group
            </Typography>
          </Link>
          <Link to="/services">
            <Typography
              size="md"
              weight="normal"
              className={`cursor-pointer duration-300 ease-in-out text-[#3E3E41] ${
                isActive('/services') ? 'text-[#ED6C30]' : 'hover:text-[#ED6C30]'
              }`}
            >
              Services
            </Typography>
          </Link>
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <Link to="/contact-us">
              <ButtonComponent text="Contact us" bg_color="#ED6C30" expandOnHover={false}/>
            </Link>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden fixed inset-0 bg-white z-50 flex flex-col">
            <div className="flex justify-between  p-4">
              <Link to="/" className="flex">
                <img src={logo} alt="logo" />
              </Link>
              <IoMdCloseCircleOutline
                onClick={() => setIsOpen(false)}
                color="#575757"
                size={40}
                className="cursor-pointer"
              />
            </div>

            <div className="flex flex-col items-center pt-18 flex-1 space-y-12">
              <Link to="/" onClick={() => setIsOpen(false)}>
                <Typography
                  size="md"
                  weight="normal"
                  className={`cursor-pointer duration-300 ease-in-out text-[#3E3E41] ${
                    isActive('/') ? 'text-[#ED6C30]' : 'hover:text-[#ED6C30]'
                  }`}
                >
                  Home
                </Typography>
              </Link>

              <Link to="/discover-century-group" onClick={() => setIsOpen(false)}>
                <Typography
                  size="md"
                  weight="normal"
                  className={`cursor-pointer duration-300 ease-in-out text-[#3E3E41] ${
                    isActive('/discover-century-group') ? 'text-[#ED6C30]' : 'hover:text-[#ED6C30]'
                  }`}
                >
                  Discover Century Group
                </Typography>
              </Link>

              <Link to="/services" onClick={() => setIsOpen(false)}>
                <Typography
                  size="md"
                  weight="normal"
                  className={`cursor-pointer duration-300 ease-in-out text-[#3E3E41] ${
                    isActive('/services') ? 'text-[#ED6C30]' : 'hover:text-[#ED6C30]'
                  }`}
                >
                  Services
                </Typography>
              </Link>

              <Link to="/contact-us" onClick={() => setIsOpen(false)}>
                <ButtonComponent text="Contact us" bg_color="#ED6C30" />
              </Link>
            </div>

            <div className="flex justify-center items-center gap-12 pb-18">
              <Link to="/governance" onClick={() => setIsOpen(false)}>
                <Typography
                  size="md"
                  weight="semibold"
                  className={`cursor-pointer duration-300 ease-in-out text-[#878787] ${
                    isActive('/governance') ? 'text-[#ED6C30]' : 'hover:text-[#ED6C30]'
                  }`}
                >
                  Governance
                </Typography>
              </Link>
              <Link to="/legal" onClick={() => setIsOpen(false)}>
                <Typography
                  size="md"
                  weight="semibold"
                  className={`cursor-pointer duration-300 ease-in-out text-[#878787] ${
                    isActive('/legal') ? 'text-[#ED6C30]' : 'hover:text-[#ED6C30]'
                  }`}
                >
                  Legal
                </Typography>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
