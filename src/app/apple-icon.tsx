import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          borderRadius: 24,
        }}
      >
        <span
          style={{
            color: "#C9A227",
            fontSize: 96,
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
