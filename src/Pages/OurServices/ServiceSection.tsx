import { Link } from 'react-router-dom';
import { ButtonComponent } from '../../Components/ButtonComponent';
import type { ServiceSectionProps } from '../../Components/Interfaces';
import LazyImage from '../../Components/LazyImage';
import { PortableText } from 'next-sanity';

const ServiceSection: React.FC<ServiceSectionProps> = ({
  bgColor = '#F5F1FE',
  title,
  subtitle,
  image,
  companyTitle,
  companyDescription,
  contactLink = '/contact-us',
}) => (
  <div className={`mt-0`} style={{ backgroundColor: bgColor }}>
    <div className="justify-start px-8 md:px-16 pt-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-snug max-w-3xl">
        {title}
      </h2>
      <p className="text-gray-700 mb-4 font-medium max-w-[585px]">{subtitle}</p>
    </div>

    <div className="max-w-[95%] mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 ">
      {/* Left side image */}
      <div className="flex gap-4 h-max justify-center">
        <div className="flex flex-col gap-4 h-full">
          <LazyImage
            src={image[0]}
            alt="serviceImage"
            className="rounded-2xl object-cover w-full"
          />
          <LazyImage
            src={image[1]}
            alt="serviceImage"
            className="rounded-2xl object-cover w-full"
          />
        </div>
        <div>
          <LazyImage
            src={image[2]}
            alt="serviceImage"
            className="rounded-2xl object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Right side text */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-snug">
          {companyTitle}
        </h2>
        <div className=" text-gray-900 mb-4">
          {companyDescription && typeof companyDescription !== 'string' && (
            <PortableText value={companyDescription} />
          )}
        </div>
        <Link to={contactLink}>
          <ButtonComponent text="Contact us " bg_color="#ED6C30" />
        </Link>
      </div>
    </div>
  </div>
);

export default ServiceSection;
