import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0C0A09",
          borderRadius: 6,
        }}
      >
        <span
          style={{
            color: "#C9A227",
            fontSize: 18,
            fontWeight: 700,
            fontFamily: "system-ui, sans-serif",
            letterSpacing: "-0.04em",
          }}
        >
          SL
        </span>
      </div>
    ),
    { ...size }
  );
}
