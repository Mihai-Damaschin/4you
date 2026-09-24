// "Pom" tree-of-life mark used as the logo.

const PALETTES = {
  Vie: { verde: "#1FBF63", rosu: "#EE2E55", albastru: "#2B86E8", portocaliu: "#F08C22", mov: "#8E5AE8" },
  Temperată: { verde: "#0F9E56", rosu: "#C92A46", albastru: "#2168B8", portocaliu: "#D1791B", mov: "#6E48B8" },
};

export default function Pom({
  size = 220,
  stroke = 9,
  palette = "Vie",
}: {
  size?: number;
  stroke?: number;
  palette?: keyof typeof PALETTES;
}) {
  const c = PALETTES[palette];
  const w2 = Math.max(4, Math.round(stroke * 0.78));

  const branch = (
    <>
      <path d="M84 186 L76 196" stroke={c.verde} />
      <path d="M110 96 L80 66 L80 54" stroke={c.rosu} />
      <rect x="-9" y="-9" width="18" height="18" transform="translate(80,42) rotate(45)" fill={c.rosu} stroke="none" />
      <path d="M110 130 L52 72 L36 72" stroke={c.albastru} />
      <rect x="14" y="62" width="20" height="20" fill={c.albastru} stroke="none" />
      <path d="M110 158 L62 110 L50 110" stroke={c.portocaliu} />
      <rect x="-11" y="-11" width="22" height="22" transform="translate(36,110) rotate(45)" fill="none" stroke={c.portocaliu} strokeWidth={w2} />
      <circle cx="36" cy="110" r="4" fill={c.mov} stroke="none" />
    </>
  );

  return (
    <svg
      width={size}
      height={Math.round((size * 210) / 220)}
      viewBox="0 0 220 210"
      fill="none"
      aria-hidden="true"
      style={{ display: "block", overflow: "visible" }}
    >
      <g strokeLinecap="square" strokeLinejoin="miter" strokeWidth={stroke}>
        <path d="M110 186 L110 44" stroke={c.verde} />
        <path d="M84 186 L136 186" stroke={c.verde} />
        <rect x="-7" y="-7" width="14" height="14" transform="translate(110,168) rotate(45)" fill={c.verde} stroke="none" />
        <path d="M100 54 L110 40 L120 54" stroke={c.rosu} />
        <rect x="-11" y="-11" width="22" height="22" transform="translate(110,26) rotate(45)" fill={c.rosu} stroke="none" />
        <rect x="-5" y="-5" width="10" height="10" transform="translate(110,26) rotate(45)" fill={c.mov} stroke="none" />
        <g>{branch}</g>
        <g transform="translate(220,0) scale(-1,1)">{branch}</g>
      </g>
    </svg>
  );
}
