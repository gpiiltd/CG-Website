import AnimatedScreen from '../../Components/Animations';
import { ButtonComponent } from '../../Components/ButtonComponent';
import HeroCards from './HeroCards';
import bg_video from '../../assets/videos/CD_video.mp4';
import { Link } from 'react-router-dom';
import routeNames from '../../Components/Navigation/RouteNames';

const HeroSection = () => {
  return (
    <AnimatedScreen>
      <section className=" py-12 md:py-0 relative w-full h-screen overflow-scroll  bg-black text-white">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={bg_video} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-[95%] mx-auto px-6 grid lg:grid-cols-2 items-center h-full gap-8">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-gray-900/70 text-sm">
              Find us at the FPSO World Congress 2025 →
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Secure Offshore Energy <br />
              Infrastructure For <br />
              Market Leaders
            </h1>
            <p className="text-lg text-gray-300 max-w-lg">
              A leading offshore asset development and production company, safely delivering value
              since 2002.
            </p>
            <div className="inline-block">
              <Link to={`${routeNames.discoveryCG}/${routeNames.assets}`}>
                <ButtonComponent text="Our assets" bg_color="#ED6C30" />
              </Link>
            </div>
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
