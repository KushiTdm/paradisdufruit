type RotatingBadgeProps = {
  text: string;
  emoji?: string;
  size?: number;
  bgColor?: string;
  textColor?: string;
  className?: string;
};

export default function RotatingBadge({
  text,
  emoji = "🍍",
  size = 120,
  bgColor = "#FED117",
  textColor = "#204D36",
  className = "",
}: RotatingBadgeProps) {
  const chars = text.split("");
  const radius = size / 2 - 18;
  const circumference = 2 * Math.PI * radius;
  const charAngle = 360 / chars.length;

  return (
    <div
      className={`animate-spin-slow flex-shrink-0 ${className}`}
      style={{ width: size, height: size }}
      aria-label={text}
      role="img"
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - 4}
          fill={bgColor}
        />

        <defs>
          <path
            id="textCircle"
            d={`M ${size / 2} ${18} A ${radius} ${radius} 0 1 1 ${size / 2 - 0.01} ${18}`}
          />
        </defs>

        <text
          fill={textColor}
          style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: Math.round(size * 0.115) }}
          letterSpacing="2"
          textAnchor="middle"
        >
          <textPath href="#textCircle" startOffset="50%">
            {text}
          </textPath>
        </text>

        <text
          x={size / 2}
          y={size / 2 + Math.round(size * 0.115)}
          textAnchor="middle"
          style={{ fontSize: Math.round(size * 0.28) }}
        >
          {emoji}
        </text>
      </svg>
    </div>
  );
}
