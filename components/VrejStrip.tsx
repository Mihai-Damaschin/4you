import Vrej, { vrejHeight, type VrejPalette } from "./Vrej";

// The vertical ornament rotated -90° into a horizontal band, clipped to its container width.
export default function VrejStrip({
  thickness,
  repeats = 6,
  palette,
  className,
}: {
  thickness: number;
  repeats?: number;
  palette?: VrejPalette;
  className?: string;
}) {
  const length = vrejHeight(thickness, repeats);
  const offset = Math.floor((length - thickness) / 2);

  return (
    <div className={className} style={{ position: "relative", height: thickness, overflow: "hidden" }}>
      <div style={{ position: "absolute", left: 0, top: 0, width: length, height: thickness }}>
        <div
          style={{
            position: "absolute",
            left: offset,
            top: -offset,
            width: thickness,
            height: length,
            transform: "rotate(-90deg)",
          }}
        >
          <Vrej width={thickness} repeats={repeats} palette={palette} />
        </div>
      </div>
    </div>
  );
}
