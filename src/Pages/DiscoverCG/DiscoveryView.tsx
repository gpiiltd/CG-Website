import { ButtonComponent } from '../../Components/ButtonComponent';
import { Typography } from '../../Components/Typography';
import CardGrid from '../../Components/discovery/discoveryCard';
import Timeline from '../../Components/discovery/DiscoveryTimeline';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, type ReactNode } from 'react';
import LazyImage from '../../Components/LazyImage';
import usePageTitle from '../../Components/PageTitle';
import AnimatedScreen from '../../Components/Animations';
import Animate from '../../Components/Animate';
import { client } from '../../sanityClient';
import type { TypedObject } from '@portabletext/types';
import {
  type PortableTextComponents,
  type PortableTextComponentProps,
  PortableText,
} from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';

export interface DiscoveryViewTypes {
  titleOne: TypedObject[];
  titleTwo: TypedObject[];
  titleDescription: string;
  heroTitle: string;
  heroText: string;
  imageName: string;
  missionSection: {
    backgroundImage: string;
    eyebrow: string;
    title: TypedObject[];
  };
  timelineImage: string;
  years: {
    year: number;
    milestones: string[];
  }[];
  inspirationTeammatesImage: string;
  inspirationDonationImage: string;
  serviceTitleText: string;
  serviceSubTitleText: string;
  serviceMainDescriptionText: string;
  serviceImageOne: string;
  serviceImageOneText: string;
  serviceImageTwo: string;
  serviceImageTwoText: string;
  serviceImageThree: string;
  serviceImageThreeText: string;
}
const query = `*[_type == "discoveryView"][0]{
  titleOne,
  titleTwo,
  titleDescription,
  heroTitle,
  heroText,
  "imageName": imageName.asset->url,
   missionSection {
    "backgroundImage": backgroundImage.asset->url,
    eyebrow,
    title
  },
  "timelineImage": timelineImage.asset->url,
  years[]{
    year,
    milestones
  },
  "inspirationTeammatesImage": inspirationTeammatesImage.asset->url,
  "inspirationDonationImage": inspirationDonationImage.asset->url,
  serviceTitleText,
  serviceSubTitleText,
  serviceMainDescriptionText,
  "serviceImageOne": serviceImageOne.asset->url,
  serviceImageOneText,
  "serviceImageTwo": serviceImageTwo.asset->url,
  serviceImageTwoText,
  "serviceImageThree": serviceImageThree.asset->url,
  serviceImageThreeText,
}`;

