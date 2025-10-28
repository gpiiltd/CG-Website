import React from 'react';
import { Typography } from '../Typography';
import {
  HiOutlineShieldCheck,
  HiOutlineLightBulb,
  HiOutlineUserGroup,
  HiOutlineStar,
} from 'react-icons/hi';
import { MdOutlineAutoAwesome } from 'react-icons/md';
import { TbRefresh } from 'react-icons/tb';
import { GoShieldCheck } from 'react-icons/go';
import { LuUsers } from 'react-icons/lu';

interface IconProps {
  type: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ type, className }) => {
  const iconMap = {
    // From react-icons/hi
    shield: HiOutlineShieldCheck,
    light: HiOutlineLightBulb,

    // From other sets
    teamwork: LuUsers, // From react-icons/lu (Lucide)
    service: MdOutlineAutoAwesome, // From react-icons/md (Material Design)
    loading: TbRefresh, // From react-icons/tb (Tabler)

    // You can also have multiple names for the same icon
    integrity: GoShieldCheck, // Different shield icon
  };

  const IconComponent = iconMap[type as keyof typeof iconMap] || HiOutlineLightBulb;

  return <IconComponent className={className} />;
};

// Your existing CardData interface and cardData array remain the same
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
    description: 'We operate with transparency, trust, and accountability.',
    icon: 'shield',
  },
  {
    id: 2,
    title: 'Foresight',
    subtitle: '',
    description:
      'We envision industry shifts, embrace innovation and navigate uncertainty with clarity.',
    icon: 'light',
  },
  {
    id: 3,
    title: 'Teamwork',
    subtitle: '',
    description:
      'We partner deeply with our clients, communities and teammates to achieve shared goals.',
    icon: 'teamwork',
  },
  {
    id: 4,
    title: 'Service Excellence',
    subtitle: '',
    description: 'Every project meets the highest standards of quality, safety, and reliability.',
    icon: 'service',
  },
  {
    id: 5,
    title: 'Local Capacity Development',
    subtitle: '',
    description:
      'We are committed to empowering the stakeholders in the communities where we operate by investing in local talents, skills transfer and strengthening local ecosystems.',
    icon: 'loading',
  },
];

// Card Component (unchanged)
const Card: React.FC<CardData> = ({ title, description, icon }) => {
  return (
    <div className="bg-[#FFFCFB] rounded-xl overflow-hidden p-6 border border-[#D3D7DB75]">
      <Icon type={icon} className="mb-1 h-7 w-10 text-[#A84D23]" />
      <Typography as="h3" size="lg" weight="semibold" className="mb-4 text-[#11092F]">
        {title}
      </Typography>
      <Typography weight="normal" className="text-[#3E3E41] items-start">
        {description}
      </Typography>
    </div>
  );
};

// CardGrid Component (unchanged)
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
