const d = {
  user: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z|M4 21c0-4 4-6 8-6s8 2 8 6",
  play: "M8 5v14l11-7z",
  down: "M12 5v14M6 13l6 6 6-6",
  check: "M20 6L9 17l-5-5",
  eye: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z|M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
  video: "M3 7h13v10H3z|M16 10l5-3v10l-5-3",
  box: "M4 5h16v15H4z|M4 10h16|M9 3v4M15 3v4",
  chat: "M21 12a8 8 0 0 1-11.6 7L4 20l1.1-4.8A8 8 0 1 1 21 12z",
  mail: "M3 5h18v14H3z|M3 7l9 7 9-7",
  fire: "M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 1-9z",
  ig: "M4 4h16v16H4z|M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z|M17 7h.01",
  tt: "M14 4v10a4 4 0 1 1-4-4|M14 4c0 3 2 5 5 5",
  in: "M5 9v10M5 5h.01|M10 19v-6a3 3 0 0 1 6 0v6M10 9v10",
  yt: "M3 7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z|M10 9l5 3-5 3z",
  fb: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
};
export default function Icon({ n, size = 20, className = "", fill = false }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {(d[n] || "")
        .split("|")
        .filter(Boolean)
        .map((p, i) => (
          <path key={i} d={p} />
        ))}
    </svg>
  );
}
