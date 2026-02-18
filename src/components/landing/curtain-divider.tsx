"use client";

type Variant = "dark-to-light" | "light-to-dark";

interface CurtainDividerProps {
  variant?: Variant;
  className?: string;
}

const strokeColor = {
  "dark-to-light": "rgba(201,162,39,0.12)",
  "light-to-dark": "rgba(183,28,46,0.1)",
};

export function CurtainDivider({
  variant = "dark-to-light",
  className = "",
}: CurtainDividerProps) {
  return (
    <div
      className={`pointer-events-none w-full overflow-hidden ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 1200 24"
        className="w-full h-6"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 24 Q150 8 300 16 T600 12 T900 18 T1200 10 L1200 24 L0 24 Z"
          stroke={strokeColor[variant]}
          strokeWidth="0.5"
          fill="none"
        />
        <path
          d="M0 20 Q100 6 250 14 T500 10 T750 16 T1000 8 T1200 14 L1200 24 L0 24 Z"
          fill={strokeColor[variant]}
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
