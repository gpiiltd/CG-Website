import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Typography } from './Typography';
import { ButtonComponent } from './ButtonComponent';
import manImage from '../assets/svgImages/man.jpg';

const Footer = () => {
  return (
    <>
      {/* Top CTA Section */}
      <div
        className="relative bg-cover bg-center py-20 px-6 text-center flex flex-col justify-center items-center min-h-[400px]"
        style={{ backgroundImage: `url(${manImage})` }}
      >
        {/* Gradient overlay - starts transparent, gets darker towards bottom */}
        {/* Maximum darkness */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black"></div>
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-base uppercase tracking-widest font-bold mb-4 text-[#F9D1BF]">
            LET US BE YOUR STRATEGIC PARTNER
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-8">
            Need Energy Infrastructure <br /> and More?
          </h2>
          <div className="inline-block">
            <Link to="/contact-us">
              {' '}
              <ButtonComponent text="Contact us" bg_color="#ED6C30" />
            </Link>
          </div>
        </div>
      </div>
      <footer className="bg-black text-white">
        <div className="border-b border-gray-800">
          {/* Footer Links */}
          <div className=" px-6 sm:px-12 py-12">
            <div className=" max-w-[95%] mx-auto  grid grid-cols-1 sm:grid-cols-4 gap-10 text-gray-300">
              {/* Discover CG */}
              <div>
                <Typography size="lg" weight="bold" className="mb-4">
                  Discover CG
                </Typography>
                <ul className="space-y-3">
                  <li>
                    <Link to="/our-story" className="hover:text-white">
                      <Typography size="md" weight="normal">
                        Our story
                      </Typography>
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-team" className="hover:text-white">
                      <Typography size="md" weight="light">
                        Our team
                      </Typography>
                    </Link>
                  </li>
                  <li>
                    <Link to="/careers" className="hover:text-white">
                      <Typography size="md" weight="light">
                        Careers
                      </Typography>
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-assets" className="hover:text-white">
                      <Typography size="md" weight="light">
                        Our Assets
                      </Typography>
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact-us" className="hover:text-white"></Link>
                    <Typography size="md" weight="light">
                      Talk to us
                    </Typography>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <Typography size="lg" weight="bold" className="mb-4">
                  Services
                </Typography>
                <ul className="space-y-3">
                  <li>
                    <Link to="/services/offshore-infrastructure" className="hover:text-white">
                      <Typography size="md" weight="light">
                        Offshore infrastructure
                      </Typography>
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/exploration" className="hover:text-white">
                      <Typography size="md" weight="light">
                        Exploration and production
                      </Typography>
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/ports-terminal" className="hover:text-white">
                      <Typography size="md" weight="light">
                        Ports Terminal and Management Services
                      </Typography>
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/natural-gas" className="hover:text-white">
                      <Typography size="md" weight="light">
                        Natural Gas Transmission and Distribution
                      </Typography>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <Typography size="lg" weight="bold" className="mb-4">
                  Legal
                </Typography>
                <ul className="space-y-3">
                  <li>
                    <Link to="/corporate-governance" className="hover:text-white">
                      <Typography size="md" weight="light">
                        Corporate Governance
                      </Typography>
                    </Link>
                  </li>
                  <li>
                    <Link to="/health-safety" className="hover:text-white">
                      <Typography size="md" weight="light">
                        Health & Safety
                      </Typography>
                    </Link>
                  </li>
                  <li>
                    <Link to="/whistle-blowing" className="hover:text-white">
                      <Typography size="md" weight="light">
                        Whistle Blowing
                      </Typography>
                    </Link>
                  </li>
                  <li>
                    <Link to="/anti-money-laundering" className="hover:text-white">
                      <Typography size="md" weight="light">
                        Anti-Money Laundering
                      </Typography>
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms" className="hover:text-white">
                      <Typography size="md" weight="light">
                        Terms & Conditions
                      </Typography>
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy" className="hover:text-white">
                      <Typography size="md" weight="light">
                        Privacy Policy
                      </Typography>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Social Icons */}
              <div className="flex space-x-4 ">
                <a href="#" className="p-2  rounded-full  transition">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="p-2 rounded-full  transition">
                  <FaFacebookF />
                </a>
                <a href="#" className="p-2 rounded-full  transition">
                  <FaTwitter />
                </a>
                <a href="#" className="p-2  rounded-full  transition">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="max-w-[95%] mx-auto px-6 py-4 text-start text-sm text-gray-400">
          © {new Date().getFullYear()} Century Group Energy Services Limited. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
