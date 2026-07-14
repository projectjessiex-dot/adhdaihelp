import React from "react";

type P = { size?: number; color?: string; className?: string; style?: React.CSSProperties };

function mk(children: React.ReactNode) {
  return function Icon({ size = 20, color = "currentColor", className, style }: P) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
        stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"
        className={className} style={style} aria-hidden="true">
        {children}
      </svg>
    );
  };
}

export const BrainIcon = mk(<>
  <line x1="12" y1="6" x2="12" y2="20" />
  <path d="M12 6C11 4 9 3 7 3C4.5 3 3 4.8 3 7C3 8.5 3.8 9.7 5 10.3C4 11 3 12.5 3 14C3 16.2 4.8 18 7 18.5C6.8 19.1 6.7 19.7 6.7 20.3" />
  <path d="M12 6C13 4 15 3 17 3C19.5 3 21 4.8 21 7C21 8.5 20.2 9.7 19 10.3C20 11 21 12.5 21 14C21 16.2 19.2 18 17 18.5C17.2 19.1 17.3 19.7 17.3 20.3" />
</>);

export const ClockIcon = mk(<>
  <circle cx="12" cy="12" r="9" />
  <line x1="12" y1="7" x2="12" y2="12" />
  <line x1="12" y1="12" x2="15.5" y2="14" />
</>);

export const ClipboardIcon = mk(<>
  <rect x="5" y="4" width="14" height="18" rx="2" />
  <rect x="9" y="2" width="6" height="4" rx="1" />
  <line x1="9" y1="11" x2="15" y2="11" />
  <line x1="9" y1="14" x2="15" y2="14" />
  <line x1="9" y1="17" x2="13" y2="17" />
</>);

export const LockIcon = mk(<>
  <rect x="4" y="11" width="16" height="11" rx="2" />
  <path d="M8 11V7C8 4.8 9.8 3 12 3s4 1.8 4 4v4" />
  <circle cx="12" cy="16" r="1.5" fill="currentColor" stroke="none" />
</>);

export const PersonIcon = mk(<>
  <circle cx="12" cy="8" r="4" />
  <path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8" />
</>);

export const MessageIcon = mk(
  <path d="M3 3h18c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1H13.5l-5 5v-5H3c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1z" />
);

export const SearchIcon = mk(<>
  <circle cx="11" cy="11" r="7.5" />
  <line x1="17" y1="17" x2="22" y2="22" />
</>);

export const WaveIcon = mk(
  <path d="M2 12c2-4 4 4 6 0s4-4 6 0 4 4 6 0" />
);

export const HeartIcon = mk(
  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
);

export const LayersIcon = mk(<>
  <polygon points="12 2 2 7 12 12 22 7 12 2" />
  <polyline points="2 17 12 22 22 17" />
  <polyline points="2 12 12 17 22 12" />
</>);

export const FlameIcon = mk(
  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
);

export const ShuffleIcon = mk(<>
  <polyline points="16 3 21 3 21 8" />
  <line x1="4" y1="20" x2="21" y2="3" />
  <polyline points="21 16 21 21 16 21" />
  <line x1="15" y1="15" x2="21" y2="21" />
  <line x1="4" y1="4" x2="9" y2="9" />
</>);

export const RepeatIcon = mk(<>
  <polyline points="17 1 21 5 17 9" />
  <path d="M3 11V9a4 4 0 0 1 4-4h14" />
  <polyline points="7 23 3 19 7 15" />
  <path d="M21 13v2a4 4 0 0 1-4 4H3" />
</>);

export const ArrowUpCircleIcon = mk(<>
  <circle cx="12" cy="12" r="10" />
  <polyline points="16 12 12 8 8 12" />
  <line x1="12" y1="16" x2="12" y2="8" />
</>);

export const GridIcon = mk(<>
  <rect x="3" y="3" width="7" height="7" />
  <rect x="14" y="3" width="7" height="7" />
  <rect x="14" y="14" width="7" height="7" />
  <rect x="3" y="14" width="7" height="7" />
</>);

