import { Link } from 'react-router-dom';
import { ButtonComponent } from '../../Components/ButtonComponent';

interface OverlaySectionProps {
  title: string;
  description: string;
  image: string;
  contactLink?: string;
  learnMoreLink?: string;
  onLearnMore?: () => void;
  bgColor?: string;
}

const OverlaySection: React.FC<OverlaySectionProps> = ({
  title,
  description,
  image,
  contactLink = '/contact-us',
  learnMoreLink,
  bgColor = '#F5F1FE',
  onLearnMore,
}) => (
  <div className="relative -mt-24 w-[90%] justify-center items-center mx-auto rounded-2xl shadow-lg z-20" style={{ backgroundColor: bgColor }}>
    <div className="max-w-[95%] mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center md:flex-row-reverse flex-col">
      {/* left side text */}
      <div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-snug">{title}</h2>
        <p className="text-gray-700 mb-4 font-medium">{description}</p>
        <div className="flex gap-4">
          <Link to={contactLink}>
            <ButtonComponent text="Contact us" bg_color="#ED6C30" />
          </Link>
          {learnMoreLink ? (
            <Link to={learnMoreLink}>
              <ButtonComponent text="Learn More" variant="outline" bg_color="#642D14" />
            </Link>
          ) : (
            <ButtonComponent
              text="Learn More"
              variant="outline"
              bg_color="#642D14"
              onClick={onLearnMore}
            />
          )}
        </div>
      </div>

      {/* right side images */}
      <div>
        <img src={image} alt="Overlay" className="rounded object-cover w-full" />
      </div>
    </div>
  </div>
);

export default OverlaySection;
