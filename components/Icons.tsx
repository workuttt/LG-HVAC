import React from 'react';

export const SendIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="transform"
  >
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

export const LgBotIcon: React.FC = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24"
    >
        <circle cx="12" cy="12" r="12" fill="#DC2626"/>
        <g>
            {/* Chat bubble body */}
            <path d="M7.5,7 C6.67,7 6,7.67 6,8.5 L6,12.5 C6,13.33 6.67,14 7.5,14 L9,14 L9,16.5 C9,16.7 9.22,16.82 9.4,16.72 L12.4,14 L16.5,14 C17.33,14 18,13.33 18,12.5 L18,8.5 C18,7.67 17.33,7 16.5,7 L7.5,7 Z" fill="white" />
            {/* Eyes */}
            <circle cx="10" cy="10.5" r="1" fill="#DC2626" />
            <circle cx="14" cy="10.5" r="1" fill="#DC2626" />
        </g>
    </svg>
);


export const UserIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
    </svg>
);

export const VrfIcon: React.FC = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="28" 
    height="28" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M22 12h-4.2" />
    <path d="M2 12h4.2" />
    <path d="M12 2v4.2" />
    <path d="M12 22v-4.2" />
    <path d="m17 7-3.2 3.2" />
    <path d="M7 17l3.2-3.2" />
    <path d="m7 7 3.2 3.2" />
    <path d="m17 17-3.2-3.2" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

export const ScheduleIcon: React.FC = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="28" 
    height="28" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <path d="M8 14h.01" />
    <path d="M12 14h.01" />
    <path d="M16 14h.01" />
    <path d="M8 18h.01" />
    <path d="M12 18h.01" />
    <path d="M16 18h.01" />
  </svg>
);

export const SupportIcon: React.FC = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="28" 
    height="28" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h4" />
    <path d="m16 18-2-2-2 2" />
    <path d="m14 16 2 2 2-2" />
    <path d="M18 22a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
    <path d="M3 10h18" />
  </svg>
);