const DiscoveryView = () => {
  usePageTitle('Century Group | Discovery');
  const [discoveryView, setDiscoveryView] = useState<DiscoveryViewTypes>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHeroSection = async () => {
      try {
        const discoveryView = await client.fetch(query);
        setDiscoveryView(discoveryView);
      } catch (error) {
        console.error('Error fetching discoveryView:', error);
      }
    };
    fetchHeroSection();
    window.scrollTo(0, 0);
  }, []);
  const portableTextComponents: PortableTextComponents = {
    block: {
      normal: ({ children }: PortableTextComponentProps<PortableTextBlock>) => {
        if (!children) return null;

        return <Typography className="font-bold text-lg text-white">{children}</Typography>;
      },
    },

    marks: {
      highlight: ({ children }: { children?: ReactNode }) => (
        <span className="text-[#F9D1BF] font-semibold">{children}</span>
      ),
    },
  };

  return (
    <>
      <AnimatedScreen>
        <div className=" bg-white">
          {/* Hero Section */}
          <div className="space-y-2 md:mx-[4%] px-6 md:py-[3%]">
            <Typography weight="semibold" className="text-[#ED6C30] pt-8 uppercase">
              The Century Group story
            </Typography>

            <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-10">
              <Typography
                as="h1"
                weight="bold"
                className="text-[#11092F] text-3xl md:text-4xl md:w-1/2"
              >
                {discoveryView?.titleOne && <PortableText value={discoveryView.titleOne} />}
                {discoveryView?.titleTwo && <PortableText value={discoveryView.titleTwo} />}
              </Typography>

              <Typography weight="normal" className="mt-4 md:mt-0 md:w-1/2 text-[#333]">
                {discoveryView?.titleDescription}
              </Typography>
            </div>

            <div className="relative w-full mt-8 rounded-2xl">
              {/* Image */}
              <LazyImage
                src={discoveryView?.imageName || '/default-image.jpg'}
                alt="Century Group"
                className="w-full h-[300px] md:h-[450px] object-cover mb-3 rounded-2xl"
              />

              {/* Overlay content - moved to bottom-left */}
              <div className="absolute bottom-2 w-full p-4 flex justify-center md:justify-start md:left-2 md:w-auto">
                <div className="bg-[#170C3D] p-4 md:p-6 rounded-xl shadow-lg max-w-md">
                  <Typography
                    weight="semibold"
                    className="text-left md:text-left text-2xl text-white mb-2"
                  >
                    {discoveryView?.heroTitle}
                  </Typography>

                  <Typography weight="light" className="text-md text-left md:text-left text-white">
                    {discoveryView?.heroText}
                  </Typography>
                </div>
              </div>
            </div>
          </div>

          {/* Mission section ----------------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

          {/* Rich text from Sanity */}
          {discoveryView?.missionSection && (
            <div className="relative w-full mt-8">
              {discoveryView?.missionSection?.backgroundImage && (
                <LazyImage
                  src={discoveryView.missionSection.backgroundImage || 'default_image'}
                  alt="Mission"
                  className="w-full h-[300px] md:h-[450px] object-cover"
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/85" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-4 md:p-6 rounded-xl shadow-lg w-[90%] md:w-[53%] text-center text-white">
                  <Typography className="text-sm font-semibold text-[#F9D1BF] mb-2">
                    {discoveryView.missionSection.eyebrow}
                  </Typography>

                  {discoveryView?.missionSection?.title && (
                    <PortableText
                      value={discoveryView.missionSection.title}
                      components={portableTextComponents}
                    />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mission section ----------------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
        <Animate animationType="fadeIn" duration={2000}>
          <div className="bg-[#FFF7F4] px-[5%] md:py-[7%] py-[12%]">
            <Typography className="text-transform: uppercase font-bold text-2xl mb-2 md:text-[48px] text-[#11092F]">
              Our Guiding Light
            </Typography>
            <Typography className="text-[#3E3E41] font-light md:text-[18px] w-[90%] md:w-[45%] mb-10">
              At Century Group, values define who we are and how we operate. These principles shape
              every decision we make and every partnership we build.
            </Typography>
            <CardGrid />
          </div>
        </Animate>

        {/* Journey section ----------------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
        <div className="md:py-[7%] py-[12%] text-center">
          <Typography weight="bold" className="text-[#ED6C30] mb-[20px] uppercase text-sm">
            How far we have come
          </Typography>
          <Typography weight="bold" className="text-[#11092F] md:text-5xl text-3xl mb-[30px]">
            The journey: From passion to strategy
          </Typography>
          <Typography weight="light" className="text-[#11092F] text-center md:w-[40%] m-auto mb-6">
            We didn’t just ride the waves — we learned to navigate storms. The early years tested
            our resilience. When the global market retreated during the 2008 downturn, we doubled up
            on ingenuity
          </Typography>
          <Timeline years={discoveryView?.years ?? []} image={discoveryView?.timelineImage ?? ''} />
        </div>

        {/* who we are ----------------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

        <div className="bg-[#0F082B] text-white px-[7%]">
          <div className="rounded-xl pt-[7%] pb-[7%] flex flex-col md:flex-row  justify-center">
            {/* First text div */}
            <div className="flex-1 text-center md:text-left md:m-0 m-[3%] mb-12">
              <Typography weight="bold" className="text-3xl  md:text-5xl font-bold md:mb-8 mb-4">
                The inspiration:
                <br className="hidden md:block" />
                Bridging two worlds
              </Typography>

              <Typography className="mt-2 mb-4 text-gray-300">
                We’re engineers who dream in coastlines and barrels.
              </Typography>

              <div className="flex justify-center md:justify-start mb-3">
                <LazyImage
                  src={discoveryView?.inspirationTeammatesImage || '/default-image.jpg'}
                  alt="Century Group"
                  className="w-sm h-[150px] md:h-[120px] object-contain rounded-2xl"
                />
              </div>

              {/* Button aligned left */}
              <ButtonComponent
                text="Faces of CG"
                bg_color="#ED6C30"
                onClick={() => navigate('/our-team')}
              />
              {/* fix with what choima said and add className for user to still edit it*/}
            </div>

            {/* Second text div */}
            <div className="flex-1 text-center md:text-left mt-0 md:mt-0 md:pr-14">
              <Typography weight="bold" className="font-bold mb-4">
                Together, we are building more than energy solutions, we are enabling self-reliant
                economies and igniting African capabilities from within.
              </Typography>
              <Typography weight="light" className="mt-2 mb-4 text-gray-300">
                At Century Group, we envision a future where African’s Growth is driven by its own
                people. our commitment to employ 15,000 Africans across our projects is not merely a
                target, it is a strategic vehicle for equitable wealth redistribution and a
                foundation for sustainable development. By investing in indigenous talent, we
                cultivate critical independent thinkers, technical leaders, and empowered
                communities, transforming infrastructure excellence into a force of shared
                prosperity.
              </Typography>
            </div>
          </div>

          <div className="rounded-xl pb-[7%] flex md:flex-row-reverse md:gap-10 flex-col items-center">
            {/* Image first on mobile, second on desktop */}
            <div className="flex-1 mt-0 md:mt-0 mb-8 md:pr-14">
              <LazyImage
                src={discoveryView?.inspirationDonationImage || '/default-image.jpg'}
                alt="Century Group"
                className="w-full h-[250px] md:h-[320px] object-cover rounded-2xl"
              />
            </div>

            {/* Text second on mobile, first on desktop */}
            <div className="flex-1 md:text-left">
              <Typography weight="bold" className="font-bold text-2xl md:text-3xl mb-4">
                That’s why we.
              </Typography>
              <Typography weight="light" className="mt-2 mb-4 text-gray-300">
                • <span className="font-bold">Donated and equipped a library</span> for the Nigerian
                University of Technology Management in Lagos.
              </Typography>
              <Typography weight="light" className="mt-2 mb-4 text-gray-300">
                • <span className="font-bold">Donated over 4,000 textbooks</span> to secondary
                schools in support of science education that benefited 6,700+ students.
              </Typography>
              <Typography weight="light" className="mt-2 mb-4 text-gray-300">
                • <span className="font-bold">Conducted cancer awareness campaign</span> in
                collaboration with leading health institutions in 4 states (Rivers, Anambra, Lagos,
                and Abuja).
              </Typography>
            </div>
          </div>
        </div>

        {/* who we are ----------------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

        <div className="p-[7%] bg-[#FFF7F4]">
          <div className="rounded-xl flex flex-col md:flex-row  justify-center">
            {/* First text div */}
            <div className="flex-1 text-center md:text-left md:m-0 m-[3%] mb-4">
              <Typography
                weight="bold"
                className="text-3xl  md:text-5xl font-bold md:mb-8 mb-4 text-[#11092F]"
              >
                {discoveryView?.serviceTitleText}
              </Typography>

              <Typography className="text-[#3E3E41] text-center md:text-left mb-5 w-[23rem]">
                {discoveryView?.serviceSubTitleText}
              </Typography>
            </div>

            {/* Second text div */}
            <div className="flex-1 text-center md:text-left mt-0 md:mt-0 md:pr-14">
              <Typography weight="normal" className="font-bold mb-8 text-[#3E3E41]">
                {discoveryView?.serviceMainDescriptionText}
              </Typography>
              <ButtonComponent
                text="View Our Services"
                variant="solid"
                bg_color="#ED6C30"
                onClick={() => navigate('/services')}
              />
            </div>
          </div>

          {/* 3 image with text */}
          <div className="flex flex-col md:flex-row md:items-center gap-10 md:justify-between mt-8">
            <span className="block w-full">
              <LazyImage
                src={discoveryView?.serviceImageOne ?? ''}
                alt="Century Group"
                className="w-full h-[250px] md:h-[320px] object-cover rounded-2xl"
              />
              <Typography weight={'semibold'} className="text-[#11092F] mt-2.5 w-[20rem]">
                {discoveryView?.serviceImageOneText}
              </Typography>
            </span>

            <span className="block w-full">
              <LazyImage
                src={discoveryView?.serviceImageTwo ?? ''}
                alt="Century Group"
                className="w-full h-[250px] md:h-[320px] object-cover rounded-2xl"
              />
              <Typography weight={'semibold'} className="text-[#11092F] mt-2.5">
                {discoveryView?.serviceImageTwoText}
              </Typography>
            </span>

            <span className="block w-full">
              <LazyImage
                src={discoveryView?.serviceImageThree ?? ''}
                alt="Century Group"
                className="w-full h-[250px] md:h-[320px] object-cover rounded-2xl"
              />
              <Typography weight={'semibold'} className="text-[#11092F] mt-2.5">
                {discoveryView?.serviceImageThreeText}
              </Typography>
            </span>
          </div>
        </div>
        {/* </div> */}
      </AnimatedScreen>
    </>
  );
};

export default DiscoveryView;
