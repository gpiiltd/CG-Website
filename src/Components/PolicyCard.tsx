import { ButtonComponent } from "./ButtonComponent";
import { Typography } from "./Typography";

interface PolicyCardProps {
  title: string;
  description: string;
  image: string;
  viewLink?: string;
  downloadLink?: string;
}

const PolicyCard: React.FC<PolicyCardProps> = ({
  title,
  description,
  image,
  viewLink,
  downloadLink,
}) => {
  return (
    <div className="bg-[#FFF8F5] p-3 sm:p-4 md:p-6 lg:p-8 rounded-xl mb-8">
      <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:flex-row pt-4 sm:pt-6">
        {/* Content Section */}
        <div className="bg-[#FFF9F6] p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg w-full xl:max-w-2xl xl:flex-shrink-0">
          {/* Title */}
          <Typography
            as="h2"
            size="2xl"
            weight="bold"
            color="primary"
            className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl"
          >
            {title}
          </Typography>

          {/* Description */}
          <Typography
            as="p"
            size="base"
            weight="normal"
            className="text-gray-700 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg leading-relaxed"
          >
            {description}
          </Typography>

          {/* Buttons */}
          <div className="flex flex-col xs:flex-row sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6">
            {viewLink && (
              <div className="w-full xs:w-auto sm:w-auto">
                <ButtonComponent
                  text="View document"
                  bg_color="#ED6C30"
                  onClick={() => window.open(viewLink, "_blank")}
                />
              </div>
            )}
            {downloadLink && (
              <div className="w-full xs:w-auto sm:w-auto">
                <ButtonComponent
                  text="Download"
                  bg_color="#642D14"
                  variant="outline"
                  onClick={() => window.open(downloadLink, "_blank")}
                />
              </div>
            )}
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full xl:flex-1 flex justify-center items-center xl:justify-start">
          <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-none">
            <img
              src={image}
              alt={title}
              className="rounded-lg w-full h-[405px] transition-shadow duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PolicyCard;
