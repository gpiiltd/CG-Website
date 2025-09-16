import { Link } from 'react-router-dom';
import { ButtonComponent } from '../../Components/ButtonComponent';

interface ServiceSectionProps {
  bgColor?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  images: string[];
  companyTitle: string;
  companyDescription: string;
  companyDetails: string;
  contactLink?: string;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  bgColor = '#F5F1FE',
  title,
  subtitle,
  images,
  companyTitle,
  companyDescription,
  companyDetails,
  contactLink = '/contact-us',
}) => (
  <div className={`mt-12`} style={{ backgroundColor: bgColor }}>
    <div className="justify-start px-8 md:px-16 pt-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-snug">{title}</h2>
      <p className="text-gray-700 mb-4 font-medium max-w-[585px]">{subtitle}</p>
    </div>

    <div className="max-w-[95%] mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 ">
      {/* Left side images */}
      <div className="grid grid-cols-2 gap-4">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Service ${idx + 1}`}
            className={`rounded-lg object-cover w-full ${idx === 1 ? 'row-span-2' : 'h-48'}`}
          />
        ))}
      </div>

      {/* Right side text */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-snug">
          {companyTitle}
        </h2>
        <p className="text-gray-700 mb-4 font-medium">{companyDescription}</p>
        <p className="text-gray-600 mb-8">{companyDetails}</p>
        <Link to={contactLink}>
          <ButtonComponent text="Contact us" bg_color="#ED6C30" />
        </Link>
      </div>
    </div>
  </div>
);

export default ServiceSection;
