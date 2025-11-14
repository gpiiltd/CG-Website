import { ButtonComponent } from './ButtonComponent';
import { Typography } from './Typography';

interface PolicyCardProps {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  pdfDocument: string;
}

const PolicyCard: React.FC<PolicyCardProps> = ({
  id,
  title,
  description,
  coverImage,
  pdfDocument
}) => {
  const handleView = () => {
    // Open PDF in new tab for viewing
    window.open(pdfDocument, '_blank');
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(pdfDocument);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = `${title.replace(/\s+/g, '_')}_${id}.pdf`;
      document.body.appendChild(link);
      link.click();

      // Cleanup
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading PDF:', error);
      alert('Failed to download the document. Please try again.');
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
            <ButtonComponent
              text="View document"
              bg_color="#ED6C30"
              onClick={handleView}
            />
            <ButtonComponent
              text="Download"
              bg_color="#642D14"
              variant="outline"
              onClick={handleDownload}
            />
          </div>
        </div>

        {/* Cover Image */}
        <div className="w-full flex justify-center items-center xl:justify-start">
          <img
            src={coverImage}
            alt={`${title} cover`}
            className="rounded-lg w-full h-[405px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default PolicyCard;
