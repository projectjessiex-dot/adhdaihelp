/**
 * ToolIcon — SVG tool icons in a themed container.
 *
 * Focus theme  (#A95A3D on #F6E8E2) — timers, focus sessions
 * Organize theme (#6F8758 on #E8EEE1) — brain dump, task management
 */

type IconName =
  | "focus-timer"
  | "brain-dump"
  | "pomodoro"
  | "body-doubling"
  | "ten-minute"
  | "task-splitter";

type Theme = "focus" | "organize";

const THEMES = {
  focus: {
    bg: "#F6E8E2",
    color: "#A95A3D",
  },
  organize: {
    bg: "#E8EEE1",
    color: "#6F8758",
  },
};

function IconPaths({ name }: { name: IconName }) {
  switch (name) {
    case "focus-timer":
      return (
        <>
          <path d="M9 2.75h6" />
          <path d="M12 2.75v2" />
          <path d="m17.8 6.2 1.4-1.4" />
          <circle cx="12" cy="13" r="7.25" />
          <path d="M12 9.25V13l2.65 1.55" />
        </>
      );
    case "brain-dump":
      return (
        <>
          <path d="M7 3.75h7l3 3v13.5H7V3.75Z" />
          <path d="M14 3.75v3h3" />
          <path d="M4 7.5h6" />
          <path d="m7.5 5 2.5 2.5L7.5 10" />
          <path d="M10.25 12.25h3.75" />
          <path d="M10.25 15.25h3.75" />
          <path d="M10.25 18.25h2.25" />
        </>
      );
    case "pomodoro":
      return (
        <>
          <path d="M12 7.1c-4.9 0-8 2.95-8 6.55 0 4.25 3.55 7.1 8 7.1s8-2.85 8-7.1c0-3.6-3.1-6.55-8-6.55Z" />
          <path d="M12 7.1c-.2-2.1 1.25-3.25 3.35-3.35-.25 1.55-1.4 2.75-3.35 3.35Z" />
          <path d="M11.9 7.1C10.6 5.35 8.75 5 7.15 5.6c1.05 1.25 2.5 1.75 4.75 1.5Z" />
          <path d="M8.4 10.75c.8-.65 1.85-.95 3.1-.95" />
        </>
      );
    case "body-doubling":
      return (
        <>
          <circle cx="8" cy="8" r="2.75" />
          <circle cx="16" cy="8" r="2.75" />
          <path d="M3.75 19.25v-1.4c0-2.65 1.8-4.6 4.25-4.6s4.25 1.95 4.25 4.6v1.4" />
          <path d="M11.75 17.85c0-2.65 1.8-4.6 4.25-4.6s4.25 1.95 4.25 4.6v1.4" />
          <path d="M10.65 14.35c.4-.7.85-1.1 1.35-1.1s.95.4 1.35 1.1" />
        </>
      );
    case "ten-minute":
      return (
        <>
          <path d="M7 3.5h10" />
          <path d="M7 20.5h10" />
          <path d="M8 3.5c0 3.7 1.45 5.35 4 8.5-2.55 3.15-4 4.8-4 8.5" />
          <path d="M16 3.5c0 3.7-1.45 5.35-4 8.5 2.55 3.15 4 4.8 4 8.5" />
          <path d="M9.65 18.1h4.7L12 15.85 9.65 18.1Z" />
        </>
      );
    case "task-splitter":
      return (
        <>
          <circle cx="6" cy="5" r="1.75" />
          <circle cx="18" cy="5" r="1.75" />
          <circle cx="6" cy="19" r="1.75" />
          <circle cx="18" cy="19" r="1.75" />
          <circle cx="12" cy="12" r="2" />
          <path d="M10.55 10.65 7.35 6.4" />
          <path d="m13.45 10.65 3.2-4.25" />
          <path d="m10.55 13.35-3.2 4.25" />
          <path d="m13.45 13.35 3.2 4.25" />
        </>
      );
  }
}

export default function ToolIcon({
  name,
  theme = "focus",
  size = 22,
  containerSize = 44,
}: {
  name: IconName;
  theme?: Theme;
  size?: number;
  containerSize?: number;
}) {
  const { bg, color } = THEMES[theme];
  return (
    <div
      style={{
        width: containerSize,
        height: containerSize,
        borderRadius: 11,
        background: bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <IconPaths name={name} />
      </svg>
    </div>
  );
}
