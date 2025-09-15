import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Typography } from '../../Components/Typography';

const cards = [
  { id: 1, number: '4', text: '3 FPSOs + 1 FSO' },
  { id: 2, number: '20+', text: 'Years of Experience' },
  { id: 3, number: '50+', text: 'Successful Projects' },
  { id: 4, number: '100%', text: 'Client Satisfaction' },
];

const HeroCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

return (
  <div className="relative w-full max-w-[400px] aspect-[4/3] mx-auto">
    {cards.map((card, index) => {
      const isActive = index === activeIndex;
      return (
        <motion.div
          key={card.id}
          className="absolute top-0 left-0 w-full h-full rounded-xl flex flex-col items-center justify-center
                     bg-gradient-to-b from-[#3a3a3acc] to-[#222222cc] shadow-lg backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: isActive ? 1 : 0.5,
            scale: isActive ? 1 : 0.95,
            zIndex: isActive ? 10 : index,
            y: isActive ? 0 : 10,
            x: 0,
            rotate: isActive ? [0, -6.5, 1.5, 0] : 0,
          }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <Typography weight="bold" className="mb-3 text-3xl sm:text-4xl md:text-5xl">
            {card.number}
          </Typography>
          <Typography weight="bold" className="mt-2 text-sm sm:text-base md:text-lg text-gray-300">
            {card.text}
          </Typography>
        </motion.div>
      );
    })}
  </div>
);

};

export default HeroCards;
