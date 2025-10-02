export interface Svgprops {
  type: string;
  className?: string;
  click?: () => void;
}

export interface CardITOProps {
  imageName?: string;
  title?: string;
  description?: string;
  width?: string;
  height?: string;
  link?: string;
  onClick?: () => void;
  faceName?: string;
  role?: string;
  imageSrc?: string;
}

export interface Modalprops {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  width?: string;
  height?: string;
}

export interface ServiceSectionProps {
  bgColor?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  images: string[];
  companyTitle?: string;
  companyDescription?: string;
  contactLink?: string;
}

export interface OverlaySectionProps {
  title: string;
  description: string;
  image: string;
  contactLink?: string;
  learnMoreLink?: string;
  onLearnMore?: () => void;
  bgColor?: string;
}

export interface CarouselItem {
  title: string;
  description: string;
  image: string;
}
