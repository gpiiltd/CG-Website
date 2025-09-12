import { ClipLoader } from 'react-spinners';

interface ButtonProps {
  text: string;
  loading?: boolean;
  onClick?: () => void;
  active?: boolean;
  bg_color?: string;
  text_color?: string;
  border_color?: string;
  icon?: React.ReactNode;
  iconPosition?: 'prefix' | 'suffix';
  width?: string;
  variant?: 'solid' | 'outline';
}

export const ButtonComponent: React.FC<ButtonProps> = ({
  text,
  loading = false,
  onClick,
  active = true,
  bg_color = '#3b82f6',
  text_color, // No default, will be set based on variant
  border_color, // No default, will be set based on variant
  icon,
  iconPosition = 'suffix',
  width = '100%',
  variant = 'solid',
}) => {
  // Determine styles based on variant
  const isOutline = variant === 'outline';

  // Set default colors based on variant
  const finalTextColor = text_color || (isOutline ? bg_color : 'white');
  const finalBorderColor = border_color || (isOutline ? bg_color : bg_color);
  const finalBgColor = isOutline ? 'transparent' : bg_color;

  const containerStyle: React.CSSProperties = {
    cursor: active ? 'pointer' : 'default',
    fontSize: '1rem',
    borderRadius: '60px',
    transition: 'all 0.3s',
    backgroundColor: finalBgColor,
    color: finalTextColor,
    opacity: active ? 1 : 0.7,
    borderColor: active ? finalBorderColor : 'transparent',
    borderStyle: 'solid',
    padding: '0.6rem 1.2rem',
    borderWidth: '1px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    minWidth: '120px',
    boxShadow: active && !isOutline ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
    fontFamily: 'system-ui, sans-serif',
  };

  const buttonStyle: React.CSSProperties = {
    border: 'none',
    display: 'flex',
    justifyContent: 'center',
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
    <div style={containerStyle} onClick={active && !loading ? onClick : undefined}>
      <button
        onClick={active && !loading ? onClick : undefined}
        disabled={loading || !active}
        style={buttonStyle}
      >
        <span
          style={{
            visibility: loading ? 'hidden' : 'visible',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            flexDirection: iconPosition === 'prefix' ? 'row' : 'row-reverse',
          }}
        >
          {icon && <span>{icon}</span>}
          <span>{text}</span>
        </span>
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

//example code for buttons
//  <br />
//         <ButtonComponent
//           text="Click me"
//           loading={isLoading}
//           onClick={handleClick}
//           bg_color="#3b82f6"
//           width="30%"
//         />
//         <br />
//         <ButtonComponent
//           text="Outline with Icon"
//           variant="outline"
//           bg_color="#10b981"
//           iconPosition="prefix"
//           width="30%"
//         />
