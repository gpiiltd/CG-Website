import { Typography } from '../../Components/Typography';
import { ButtonComponent } from '../../Components/ButtonComponent';
import { HoverCard } from '../../Components/HoverCard';
import { Link } from 'react-router-dom';
import AnimatedScreen from '../../Components/Animations';
import { useEffect, useState } from 'react';
import { client } from '../../sanityClient';

interface WhyCGItem {
  _id: string;
  title: string;
  description: string;
  imageSrc: string;
}
const WhyCG = () => {
  const [cards, setCards] = useState<WhyCGItem[]>([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const data = await client.fetch(`*[_type == "whyCG"]{
          _id,
          title,
          description,
          "imageSrc": imageSrc.asset->url
        }`);
        setCards(data);
      } catch (error) {
        console.error('Error fetching Why CG data:', error);
      }
    };

    fetchCards();
  }, []);
  return (
    <AnimatedScreen>
      <div className="bg-[#0F082B] py-12 w-full">
        <h2 className="text-3xl sm:text-5xl font-bold text-center text-white mb-8">
          Why Century Group?
        </h2>
        {/* Cards */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[90%] mx-auto">
          {cards.map((card, index) => {
            let colSpan = 'lg:col-span-1';
            if (index === 1 || index === 2) colSpan = 'lg:col-span-2';
            return (
              <HoverCard
                key={card._id || index}
                title={card.title}
                description={card.description}
                imageSrc={card.imageSrc}
                className={`h-72 ${colSpan}`}
              />
            );
          })}
        </div>
        <div className="flex flex-col justify-center items-center px-3 md:px-48 py-8">
          <Typography
            size="lg"
            weight="normal"
            className="mb-8 text-center text-balance text-white"
          >
            We power your offshore ambitions by seamlessly delivering world-class energy
            infrastructure solutions (FPSOs, FSOs and more). Partner with us to navigate complex
            challenges with confidence leveraging our integrated expertise to achieve
            cost-effective, high-impact results in the energy sector
          </Typography>
          <div className="inline-block">
            <Link to="/contact-us">
              <ButtonComponent text="Contact us" bg_color="#ED6C30" />
            </Link>
          </div>
        </div>
      </div>
    </AnimatedScreen>
  );
};

export default WhyCG;
