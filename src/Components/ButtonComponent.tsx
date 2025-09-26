import { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from '../assets/SvgImagesAndIcons';

interface ButtonProps {
  text: string;
  loading?: boolean;
  onClick?: () => void;
  active?: boolean;
  bg_color?: string;
  text_color?: string;
  border_color?: string;
  minWidth?: string;
  fullWidth?: boolean;
  variant?: 'solid' | 'outline';
  expandOnHover?: boolean;
}

export const ButtonComponent: React.FC<ButtonProps> = ({
  text,
  loading = false,
  onClick,
  active = true,
  bg_color = '#3b82f6',
  text_color,
  border_color,
  minWidth = '120px',
  fullWidth = false,
  variant = 'solid',
  expandOnHover = true,
}) => {
  const [hovered, setHovered] = useState(false);

  const isOutline = variant === 'outline';
  const finalTextColor = text_color || (isOutline ? bg_color : 'white');
  const finalBorderColor = border_color || (isOutline ? bg_color : bg_color);
  const finalBgColor = isOutline ? 'transparent' : bg_color;

  const containerStyle: React.CSSProperties = {
    cursor: active ? 'pointer' : 'default',
    fontSize: '1rem',
    borderRadius: '60px',
    transition: 'all 0.6s ease',
    backgroundColor: finalBgColor,
    color: finalTextColor,
    opacity: active ? 1 : 0.7,
    borderColor: active ? finalBorderColor : 'transparent',
    borderStyle: 'solid',
    padding: '0.6rem 1.4rem',
    borderWidth: '1px',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth,
    width: fullWidth ? '100%' : 'auto',
    boxShadow: active && !isOutline ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
    transform: hovered ? 'scale(1.03)' : 'scale(1)',
    fontFamily: 'system-ui, sans-serif',
    whiteSpace: 'nowrap',
  };

  const buttonStyle: React.CSSProperties = {
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    fontSize: '1rem',
    letterSpacing: '0.05em',
    fontWeight: '500',
    backgroundColor: 'transparent',
    width: '100%',
    position: 'relative',
    cursor: active ? 'pointer' : 'default',
    gap: '0.5rem',
    color: finalTextColor,
  };

  return (
    <div
      style={containerStyle}
      onClick={active && !loading ? onClick : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button
        onClick={active && !loading ? onClick : undefined}
        disabled={loading || !active}
        style={buttonStyle}
      >
        {/* Text OR Loading Spinner */}
        {loading ? (
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              fontWeight: 600,
            }}
          >
            <ClipLoader color={finalTextColor} size={20} />
          </span>
        ) : (
          <>
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontWeight: 600,
              }}
            >
              <span>{text}</span>
            </span>

            {/* Right Arrow Icon (animated in on hover) */}
            {expandOnHover && (
              <AnimatePresence>
                {hovered && (
                  <motion.span
                    initial={{ opacity: 0, x: 5 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 5 }}
                    transition={{ duration: 0.8 }}
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    <Icon type="Arrow" className="" />
                  </motion.span>
                )}
              </AnimatePresence>
            )}
          </>
        )}
      </button>
    </div>
  );
};
