import type { SVGProps } from "react";

/* =========================================================================
   Custom Hand-drawn SVG Icons
   Style: slightly imperfect stroke widths, rounded terminals, organic
   ========================================================================== */

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const baseProps = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export function IconSeed({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size)} {...rest}>
      <path d="M12 3c-3.5 4-5.5 7-5.5 10a5.5 5.5 0 0 0 11 0c0-3-2-6-5.5-10z" />
      <path d="M12 21V14" />
      <path d="M9 17c1.5-1 4.5-1 6 0" />
    </svg>
  );
}

export function IconWheat({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size)} {...rest}>
      <path d="M12 21V10" />
      <path d="M12 10C9 10 7 8 7 5c2 0 4 2 5 5" />
      <path d="M12 13C9 13 7 11 7 8c2 0 4 2 5 5" />
      <path d="M12 7C15 7 17 5 17 2c-2 0-4 2-5 5" />
      <path d="M12 10c3 0 5-2 5-5-2 0-4 2-5 5" />
      <path d="M5 19c3-1.5 6-1.5 9 0" />
      <path d="M10 21c0-1.5 4-1.5 4 0" />
    </svg>
  );
}

export function IconFactory({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size)} {...rest}>
      <path d="M3 21V10l5 3V10l5 3V7h5v14H3z" />
      <path d="M7 18h1" />
      <path d="M12 18h1" />
      <path d="M17 18h1" />
      <path d="M7 14h1" />
      <path d="M12 14h1" />
      <path d="M19 5c0-2 2-3 2-3s2 1 2 3-1 3-2 3-2-1-2-3z" />
    </svg>
  );
}

export function IconBox({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size)} {...rest}>
      <path d="M2.5 7.5 12 3l9.5 4.5v9L12 21l-9.5-4.5v-9z" />
      <path d="M2.5 7.5 12 12l9.5-4.5" />
      <path d="M12 12v9" />
      <path d="M7 5l5 2.5L17 5" />
    </svg>
  );
}

export function IconPlate({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size)} {...rest}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <path d="M8 12c.5 1.5 1.8 2.5 4 2.5s3.5-1 4-2.5" />
      <path d="M10 9h.01" />
    </svg>
  );
}

export function IconGlobe({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size)} {...rest}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18z" />
      <path d="M5 5c2.5 2 6.5 3 7 3s4.5-1 7-3" />
      <path d="M5 19c2.5-2 6.5-3 7-3s4.5 1 7 3" />
    </svg>
  );
}

export function IconCart({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size)} {...rest}>
      <circle cx="9" cy="20" r="1.5" />
      <circle cx="18" cy="20" r="1.5" />
      <path d="M3 3h2l2.5 11h10l1.5-7H6" />
      <path d="M7 8c1.5-1 4.5-1.5 7-0.5" />
    </svg>
  );
}

export function IconFarmers({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size)} {...rest}>
      <circle cx="8" cy="8" r="3" />
      <circle cx="16" cy="10" r="2.5" />
      <path d="M3 20c0-2.5 2-4 5-4s5 1.5 5 4" />
      <path d="M12 20c0-2 2-3.5 4-3.5s4 1.5 4 3.5" />
      <path d="M6 12l-1 4" />
    </svg>
  );
}

export function IconTruck({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size)} {...rest}>
      <path d="M2 16V8h10v8H2z" />
      <path d="M12 10h4l3 3v3h-7" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  );
}

export function IconHandshake({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size)} {...rest}>
      <path d="M11 17 2 9l2-2 7 6" />
      <path d="M13 17 22 9l-2-2-7 6" />
      <path d="m12 12 1.5-1.5c1-1 2.5-1 3.5 0" />
      <path d="m9 11-1.5-1.5c-1-1-1-2.5 0-3.5l2-2c1-1 2.5-1 3.5 0" />
    </svg>
  );
}

export function IconBriefcase({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size)} {...rest}>
      <rect x="3" y="8" width="18" height="13" rx="2" />
      <path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      <path d="M3 14h18" />
    </svg>
  );
}

export function IconUser({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size)} {...rest}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
    </svg>
  );
}

export function IconCommunities({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size)} {...rest}>
      <circle cx="9" cy="8" r="2.5" />
      <circle cx="17" cy="10" r="2" />
      <circle cx="5" cy="12" r="1.5" />
      <path d="M2 20c0-3 3-5 7-5s7 2 7 5" />
      <path d="M14 20c0-2 2-4 5-4s3 2 3 4" />
      <path d="M2 17c1-1 2.5-1.5 4-1" />
    </svg>
  );
}

export function IconJobs({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size)} {...rest}>
      <rect x="3" y="8" width="18" height="12" rx="1.5" />
      <path d="M8 8V5a1.5 1.5 0 0 1 1.5-1.5h5A1.5 1.5 0 0 1 16 5v3" />
      <path d="M8 14h.01M12 14h.01M16 14h.01" />
    </svg>
  );
}

