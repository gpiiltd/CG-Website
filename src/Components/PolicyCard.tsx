import { ButtonComponent } from './ButtonComponent';
import { Typography } from './Typography';

interface PolicyCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

const PolicyCard: React.FC<PolicyCardProps> = ({ id, title, description, image }) => {
  const handleView = () => {
    window.open(image, '_blank');
  };

const handleDownload = async () => {
  try {
    const response = await fetch(image, { mode: 'cors' });
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = `${title.replace(/\s+/g, '_')}_${id}.png`;
    document.body.appendChild(link);
    link.click();
    // Cleanup
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error downloading image:', error);
  }
};


  return (
    <div className="bg-[#FFF8F5] p-6 rounded-xl mb-8">
      <div className="flex flex-col xl:flex-row gap-8">
        {/* Content */}
        <div className="bg-[#FFF9F6] p-6 rounded-lg w-full xl:max-w-2xl">
          <Typography
            as="h2"
            size="2xl"
            weight="bold"
            color="primary"
            className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl"
          >
            {title}
          </Typography>
          <Typography
            as="p"
            size="base"
            weight="normal"
            className="text-gray-700 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg leading-relaxed"
          >
            {description}
          </Typography>

          <div className="flex gap-4 mt-6">
            <ButtonComponent text="View document" bg_color="#ED6C30" onClick={handleView} />
            <ButtonComponent
              text="Download"
              bg_color="#642D14"
              variant="outline"
              onClick={handleDownload}

            />
          </div>
        </div>

        {/* Image */}
        <div className="w-full flex justify-center items-center xl:justify-start">
          <img src={image} alt={title} className="rounded-lg w-full h-[405px]" />
        </div>
      </div>
    </div>
  );
};

export default PolicyCard;
