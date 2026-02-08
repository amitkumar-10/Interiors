interface LogoProps {
  variant?: 'full' | 'icon' | 'text';
  scrolled?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ variant = 'full', scrolled = false, size = 'md' }: LogoProps) {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const textColorMap = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  const textColor = scrolled ? 'text-gray-900' : 'text-white';

  const iconColor = scrolled ? '#1f2937' : '#ffffff';

  if (variant === 'icon') {
    return (
      <svg
        viewBox="0 0 40 40"
        className={sizeMap[size]}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={scrolled ? '#8B5A3C' : '#D4A574'} />
            <stop offset="100%" stopColor={scrolled ? '#5A3A2A' : '#B8956A'} />
          </linearGradient>
        </defs>

        <path
          d="M8 32V16C8 14.9 8.9 14 10 14H30C31.1 14 32 14.9 32 16V32M14 32V22M26 32V22M12 20H28M11 14L8 10M29 14L32 10"
          stroke="url(#gradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        <circle cx="20" cy="9" r="2" fill="url(#gradient)" />

        <path
          d="M20 6L23 12M20 6L17 12"
          stroke="url(#gradient)"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
    );
  }

  if (variant === 'text') {
    return (
      <div className={`font-bold tracking-tight ${textColor}`}>
        <div className={`${textColorMap[size]}`}>Shiv Shakti</div>
        <div className="text-xs font-semibold opacity-80">INTERIORS</div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <svg
          viewBox="0 0 40 40"
          className={sizeMap[size]}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={scrolled ? '#8B5A3C' : '#D4A574'} />
              <stop offset="100%" stopColor={scrolled ? '#5A3A2A' : '#B8956A'} />
            </linearGradient>
          </defs>

          <path
            d="M8 32V16C8 14.9 8.9 14 10 14H30C31.1 14 32 14.9 32 16V32M14 32V22M26 32V22M12 20H28M11 14L8 10M29 14L32 10"
            stroke="url(#gradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          <circle cx="20" cy="9" r="2" fill="url(#gradient)" />

          <path
            d="M20 6L23 12M20 6L17 12"
            stroke="url(#gradient)"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>
      </div>

      <div className={`font-bold tracking-tight ${textColor}`}>
        <div className={`${textColorMap[size]}`}>Shiv Shakti</div>
        <div className="text-xs font-semibold opacity-80">INTERIORS</div>
      </div>
    </div>
  );
}
