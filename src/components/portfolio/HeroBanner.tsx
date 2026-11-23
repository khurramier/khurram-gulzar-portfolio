/** Minimalist abstract wave banner — purely decorative, no text overlay. */
export function HeroBanner() {
  return (
    <div className="relative h-[150px] w-full overflow-hidden bg-banner-base md:h-[210px]" aria-hidden="true">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 210"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* faint dot grid */}
        <defs>
          <pattern id="kg-dots" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" className="fill-banner-slate" opacity="0.18" />
          </pattern>
        </defs>
        <rect x="900" y="0" width="540" height="210" fill="url(#kg-dots)" />

        {/* back wave — slate */}
        <path
          d="M0 120 C 180 70, 360 160, 560 118 S 940 50, 1140 96 S 1360 150, 1440 112 L1440 210 L0 210 Z"
          className="fill-banner-slate"
          opacity="0.28"
        />
        {/* middle wave — navy */}
        <path
          d="M0 156 C 220 110, 420 196, 660 150 S 1040 92, 1240 140 S 1400 176, 1440 160 L1440 210 L0 210 Z"
          className="fill-banner-navy"
          opacity="0.9"
        />
        {/* crimson accent line */}
        <path
          d="M0 138 C 200 96, 400 176, 620 134 S 1000 70, 1200 116 S 1390 160, 1440 138"
          fill="none"
          className="stroke-banner-crimson"
          strokeWidth="2.5"
        />
        {/* thin slate contour lines */}
        <path
          d="M0 92 C 240 50, 420 128, 640 92 S 1020 30, 1240 70 S 1400 108, 1440 92"
          fill="none"
          className="stroke-banner-slate"
          strokeWidth="1"
          opacity="0.45"
        />
        <path
          d="M0 70 C 260 30, 460 104, 700 70 S 1060 14, 1280 50 S 1410 82, 1440 72"
          fill="none"
          className="stroke-banner-slate"
          strokeWidth="1"
          opacity="0.25"
        />

        {/* geometric accents */}
        <circle cx="1180" cy="54" r="22" fill="none" className="stroke-banner-navy" strokeWidth="1.5" opacity="0.6" />
        <circle cx="1180" cy="54" r="6" className="fill-banner-crimson" />
        <rect x="1300" y="30" width="28" height="28" fill="none" className="stroke-banner-slate" strokeWidth="1.5" opacity="0.55" transform="rotate(18 1314 44)" />
        <polygon points="1060,40 1076,66 1044,66" className="fill-banner-slate" opacity="0.35" />
      </svg>
    </div>
  );
}
