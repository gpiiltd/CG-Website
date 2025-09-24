import { LazyImage } from './LazyImage';
import { Typography } from './Typography';

interface HoverCardProps {
  title: string;
  description: string;
  imageSrc: string;
  className?: string;
}

export const HoverCard: React.FC<HoverCardProps> = ({
  title,
  description,
  imageSrc,
  className = '',
}) => {
  return (
    <div
      className={`relative rounded-lg overflow-hidden shadow-lg group transition-opacity duration-300 ease-in-out ${className}`}
    >
      {/* Image */}
      <LazyImage src={imageSrc} alt={title} />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 ease-in-out"></div>

      {/* Text */}
      <div className="absolute inset-0 flex flex-col justify-end p-8">
        {/* Title is always visible */}
        <Typography
          weight="bold"
          size="2xl"
          className="text-white text-xl sm:text-2xl font-bold mb-2 "
        >
          {title}
        </Typography>

        {/* Description is visible on hover for desktop, always visible on small screens */}

        <Typography
          weight="light"
          size="lg"
          className="transition-all duration-500 ease-in-out
                      opacity-100 max-h-full sm:opacity-0 sm:max-h-0 group-hover:opacity-100 group-hover:max-h-40 overflow-hidden"
        >
          {description}
        </Typography>
      </div>
    </div>
  );
};
