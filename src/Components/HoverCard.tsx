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
  className = "",
}) => {
  return (
    <div
      className={`relative rounded-lg overflow-hidden shadow-lg group transition-opacity duration-300 ease-in-out ${className}`}
    >
      {/* Image */}
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 ease-in-out"></div>

      {/* Text */}
      <div className="absolute inset-0 flex flex-col justify-end p-4">
        <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
        <p className="text-white text-sm font-semibold opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 overflow-hidden transition-all duration-300 ease-in-out">
          {description}
        </p>
      </div>
    </div>
  );
};
