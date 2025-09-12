import React, { useState } from 'react';

export interface Tab {
  id: string;
  label: string;
}

export interface TabBarProps {
  tabs: Tab[];
  defaultActiveTab?: string;
  onTabChange?: (tabId: string, tabLabel: string) => void;
  variant?: 'default' | 'minimal' | 'pills' | 'elevated';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  showActiveIndicator?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

export const TabBar: React.FC<TabBarProps> = ({
  tabs,
  defaultActiveTab,
  onTabChange,
  variant = 'default',
  size = 'medium',
  fullWidth = false,
  showActiveIndicator = true,
  style,
  className,
}) => {
  const [activeTab, setActiveTab] = useState(
    defaultActiveTab || (tabs.length > 0 ? tabs[0].id : '')
  );

  const handleTabClick = (tabId: string, tabLabel: string) => {
    setActiveTab(tabId);
    if (onTabChange) {
      onTabChange(tabId, tabLabel);
      console.log(`📊 Tab changed to: ${tabLabel} (ID: ${tabId})`);
    }
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    width: fullWidth ? '100%' : 'auto',
    borderBottom: variant === 'default' ? '1px solid #e1e5e9' : 'none',
    marginBottom: '1rem',
    gap: variant === 'elevated' ? '0.5rem' : '0',
    ...style,
  };

  const getTabStyle = (isActive: boolean): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      padding:
        size === 'small' ? '0.5rem 1rem' : size === 'medium' ? '0.75rem 1.5rem' : '1rem 2rem',
      fontSize: size === 'small' ? '0.875rem' : size === 'medium' ? '1rem' : '1.125rem',
      fontWeight: isActive ? '600' : '400',
      border: 'none',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      position: 'relative',
      flex: fullWidth ? 1 : 'auto',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      color: isActive ? '#2c3e50' : '#7f8c8d',
      borderRadius: variant === 'elevated' ? '8px' : '0',
    };

    if (variant === 'default') {
      return {
        ...baseStyle,
        borderBottom:
          isActive && showActiveIndicator ? '3px solid #3498db' : '2px solid transparent',
        marginBottom: '-1px',
        backgroundColor: isActive ? '#f8f9fa' : 'transparent',
      };
    }

    if (variant === 'minimal') {
      return {
        ...baseStyle,
        borderBottom: isActive && showActiveIndicator ? '2px solid #3498db' : 'none',
        backgroundColor: isActive ? '#f8f9fa' : 'transparent',
      };
    }

    if (variant === 'pills') {
      return {
        ...baseStyle,
        backgroundColor: isActive ? '#3498db' : '#f8f9fa',
        color: isActive ? 'white' : '#7f8c8d',
        borderRadius: '2rem',
        margin: '0 0.25rem',
        boxShadow: isActive ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
      };
    }

    // if (variant === 'elevated') {
    //   return {
    //     ...baseStyle,
    //     backgroundColor: isActive ? '#ffffff' : '#f8f9fa',
    //     color: isActive ? '#3498db' : '#7f8c8d',
    //     borderRadius: '8px',
    //     boxShadow: isActive
    //       ? '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)'
    //       : '0 1px 2px rgba(0, 0, 0, 0.05)',
    //     border: isActive ? '1px solid #e1e5e9' : '1px solid transparent',
    //     transform: isActive ? 'translateY(-1px)' : 'none',
    //   };
    // }

    if (variant === 'elevated') {
      return {
        ...baseStyle,
        backgroundColor: isActive ? '#ffffff' : 'transparent',
        color: isActive ? '#3498db' : '#000000',
        borderRadius: '8px',
        boxShadow: isActive
          ? '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)'
          : 'none',
        border: isActive ? '1px solid #e1e5e9' : '1px solid transparent',
        transform: isActive ? 'translateY(-1px)' : 'none',
      };
    }

    return baseStyle;
  };

  return (
    <div style={containerStyle} className={className}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          style={getTabStyle(activeTab === tab.id)}
          onClick={() => handleTabClick(tab.id, tab.label)}
          role="tab"
          aria-selected={activeTab === tab.id}
          onMouseOver={(e) => {
            if (variant === 'elevated' && activeTab !== tab.id) {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
            }
          }}
          onMouseOut={(e) => {
            if (variant === 'elevated' && activeTab !== tab.id) {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
            }
          }}
        >
          {tab.label}
          {variant === 'minimal' && activeTab === tab.id && showActiveIndicator && (
            <div
              style={{
                position: 'absolute',
                bottom: '-1px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '6px',
                height: '6px',
                backgroundColor: '#3498db',
                borderRadius: '50%',
              }}
            />
          )}
        </button>
      ))}
    </div>
  );
};
