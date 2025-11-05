export default function Doughnut({
  percent = 30,
  size = 160,
  stroke = 24,
}: {
  percent?: number;
  size?: number;
  stroke?: number;
}) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="mx-auto"
    >
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      <g transform={`translate(${size / 2}, ${size / 2})`}>
        <circle r={radius} fill="none" stroke="#eef2ff" strokeWidth={stroke} />
        <circle
          r={radius}
          fill="none"
          stroke="url(#g1)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90)`}
        />
        <text
          x="0"
          y="2"
          textAnchor="middle"
          fontSize="14"
          fill="#111827"
          fontWeight={700}
        >
          {percent}%
        </text>
      </g>
    </svg>
  );
}