export const TargetIcon = mk(<>
  <circle cx="12" cy="12" r="10" />
  <circle cx="12" cy="12" r="6" />
  <circle cx="12" cy="12" r="2" />
</>);

export const ZapIcon = mk(
  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
);

export const LightbulbIcon = mk(<>
  <line x1="9" y1="18" x2="15" y2="18" />
  <line x1="10" y1="22" x2="14" y2="22" />
  <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
</>);

export const PenIcon = mk(<>
  <path d="M12 20h9" />
  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
</>);

export const WindIcon = mk(
  <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
);

export const TrashIcon = mk(<>
  <polyline points="3 6 5 6 21 6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
</>);

export const SparkleIcon = mk(
  <path d="M12 3L13.5 8.5L19 10L13.5 11.5L12 17L10.5 11.5L5 10L10.5 8.5L12 3Z" />
);

export const BookOpenIcon = mk(<>
  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
</>);

export const FlaskIcon = mk(<>
  <path d="M8 2h8" />
  <path d="M9 2v6L5 20h14L15 8V2" />
  <line x1="7" y1="15" x2="17" y2="15" />
</>);

export const PrinterIcon = mk(<>
  <polyline points="6 9 6 2 18 2 18 9" />
  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
  <rect x="6" y="14" width="12" height="8" />
</>);

export const FlowerIcon = mk(<>
  <circle cx="12" cy="12" r="2.5" />
  <ellipse cx="12" cy="6.5" rx="2" ry="3.5" />
  <ellipse cx="12" cy="17.5" rx="2" ry="3.5" />
  <ellipse cx="6.5" cy="12" rx="3.5" ry="2" />
  <ellipse cx="17.5" cy="12" rx="3.5" ry="2" />
</>);

export const BarChartIcon = mk(<>
  <rect x="4" y="14" width="4" height="8" />
  <rect x="10" y="4" width="4" height="18" />
  <rect x="16" y="10" width="4" height="12" />
  <line x1="2" y1="22" x2="22" y2="22" />
</>);

export const SunIcon = mk(<>
  <circle cx="12" cy="12" r="4" />
  <line x1="12" y1="1" x2="12" y2="3" />
  <line x1="12" y1="21" x2="12" y2="23" />
  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
  <line x1="1" y1="12" x2="3" y2="12" />
  <line x1="21" y1="12" x2="23" y2="12" />
  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
</>);

export const CloudIcon = mk(<>
  <path d="M17.5 19c-1.7 0-3-1.3-3-3 0-1.5 1.6-3.1 1.8-3.4.8-1.1.2-2.6-1.2-3.1-.5-.2-1.1-.3-1.6-.1C12.4 10 11 11.1 11 12.5c0 .8.4 1.5 1 2" />
  <path d="M20.3 14.5c.7-.8 1.2-1.8 1.2-3 0-2.2-1.8-4-4-4-.7 0-1.4.2-2 .5-1.2-1.6-3-2.5-5-2.5-3.3 0-6 2.7-6 6 0 .5 0 1 .1 1.5" />
</>);

export const LeafIcon = mk(<>
  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
</>);

export const MoonIcon = mk(<>
  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
</>);

export const PlusIcon = mk(<>
  <line x1="12" y1="5" x2="12" y2="19" />
  <line x1="5" y1="12" x2="19" y2="12" />
</>);

export const GripIcon = mk(<>
  <circle cx="9" cy="5" r="1" fill="currentColor" />
  <circle cx="9" cy="12" r="1" fill="currentColor" />
  <circle cx="9" cy="19" r="1" fill="currentColor" />
  <circle cx="15" cy="5" r="1" fill="currentColor" />
  <circle cx="15" cy="12" r="1" fill="currentColor" />
  <circle cx="15" cy="19" r="1" fill="currentColor" />
</>);
