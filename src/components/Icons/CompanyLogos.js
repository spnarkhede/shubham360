// Company & Organization Logos for landing page
import React from 'react';

// Reusable Text Logo Component
export const TextLogo = ({ label, bg = '#1E293B', fg = '#fff', size = 11 }) => (
  <svg viewBox="0 0 40 40">
    <rect width="40" height="40" rx="6" fill={bg} />
    <text
      x="20"
      y="25"
      fontFamily="Poppins, sans-serif"
      fontSize={size}
      fontWeight="700"
      textAnchor="middle"
      fill={fg}
    >
      {label}
    </text>
  </svg>
);

export const BoschLogo = () => <TextLogo label="BOSCH" bg="#EA0016" fg="#fff" size={9} />;
export const BoschRexrothLogo = () => <TextLogo label="REXROTH" bg="#00529B" fg="#fff" size={8} />;
export const AmazonLogo = () => <TextLogo label="amazon" bg="#232F3E" fg="#FF9900" size={10} />;
export const TUChemnitzLogo = () => <TextLogo label="TUC" bg="#006E9F" fg="#fff" size={12} />;
export const NagpurUniLogo = () => <TextLogo label="RTMNU" bg="#B4861F" fg="#fff" size={9} />;

export const MetaLogo = () => (
  <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="metaG" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stopColor="#0081FB" />
        <stop offset="0.5" stopColor="#0064E0" />
        <stop offset="1" stopColor="#8A3DE8" />
      </linearGradient>
    </defs>
    <path
      d="M20 11c-4 0-6 4-8 7-2 3-3 5-5 5-1 0-2-1-2-3 0-3 2-7 4-7 1 0 2 1 3 2l1-2c-1-1-3-3-5-3-4 0-6 5-6 8 0 4 2 6 5 6 3 0 5-3 7-6 2-3 3-5 5-5 2 0 3 2 5 5 2 3 4 6 7 6 3 0 5-2 5-6 0-3-2-8-6-8-2 0-3 2-4 3l1 2c1-1 2-2 3-2 2 0 4 4 4 7 0 2-1 3-2 3-2 0-3-2-5-5-2-3-4-7-8-7z"
      fill="url(#metaG)"
    />
  </svg>
);

export const AppleLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--text-primary)' }}>
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
  </svg>
);

export const TeslaLogo = () => (
  <svg viewBox="0 0 40 40">
    <rect width="40" height="40" rx="8" fill="#E31937" />
    <path d="M8 12 L32 12 L32 17 L22.5 17 L22.5 30 L17.5 30 L17.5 17 L8 17 Z" fill="#fff" />
  </svg>
);

export const GoogleLogo = () => (
  <svg viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);
