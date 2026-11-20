import React from 'react';

export const KonarkEmblem: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle cx="20" cy="20" r="17.5" stroke="currentColor" strokeWidth="1.75" />
    <circle cx="20" cy="20" r="11.5" stroke="currentColor" strokeWidth="1.25" strokeDasharray="2 2.5" />
    <circle cx="20" cy="20" r="4" fill="#D5AD59" stroke="currentColor" strokeWidth="1.25" />
    <path
      d="M20 2.5V8.5M20 31.5V37.5M2.5 20H8.5M31.5 20H37.5M7.6 7.6L11.8 11.8M28.2 28.2L32.4 32.4M32.4 7.6L28.2 11.8M11.8 28.2L7.6 32.4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const TarakasiDivider: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex items-center justify-center gap-4 text-[#D5AD59] ${className}`} aria-hidden="true">
    <span className="h-px flex-1 bg-[#49352D]/12" />
    <svg width="68" height="16" viewBox="0 0 68 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="2.25" fill="#A64B32" />
      <path d="M16 8C19.5 3.5 24.5 3.5 28 8C24.5 12.5 19.5 12.5 16 8Z" stroke="currentColor" strokeWidth="1.35" />
      <circle cx="34" cy="8" r="4" stroke="#A64B32" strokeWidth="1.5" />
      <circle cx="34" cy="8" r="1.5" fill="#D5AD59" />
      <path d="M40 8C43.5 3.5 48.5 3.5 52 8C48.5 12.5 43.5 12.5 40 8Z" stroke="currentColor" strokeWidth="1.35" />
      <circle cx="60" cy="8" r="2.25" fill="#A64B32" />
    </svg>
    <span className="h-px flex-1 bg-[#49352D]/12" />
  </div>
);
