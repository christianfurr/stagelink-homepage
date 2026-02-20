import { ImageResponse } from "next/og";

import { LogoMark } from "../logo-mark";

export const runtime = "edge";

export async function GET() {
  const size = 64;
  return new ImageResponse(<LogoMark size={size} />, {
    width: size,
    height: size,
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable",
      "Content-Type": "image/png",
    },
  });
}
