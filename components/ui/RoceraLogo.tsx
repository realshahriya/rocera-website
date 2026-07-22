export function RoceraLogo({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Rocera logo"
    >
      {/* Feather shaft */}
      <line
        x1="24"
        y1="44"
        x2="24"
        y2="8"
        stroke="#6366f1"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Feather barbs — left */}
      <path
        d="M24 12 L12 20 L24 22"
        stroke="#6b7280"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M24 18 L10 27 L24 29"
        stroke="#6b7280"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M24 24 L13 33 L24 34"
        stroke="#6b7280"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
        opacity="0.5"
      />
      {/* Feather barbs — right */}
      <path
        d="M24 12 L36 20 L24 22"
        stroke="#6b7280"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M24 18 L38 27 L24 29"
        stroke="#6b7280"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M24 24 L35 33 L24 34"
        stroke="#6b7280"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
        opacity="0.5"
      />
      {/* Hidden quasar — starburst at center */}
      <g transform="translate(24, 22)">
        <line x1="0" y1="-4" x2="0" y2="4" stroke="#c9a84c" strokeWidth="1" strokeLinecap="round" opacity="0.9" />
        <line x1="-4" y1="0" x2="4" y2="0" stroke="#c9a84c" strokeWidth="1" strokeLinecap="round" opacity="0.9" />
        <line x1="-2.8" y1="-2.8" x2="2.8" y2="2.8" stroke="#c9a84c" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
        <line x1="2.8" y1="-2.8" x2="-2.8" y2="2.8" stroke="#c9a84c" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
        <circle cx="0" cy="0" r="1.2" fill="#c9a84c" opacity="0.95" />
      </g>
      {/* Feather tip */}
      <path
        d="M20 8 Q24 4 28 8"
        stroke="#6366f1"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}
