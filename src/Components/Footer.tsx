import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Typography } from './Typography';
import { ButtonComponent } from './ButtonComponent';
import manImage from '../assets/svgImages/man.jpg';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <>
      <div
        className="relative bg-cover bg-center py-20 px-6 text-center flex flex-col justify-center items-center min-h-[400px]"
        style={{ backgroundImage: `url(${manImage})` }}
      >

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
                    <Link to="/discover-century-group" className="hover:text-white">
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
                    <Link to="" className="hover:text-white">
                      <Typography size="md" weight="light">
                        Careers
                      </Typography>
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="hover:text-white">
                      <Typography size="md" weight="light">
                        Our Assets
                      </Typography>
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact-us" className="hover:text-white">
                     <Typography size="md" weight="light">
                      Talk to us
                    </Typography></Link>

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
                    <Link to="/services/1" className="hover:text-white">
                      <Typography size="md" weight="light">
                        Offshore infrastructure
                      </Typography>
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/2" className="hover:text-white">
                      <Typography size="md" weight="light">
                        Exploration and production
                      </Typography>
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/3" className="hover:text-white">
                      <Typography size="md" weight="light">
                        Ports Terminal and Management Services
                      </Typography>
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/4" className="hover:text-white">
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
                    <Link to="" className="hover:text-white">
                      <Typography size="md" weight="light">
                        Corporate Governance
                      </Typography>
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="hover:text-white">
                      <Typography size="md" weight="light">
                        Health & Safety
                      </Typography>
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="hover:text-white">
                      <Typography size="md" weight="light">
                        Whistle Blowing
                      </Typography>
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="hover:text-white">
                      <Typography size="md" weight="light">
                        Anti-Money Laundering
                      </Typography>
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="hover:text-white">
                      <Typography size="md" weight="light">
                        Terms & Conditions
                      </Typography>
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="hover:text-white">
                      <Typography size="md" weight="light">
                        Privacy Policy
                      </Typography>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Social Icons */}
              <div className="flex space-x-4 ">
                <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A930693&keywords=century%20group%20nigeria&origin=RICH_QUERY_SUGGESTION&position=1&searchId=1cbf806f-d5cb-404b-8f6e-06fb7eae83cf&sid=m7%3A&spellCorrectionEnabled=false" target='blank' className="p-2  rounded-full  transition">
                  <FaLinkedinIn />
                </a>
                <a href="https://m.facebook.com/CenturyGroupNigeria/" target='blank' className="p-2 rounded-full  transition">
                  <FaFacebookF />
                </a>
                <a href="https://x.com/CenturyGroupNG" target='blank' className="p-2 rounded-full  transition">
                  <FaXTwitter />

                </a>
                <a href="https://www.instagram.com/centurygroupng/" target='blank' className="p-2  rounded-full  transition">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[95%] mx-auto px-6 py-4 text-start text-sm text-gray-400">
          © {new Date().getFullYear()} Century Group Energy Services Limited. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
