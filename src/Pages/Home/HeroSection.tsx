import AnimatedScreen from '../../Components/Animations';
import { ButtonComponent } from '../../Components/ButtonComponent';
import HeroCards from './HeroCards';
import { Link } from 'react-router-dom';
import routeNames from '../../Components/Navigation/RouteNames';
import Animate from '../../Components/Animate';
import { useEffect, useState } from 'react';
import { client } from '../../sanityClient';
import { PortableText } from 'next-sanity';
import type { TypedObject } from '@portabletext/types';

export interface HeroSectionTypes {
  title: TypedObject[];
  description: string;
  videoUrl: string;
}
const query = `*[_type == "heroSection"][0]{
  title,
  heroText,
  "videoUrl": videoUrl.asset->url
}`;

const HeroSection = () => {
  const [heroSection, setHeroSection] = useState<HeroSectionTypes>();
  useEffect(() => {
    const fetchHeroSection = async () => {
      try {
        const heroSection = await client.fetch(query);
        setHeroSection(heroSection);
      } catch (error) {
        console.error('Error fetching heroSecion:', error);
      }
    };
    fetchHeroSection();
  }, []);
  console.log('HS', heroSection);
  return (
    <AnimatedScreen>
      <section className=" py-12 md:py-0 relative w-full h-screen overflow-scroll  bg-black text-white">
        {heroSection?.videoUrl && (
          <video
            src={heroSection.videoUrl}
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* <div className="absolute inset-0 bg-black/70" /> */}

        <div className="relative z-10 max-w-[95%] mx-auto px-6 grid lg:grid-cols-2 items-center h-full gap-8">
          <div className="space-y-6">
            <Animate animationType="fadeIn" duration={2000}>
              <div className="text-[#ED6C30] inline-block pl-4 pr-10 py-2 rounded-full bg-gray-900/70 text-base font-semibold">
                Solution, People, Value
              </div>
            </Animate>
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {heroSection?.title && <PortableText value={heroSection.title} />}
            </div>
            <p className="text-lg text-gray-300 max-w-lg">{heroSection?.description}</p>
            <div className="inline-block">
              <Link to={`${routeNames.discoveryCG}/${routeNames.assets}`}>
                <ButtonComponent text="Our assets" bg_color="#ED6C30" />
              </Link>
            </div>{' '}
          </div>

          {/* Right - Animated Cards */}
          <div className="relative flex justify-center items-center pb-12">
            <HeroCards />
          </div>
        </div>
      </section>
    </AnimatedScreen>
  );
};

export default HeroSection;
