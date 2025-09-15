import { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
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
    transition: 'all 0.3s ease',
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
        {/* Text */}
        <span
          style={{
            visibility: loading ? 'hidden' : 'visible',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <span>{text}</span>
        </span>

        {/* Right Arrow Icon (animated in on hover) */}
        <AnimatePresence>
          {hovered && !loading && (
            <motion.span
              initial={{ opacity: 0, x: 5 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 5 }}
              transition={{ duration: 0.2 }}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <Icon type="Arrow" className="" />
            </motion.span>
          )}
        </AnimatePresence>

        {/* Loading Spinner */}
        {loading && (
          <span
            style={{
              position: 'absolute',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ClipLoader color={finalTextColor} size={20} />
          </span>
        )}
      </button>
    </div>
  );
};

// Examples of how to use this component

{
  /* <ButtonComponent text="Submit" onClick={() => alert('Submitted!')} />
<ButtonComponent
  text="Cancel"
  variant="outline"
  bg_color="#ef4444" // red outline
  onClick={() => console.log('Cancelled')}
/>
<ButtonComponent
  text="Continue"
  active={false} // disables click and dims button
/>
<ButtonComponent
  text="Sign In"
  fullWidth
  bg_color="#16a34a" // green
  onClick={() => console.log('Signing in...')}
/>

const [loading, setLoading] = useState(false);

<ButtonComponent
  text="Place Order"
  loading={loading}
  onClick={() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000); // simulate API call
  }}
/>

<ButtonComponent
  text="Custom Styled"
  bg_color="#9333ea" // purple
  text_color="yellow"
  border_color="#facc15"
  minWidth="180px"
  onClick={() => console.log('Custom button clicked')}
/>
<div style={{ display: 'flex', gap: '1rem' }}>
  <ButtonComponent text="Accept" bg_color="#22c55e" />
  <ButtonComponent text="Reject" variant="outline" bg_color="#ef4444" />
</div>

<ButtonComponent
  text="Next Step"
  onClick={() => console.log('Next step')}
  bg_color="#3b82f6"
/>


import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

<ButtonComponent
  text="Go to Dashboard"
  onClick={() => navigate('/dashboard')}
/> */
}
