import { Typography } from '../../Components/Typography';
import CardImageTitleAndDescription from '../../Components/Cards/CardImageTitleAndDescription';
import { useNavigate } from 'react-router-dom';
import AnimatedScreen from '../../Components/Animations';
import { useEffect, useState } from 'react';
import { client } from '../../sanityClient';
import Stats from './Stats';

interface Service {
  _id: string;
  title: string;
  description: string;
  image: string;
  learnMoreUrl: string;
}

const OurServices = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "ourServices"]{
        _id,
        title,
        description,
        "image": image.asset->url,
        learnMoreUrl
      }`
      )
      .then((data: Service[]) => setServices(data))
      .catch(console.error);
  }, []);
  return (
    <>
      <AnimatedScreen>
        <div className="bg-[#FFF3EE] py-12 w-full relative pb-8 md:pb-12 lg:pb-16">
          <Typography size="3xl" weight="bold" className="sm:mb-8 text-center" color="primary">
            Our Services
          </Typography>
          <div className="max-w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 py-12 mb-4 md:mb-6 lg:mb-8">
            {services.map((service) => (
              <CardImageTitleAndDescription
                key={service._id}
                imageSrc={service.image}
                title={service.title}
                description={service.description}
                onLearnMoreClick={() => navigate(service.learnMoreUrl)}
              />
            ))}
          </div>
          <Stats />
        </div>
      </AnimatedScreen>
    </>
  );
};

export default OurServices;
