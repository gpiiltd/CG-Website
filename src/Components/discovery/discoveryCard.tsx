import React from 'react';
import Icon from '../../assets/SvgImagesAndIcons';
import { Typography } from '../Typography';

interface CardData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

const cardData: CardData[] = [
  {
    id: 1,
    title: 'Integrity',
    subtitle: '',
    description:
      'At Century Group, we uphold the highest standards of honesty and ethical conduct in all our dealings. We believe that trust is the foundation of every successful partnership, and we are committed to transparency and accountability.',
    icon: 'shield',
  },
  {
    id: 2,
    title: 'Foresight',
    subtitle: '',
    description:
      'We are forward-thinking innovators, constantly anticipating market trends and evolving client needs. Our proactive approach allows us to develop strategic solutions that not only address current challenges but also pave the way for future success.',
    icon: 'light',
  },
  {
    id: 3,
    title: 'Teamwork',
    subtitle: '',
    description:
      'Collaboration is at the heart of our operations. We foster a supportive and inclusive environment where diverse talents come together to achieve common goals. By working hand-in-hand with our clients and partners, we deliver exceptional results.',
    icon: 'teamwork',
  },
  {
    id: 4,
    title: 'Service Excellence',
    subtitle: '',
    description:
      'Our commitment to excellence drives everything we do. We strive to exceed expectations by providing unparalleled service, meticulous attention to detail, and a relentless pursuit of quality in every project we undertake.',
    icon: 'service',
  },
  {
    id: 5,
    title: 'Local Capacity Development',
    subtitle: '',
    description:
      'We are dedicated to empowering local communities and fostering sustainable growth. Through our initiatives, we invest in developing local talent, resources, and infrastructure, ensuring long-term benefits for the regions in which we operate.',
    icon: 'loading',
  },
];

// Card Component
const Card: React.FC<CardData> = ({ title, description, icon }) => {
  return (
    <div className="bg-[#FFFCFB] rounded-xl overflow-hidden p-6 border border-[#D3D7DB75]">
      <Icon type={icon} className="mb-4 h-7" />
      <Typography as="h3" size="lg" weight="semibold" className="mb-4 text-[#11092F]">
        {title}
      </Typography>
      <Typography weight="normal" className="text-[#3E3E41] items-start">
        {description}
      </Typography>
    </div>
  );
};

// Main Card Grid Component
const CardGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
      {cardData.map((card, index) => (
        <div
          key={card.id}
          className={`
                ${index < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}
              `}
        >
          <Card {...card} />
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