export function IconCapacity({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size)} {...rest}>
      <path d="M3 20c0-1 2-2 4-2s4 1 4 2 2 2 4 2 4-1 4-2" />
      <path d="M5 18V10l4-5 4 8 4-6v11" />
    </svg>
  );
}

export function IconMarkets({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size)} {...rest}>
      <path d="M3 11V7h18v4" />
      <path d="M5 11c0 1 .5 2 1 2h12c.5 0 1-1 1-2" />
      <path d="M5 11v9h2v-4h10v4h2v-9" />
      <path d="M8 4l1 3M16 4l-1 3M12 3l.5 3" />
    </svg>
  );
}

export function IconProductsIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size)} {...rest}>
      <path d="M4 7l8-4 8 4-8 4-8-4z" />
      <path d="M4 7v10l8 4 8-4V7" />
      <path d="M12 11v10" />
    </svg>
  );
}

/* ====== Hand-drawn Social icons (custom, matches brand style) ====== */

export function IconInstagram(props: IconProps) {
  const s = props.size ?? 20;
  return (
    <svg {...baseProps(s)} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}
export function IconLinkedIn(props: IconProps) {
  const s = props.size ?? 20;
  return (
    <svg {...baseProps(s)} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7.5 10v7" />
      <circle cx="7.5" cy="7.5" r="1" fill="currentColor" />
      <path d="M11 17v-4.5c0-1.5 2-1.8 2 0V17" />
      <path d="M16.5 17v-4.5c0-2.5-3.5-2.7-3.5-0.5V17" />
    </svg>
  );
}
export function IconFacebook(props: IconProps) {
  const s = props.size ?? 20;
  return (
    <svg {...baseProps(s)} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M13.5 8h-2a1.5 1.5 0 0 0-1.5 1.5V11h-1v2h1v5h2.5v-5h1.5l.5-2H12.5v-0.5a.5.5 0 0 1 .5-.5h1V8z" />
    </svg>
  );
}
export function IconTwitter(props: IconProps) {
  const s = props.size ?? 20;
  return (
    <svg {...baseProps(s)} {...props}>
      <path d="M4 4l7.5 9.5L4.5 20h2l6.5-6.5L17 20h3l-7.8-9.9L19 4h-2l-5.8 5.8L8 4H4z" />
    </svg>
  );
}
export function IconYoutube(props: IconProps) {
  const s = props.size ?? 20;
  return (
    <svg {...baseProps(s)} {...props}>
      <rect x="2" y="5.5" width="20" height="13" rx="4" />
      <path d="M15.5 12l-4.5 2.8V9.2L15.5 12z" fill="currentColor" />
    </svg>
  );
}

/* ====== Generic UI icons (hand-drawn style) ====== */

export function IconMenu(props: IconProps) {
  const s = props.size ?? 24;
  return (
    <svg {...baseProps(s)} {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h10" />
    </svg>
  );
}
export function IconX(props: IconProps) {
  const s = props.size ?? 24;
  return (
    <svg {...baseProps(s)} {...props}>
      <path d="M5 5l14 14" />
      <path d="M19 5L5 19" />
    </svg>
  );
}
export function IconArrowRight(props: IconProps) {
  const s = props.size ?? 20;
  return (
    <svg {...baseProps(s)} {...props}>
      <path d="M4 12h15" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}
export function IconArrowDown(props: IconProps) {
  const s = props.size ?? 20;
  return (
    <svg {...baseProps(s)} {...props}>
      <path d="M12 4v15" />
      <path d="m5 13 7 7 7-7" />
    </svg>
  );
}
export function IconArrowUpRight(props: IconProps) {
  const s = props.size ?? 18;
  return (
    <svg {...baseProps(s)} {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}
export function IconMail(props: IconProps) {
  const s = props.size ?? 20;
  return (
    <svg {...baseProps(s)} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}
export function IconPhone(props: IconProps) {
  const s = props.size ?? 20;
  return (
    <svg {...baseProps(s)} {...props}>
      <path d="M5 4c0-1 .7-2 1.7-2h1.2c.4 0 .8.3.9.7l.7 3.2c.1.4 0 .8-.3 1.1l-1.6 1.6c.8 1.9 2.3 3.4 4.2 4.2l1.6-1.6c.3-.3.7-.4 1.1-.3l3.2.7c.4.1.7.5.7.9V18c0 1-.9 2-2 2-8 0-13-5-13-14z" />
    </svg>
  );
}
export function IconMapPin(props: IconProps) {
  const s = props.size ?? 20;
  return (
    <svg {...baseProps(s)} {...props}>
      <path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}
export function IconChevronRight(props: IconProps) {
  const s = props.size ?? 20;
  return (
    <svg {...baseProps(s)} {...props}>
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}
export function IconChevronLeft(props: IconProps) {
  const s = props.size ?? 20;
  return (
    <svg {...baseProps(s)} {...props}>
      <path d="m15 6-6 6 6 6" />
    </svg>
  );
}
export function IconSearch(props: IconProps) {
  const s = props.size ?? 20;
  return (
    <svg {...baseProps(s)} {...props}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-4-4" />
    </svg>
  );
}
