// Design & Development Tool Logos for landing page
import React from 'react';
import { TextLogo } from './CompanyLogos';

export const VectornatorLogo = () => (
  <svg viewBox="0 0 40 40">
    <rect width="40" height="40" rx="8" fill="#F8F9FA" />
    <path d="M12 28 L20 10 L28 28 L26 28 L20 15 L14 28 Z" fill="#FF4757" />
    <circle cx="20" cy="10" r="2.5" fill="#FF4757" />
  </svg>
);

export const FigmaLogo = () => (
  <svg viewBox="0 0 40 40">
    <path d="M14 6h6v10h-6a5 5 0 0 1 0-10z" fill="#F24E1E" />
    <path d="M20 6h6a5 5 0 0 1 0 10h-6V6z" fill="#FF7262" />
    <path d="M14 16h6v10h-6a5 5 0 0 1 0-10z" fill="#A259FF" />
    <circle cx="25" cy="21" r="5" fill="#1ABCFE" />
    <path d="M14 26h6v5a5 5 0 0 1-5 5 5 5 0 0 1-1-10z" fill="#0ACF83" />
  </svg>
);

export const MazeLogo = () => (
  <svg viewBox="0 0 40 40">
    <path d="M6 26 Q12 14 20 20 Q28 26 34 14" fill="none" stroke="#0EA5E9" strokeWidth="4" strokeLinecap="round" />
    <path d="M6 26 Q12 14 20 20 Q28 26 34 14" fill="none" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" opacity="0.6" transform="translate(0, 4)" />
  </svg>
);

export const SplineLogo = () => (
  <svg viewBox="0 0 40 40">
    <defs>
      <radialGradient id="splineG" cx="0.3" cy="0.3">
        <stop offset="0" stopColor="#FFE5F1" />
        <stop offset="0.3" stopColor="#FF6B9D" />
        <stop offset="0.6" stopColor="#9333EA" />
        <stop offset="1" stopColor="#1E3A8A" />
      </radialGradient>
    </defs>
    <circle cx="20" cy="20" r="14" fill="url(#splineG)" />
  </svg>
);

export const ZeplinLogo = () => (
  <svg viewBox="0 0 40 40">
    <ellipse cx="20" cy="20" rx="15" ry="7" fill="#FFC940" />
    <circle cx="15" cy="18" r="1.5" fill="#1E293B" />
    <path d="M32 18 L38 14 L38 22 Z" fill="#FFC940" />
    <path d="M8 20 Q5 22 6 24" stroke="#FFC940" strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
);

export const MemoriselyLogo = () => (
  <svg viewBox="0 0 40 40">
    <rect x="6" y="10" width="22" height="22" rx="2" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1" />
    <rect x="12" y="6" width="22" height="22" rx="2" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" transform="rotate(8 23 17)" />
    <line x1="15" y1="14" x2="26" y2="14" stroke="#94A3B8" strokeWidth="1" />
    <line x1="15" y1="17" x2="28" y2="17" stroke="#94A3B8" strokeWidth="1" />
    <line x1="15" y1="20" x2="24" y2="20" stroke="#94A3B8" strokeWidth="1" />
  </svg>
);

export const UxAcademyLogo = () => (
  <svg viewBox="0 0 40 40">
    <circle cx="20" cy="20" r="16" fill="none" stroke="#10B981" strokeWidth="2" />
    <text x="20" y="25" fontFamily="Poppins, sans-serif" fontSize="12" fontWeight="700" textAnchor="middle" fill="#10B981">UX</text>
  </svg>
);

export const CourseraLogo = () => (
  <svg viewBox="0 0 40 40">
    <circle cx="20" cy="20" r="16" fill="#0056D2" />
    <path d="M26 15 Q22 12 18 14 Q13 17 14 22 Q15 27 20 27 Q24 27 26 25" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const AWSLogo = () => <TextLogo label="AWS" bg="#232F3E" fg="#FF9900" size={12} />;

export const DockerLogo = () => (
  <svg viewBox="0 0 40 40">
    <rect width="40" height="40" rx="6" fill="#2496ED" />
    <g fill="#fff">
      <rect x="14" y="15" width="3" height="3" />
      <rect x="18" y="15" width="3" height="3" />
      <rect x="22" y="15" width="3" height="3" />
      <rect x="14" y="19" width="3" height="3" />
      <rect x="18" y="19" width="3" height="3" />
      <rect x="22" y="19" width="3" height="3" />
      <path d="M28 18c-1-1-2.5-1-3.5 0-.5.5-.8 1-.8 1.5h-1.2v-6h-3v6h-3v-4h-3v4h-3v-3h-3v3H6c0 1.5.5 3 1.5 4s2.5 1.5 4 1.5h17c1.5 0 2.5-.5 3.5-1.5s1.5-2.5 1.5-4c0-.5-.2-1-.5-1.5z" />
    </g>
  </svg>
);

export const KubernetesLogo = () => (
  <svg viewBox="0 0 40 40">
    <path d="M20 8l9 5v10l-9 5-9-5V13z" fill="#326CE5" stroke="#fff" strokeWidth="1.5" />
    <circle cx="20" cy="20" r="4" fill="#fff" />
  </svg>
);

export const JenkinsLogo = () => <TextLogo label="JENKINS" bg="#D33833" fg="#fff" size={7} />;
export const GrafanaLogo = () => <TextLogo label="Grafana" bg="#F46800" fg="#fff" size={8} />;

export const ReactLogo = () => (
  <svg viewBox="0 0 40 40">
    <rect width="40" height="40" rx="6" fill="#20232A" />
    <circle cx="20" cy="20" r="2.5" fill="#61DAFB" />
    <g fill="none" stroke="#61DAFB" strokeWidth="1.3">
      <ellipse cx="20" cy="20" rx="11" ry="4.2" />
      <ellipse cx="20" cy="20" rx="11" ry="4.2" transform="rotate(60 20 20)" />
      <ellipse cx="20" cy="20" rx="11" ry="4.2" transform="rotate(120 20 20)" />
    </g>
  </svg>
);
