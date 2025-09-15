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
