import { Link, useNavigate } from 'react-router-dom';
import { Typography } from '../../Components/Typography';
import ImageSlider from '../../Components/Slider';
import { ButtonComponent } from '../../Components/ButtonComponent';
import LazyImage from '../../Components/LazyImage';
import AnimatedScreen from '../../Components/Animations';
import Animate from '../../Components/Animate';
import { client } from '../../sanityClient';
import { useEffect, useState } from 'react';

export interface PartnersTypes {
  imageUrl: string;
}

interface DescriptionChild {
  text: string;
}

interface DescriptionBlock {
  _key: string;
  children: DescriptionChild[];
}

interface ImageData {
  src: string;
  alt: string;
}

interface OperationExcellenceItem {
  title: string;
  description: DescriptionBlock[];
  images: ImageData[];
}

const query = `*[_type == "partners"]{
  "src": imageUrl.asset->url,
  "alt": title
}`;
const TrustedPartners = () => {
  const navigate = useNavigate();
  const [partnersSection, setPartnersSection] = useState<{ src: string; alt?: string }[]>([]);
  const [oEData, setOEData] = useState<OperationExcellenceItem[]>([]);
  const [events, setEvents] = useState<
    { logo: string; description: string; bgImage: string; eventLink: string }[]
  >([]);

  useEffect(() => {
    const fetchPartnerSection = async () => {
      try {
        const data = await client.fetch(query);
        setPartnersSection(data);
      } catch (error) {
        console.error('Error fetching partnerSection:', error);
      }
    };

    fetchPartnerSection();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "operationExcellence"]{
      title,
      description,
      "images": images[]{
        "src": asset->url,
        "alt": asset->originalFilename
      }
    }`;
      const result: OperationExcellenceItem[] = await client.fetch(query);
      setOEData(result);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await client.fetch(`*[_type == "events"]{
        "logo": eventLogo.asset->url,
  "bgImage": bgImage.asset->url,
        description,
        eventLink
      }`);
      setEvents(data);
    };
    fetchEvents();
  }, []);

  return (
    <AnimatedScreen>
      <section className="w-full bg-white">
        <div className="max-w-[95%] mx-auto px-6 py-12">
          <Typography color="primary" size="lg" weight="bold" className="mb-8 text-start">
            Trusted by top-tier energy and infrastructure leaders across Africa.
          </Typography>
          {partnersSection.length > 0 ? (
            <ImageSlider images={partnersSection} />
          ) : (
            <p className="text-center text-gray-500">Loading partners...</p>
          )}
        </div>

        {/* Benchmark Section */}

        <div className="bg-[#fff5f0]">
          <div className="max-w-[95%] mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
            {oEData.map((item, index) => (
              <div key={index} className="contents">
                {/* Left side images */}
                <div className="flex gap-4 h-max justify-center">
                  <div className="flex flex-col gap-4 h-full">
                    {item.images?.[0] && (
                      <LazyImage
                        src={item.images[0].src}
                        alt={item.images[0].alt}
                        className="rounded-lg object-cover h-full w-full"
                      />
                    )}
                    {item.images?.[1] && (
                      <LazyImage
                        src={item.images[1].src}
                        alt={item.images[1].alt}
                        className="rounded-lg object-cover h-full w-full"
                      />
                    )}
                  </div>
                  {item.images?.[2] && (
                    <div>
                      <LazyImage
                        src={item.images[2].src}
                        alt={item.images[2].alt}
                        className="rounded-lg object-cover h-full w-full"
                      />
                    </div>
                  )}
                </div>

                {/* Right side text */}
                <Animate animationType="slideInRight" duration={3000}>
                  <div className="h-full">
                    <p className="text-orange-500 uppercase text-sm font-semibold mb-2 tracking-wide">
                      Operational Excellence
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#11092F] mb-4 leading-snug">
                      {item.title}
                    </h2>

                    {/* Safely render description */}
                    <div className="text-gray-600 mb-8 text-lg space-y-4">
                      {item.description?.map((block) => (
                        <p key={block._key}>
                          {block.children.map((child) => child.text).join(' ')}
                        </p>
                      ))}
                    </div>

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
                </Animate>
              </div>
            ))}
          </div>
        </div>

        {/* FPSO World Congress Banner */}
        <div>
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-cover bg-center text-center flex flex-col justify-center items-center"
              style={{ backgroundImage: `url(${event.bgImage})` }}
            >
              <div className="max-w-[95%] mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                {/* Left side images */}
                <div className="bg-white w-full flex justify-center lg:justify-end items-center px-4 sm:px-6 py-4">
                  <div className="font-bold flex flex-col items-start">
                    <span className="font-outfit font-extrabold text-lg text-[#161C44] pl-3">
                      MEET US AT THE
                    </span>
                    <div className="flex items-center gap-2">
                      <LazyImage src={event.logo} alt="Event Logo" className="max-w-full h-auto" />
                    </div>
                  </div>
                </div>

                {/* Right side text */}
                <div className="space-y-4">
                  <Typography size="2xl" weight="bold" className="text-start text-white">
                    {event.description}
                  </Typography>

                  <div className="flex gap-4">
                    <Link
                      to={event.eventLink}
                      target="_blank"
                      className="border-2 border-[#FDF0EA] rounded-full px-6 py-2 hover:scale-105 transition-all duration-300 ease-in-out"
                    >
                      <span className="text-[#FDF0EA] font-semibold">Learn More</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </AnimatedScreen>
  );
};

export default TrustedPartners;
