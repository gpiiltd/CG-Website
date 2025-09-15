import { Link, useNavigate } from 'react-router-dom';
import shell from '../../assets/svgImages/shell.svg';
import npdc from '../../assets/svgImages/npdc.svg';
import oriental from '../../assets/svgImages/oriental.svg';
import energy from '../../assets/svgImages/energy.svg';
import general from '../../assets/svgImages/general.svg';
import ship from '../../assets/svgImages/ship.svg';
import workers1 from '../../assets/svgImages/workers.svg';
import workers2 from '../../assets/svgImages/workers2.svg';
import { Typography } from '../../Components/Typography';
import ImageSlider from '../../Components/Slider';
import { ButtonComponent } from '../../Components/ButtonComponent';
import people from '../../assets/svgImages/people.svg';
import fpsologo from '../../assets/svgImages/American_logo.svg';

const TrustedPartners = () => {
  const navigate = useNavigate();

  const images = [
    { src: shell, alt: 'Shell' },
    { src: npdc, alt: 'Energy Direct' },
    { src: oriental, alt: 'Energy Link' },
    { src: energy, alt: 'NPDC' },
    { src: general, alt: 'General Hydrocarbons' },
  ];
  return (
    <section className="w-full bg-white">
      <div className="max-w-[95%] mx-auto px-6 py-12">
        <Typography color="primary" size="lg" weight="bold" className="mb-8 text-start">
          Trusted by top-tier energy and infrastructure leaders across Africa.
        </Typography>
        <ImageSlider images={images} />
      </div>

      {/* Benchmark Section */}
      <div className="bg-[#fff5f0]">
        <div className="max-w-[95%] mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side images */}
          <div className="grid grid-cols-2 gap-4">
            <img src={workers2} alt="Team" className="rounded-lg object-cover w-full h-48" />
            <img src={ship} alt="Ship" className="rounded-lg object-cover w-full  row-span-2" />
            <img src={workers1} alt="Team" className="rounded-lg object-cover w-full h-48" />
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
              Delivering integrated offshore energy solutions through world class floater
              development, comprehensive ancillary support.
            </p>
            <p className="text-gray-600 mb-8">
              Our expertise and technical capabilities enable us to efficiently execute complex
              offshore projects from concept through life cycle support, mitigating risk and
              amplifying value delivery.
            </p>
            <div className="flex gap-4">
              <Link to="/contact-us">
                <ButtonComponent text="Contact us" bg_color="#ED6C30" />
              </Link>
                <ButtonComponent
                  text="Learn More"
                  variant="outline"
                  bg_color="#642D14"
                  onClick={() => navigate('/discover-century-group')}
                />
            </div>
          </div>
        </div>
      </div>

      {/* FPSO World Congress Banner */}
      <div
        className="bg-cover bg-center   text-center flex flex-col justify-center items-center "
        style={{ backgroundImage: `url(${people})` }}
      >
        {/* Content */}
        <div className="max-w-[95%] mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side images */}
          <div className=" gap-4 bg-[#ED6C30] w-full h-full flex justify-end items-center px-6">
            <img src={fpsologo} alt="Team" className="rounded-lg " />
          </div>

          {/* Right side text */}
          <div>
            <Typography size="xl" weight="bold" className="mb-8 text-start text-white">
              The world's leading gathering for the offshore oil and gas industry, brings together
              key stakeholders involved in FSO, FPSO, FLNG, and FSRU projects.{' '}
            </Typography>
            <Typography size="lg" weight="light" className="mb-8 text-start text-white">
              This year’s edition will continue to spotlight advancements in engineering practices,
              remote operations, and alternative energy, while recognising long-standing
              collaborations that have shaped the future of offshore energy.
            </Typography>
            <div className="flex gap-4">
              <Link to="/learn-more">
                <ButtonComponent text="Learn More" variant="outline" bg_color="#FDF0EA" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
