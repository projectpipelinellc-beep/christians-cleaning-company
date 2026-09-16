/**
 * Custom line-art compositions used in place of photography.
 *
 * No authentic business photography or logo was available at build
 * time, and the brief calls for never inventing a logo and never using
 * stock photos in a way that implies they are real company photos. These
 * illustrations are original, drawn to the site's palette, and can be
 * swapped for real photography later by replacing the component usage
 * in HeroSection and IntroSection with an <Image /> once photos exist.
 */

export function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 480 560"
      className="h-full w-full"
      role="img"
      aria-label="Illustration of a tidy, sunlit room corner with a window, a plant, and folded linens"
    >
      <rect x="0" y="0" width="480" height="560" rx="12" fill="#EBEFE4" />
      <rect x="0" y="0" width="480" height="560" rx="12" fill="none" stroke="#B9C6AD" strokeWidth="1" />

      {/* sun rays */}
      <g stroke="#B08D57" strokeWidth="1.4" strokeLinecap="round" opacity="0.55">
        <line x1="372" y1="40" x2="372" y2="16" />
        <line x1="404" y1="52" x2="422" y2="34" />
        <line x1="416" y1="80" x2="440" y2="80" />
      </g>
      <circle cx="372" cy="80" r="22" fill="none" stroke="#B08D57" strokeWidth="1.4" opacity="0.7" />

      {/* window */}
      <g>
        <rect x="60" y="60" width="220" height="280" rx="6" fill="#FBF8F2" stroke="#22362B" strokeWidth="2" />
        <line x1="170" y1="60" x2="170" y2="340" stroke="#22362B" strokeWidth="2" />
        <line x1="60" y1="200" x2="280" y2="200" stroke="#22362B" strokeWidth="2" />
        {/* faint landscape line beyond glass */}
        <path d="M60 300 Q120 270 170 300 T280 290" stroke="#B9C6AD" strokeWidth="2" fill="none" />
      </g>

      {/* sill */}
      <rect x="52" y="340" width="236" height="10" rx="2" fill="#22362B" />

      {/* potted plant on sill */}
      <g transform="translate(78,300)">
        <path d="M0 40 C-14 20 -10 -6 0 -18 C10 -6 14 20 0 40 Z" fill="none" stroke="#22362B" strokeWidth="2" />
        <path d="M0 30 C-8 14 -6 -2 0 -10 C6 -2 8 14 0 30 Z" fill="none" stroke="#22362B" strokeWidth="1.4" />
        <path d="M-16 40 h32 l-4 26 h-24 Z" fill="#FBF8F2" stroke="#22362B" strokeWidth="2" />
      </g>

      {/* folded linen stack, bottom right of scene */}
      <g transform="translate(320,250)">
        <rect x="0" y="70" width="130" height="26" rx="4" fill="#FBF8F2" stroke="#22362B" strokeWidth="1.8" />
        <rect x="8" y="40" width="114" height="26" rx="4" fill="#FBF8F2" stroke="#22362B" strokeWidth="1.8" />
        <rect x="16" y="10" width="98" height="26" rx="4" fill="#FBF8F2" stroke="#22362B" strokeWidth="1.8" />
        <line x1="16" y1="23" x2="98" y2="23" stroke="#B9C6AD" strokeWidth="1.4" />
        <line x1="8" y1="53" x2="114" y2="53" stroke="#B9C6AD" strokeWidth="1.4" />
        <line x1="0" y1="83" x2="122" y2="83" stroke="#B9C6AD" strokeWidth="1.4" />
      </g>

      {/* floor line */}
      <line x1="40" y1="430" x2="440" y2="430" stroke="#B9C6AD" strokeWidth="1.4" />

      {/* small rug */}
      <rect x="120" y="440" width="220" height="60" rx="8" fill="none" stroke="#22362B" strokeWidth="1.6" />
      <rect x="136" y="454" width="188" height="32" rx="4" fill="none" stroke="#B9C6AD" strokeWidth="1.2" />
    </svg>
  );
}

export function IntroIllustration() {
  return (
    <svg
      viewBox="0 0 480 360"
      className="h-full w-full"
      role="img"
      aria-label="Illustration of a folded towel and a sprig of leaves"
    >
      <rect x="0" y="0" width="480" height="360" rx="12" fill="#F3EEE3" />
      <rect x="0" y="0" width="480" height="360" rx="12" fill="none" stroke="#B9C6AD" strokeWidth="1" />

      <g transform="translate(150,110)">
        <rect x="0" y="90" width="180" height="34" rx="5" fill="#FBF8F2" stroke="#22362B" strokeWidth="1.8" />
        <rect x="14" y="52" width="152" height="34" rx="5" fill="#FBF8F2" stroke="#22362B" strokeWidth="1.8" />
        <rect x="28" y="14" width="124" height="34" rx="5" fill="#FBF8F2" stroke="#22362B" strokeWidth="1.8" />
        <line x1="28" y1="31" x2="152" y2="31" stroke="#B9C6AD" strokeWidth="1.2" />
        <line x1="14" y1="69" x2="166" y2="69" stroke="#B9C6AD" strokeWidth="1.2" />
        <line x1="0" y1="107" x2="180" y2="107" stroke="#B9C6AD" strokeWidth="1.2" />
      </g>

      <g transform="translate(258,60) rotate(18)" stroke="#22362B" strokeWidth="1.6" fill="none" strokeLinecap="round">
        <path d="M0 60 C-4 30 4 8 18 -10" />
        <path d="M2 46 C-6 40 -14 40 -20 34" />
        <path d="M6 26 C0 18 -8 16 -16 12" />
        <path d="M10 8 C6 0 -2 -4 -10 -6" />
      </g>
    </svg>
  );
}
