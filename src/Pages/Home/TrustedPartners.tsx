import { Link } from "react-router-dom";
import shell from "../../assets/svgImages/shell.svg";
import npdc from "../../assets/svgImages/npdc.svg";
import oriental from "../../assets/svgImages/oriental.svg";
import energy from "../../assets/svgImages/energy.svg";
import general from "../../assets/svgImages/general.svg";







const TrustedPartners = () => {
  return (
    <section className="w-full bg-white">
      {/* Trusted by logos */}
      <div className="max-w-[95%] mx-auto px-6 py-12 text-center">
        <p className="text-gray-600 mb-8 text-sm sm:text-base">
          Trusted by top-tier energy and infrastructure leaders across Africa.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10">
          <img src={shell} alt="Shell" className="" />
          <img src={npdc} alt="Energy Direct" />
          <img src={oriental} alt="Energy Link" />
          <img src={energy} alt="NPDC"  />
          <img src={general} alt="General Hydrocarbons" />
        </div>
      </div>

      {/* Benchmark Section */}
      <div className="bg-[#fff5f0]">
        <div className="max-w-[1200px] mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side images */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/assets/images/team1.jpg"
              alt="Team"
              className="rounded-lg object-cover w-full h-48"
            />
            <img
              src="/assets/images/ship.jpg"
              alt="Ship"
              className="rounded-lg object-cover w-full h-48 row-span-2"
            />
            <img
              src="/assets/images/team2.jpg"
              alt="Team"
              className="rounded-lg object-cover w-full h-48"
            />
          </div>

          {/* Right side text */}
          <div>
            <p className="text-orange-500 uppercase text-sm font-semibold mb-2 tracking-wide">
              Operational Excellence
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-snug">
              The benchmark for safety, capacity, and experience.
            </h2>
            <p className="text-gray-700 mb-4 font-medium">
              Delivering integrated offshore energy solutions through world class
              floater development, comprehensive ancillary support.
            </p>
            <p className="text-gray-600 mb-8">
              Our expertise and technical capabilities enable us to efficiently
              execute complex offshore projects from concept through life cycle
              support, mitigating risk and amplifying value delivery.
            </p>
            <div className="flex gap-4">
              <Link to="/contact-us">
                <button className="bg-[#ED6C30] text-white px-6 py-3 rounded-full font-medium hover:bg-[#d95b20] transition">
                  Contact us
                </button>
              </Link>
              <Link to="/learn-more">
                <button className="border border-gray-400 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
