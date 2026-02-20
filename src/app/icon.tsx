import { ImageResponse } from "next/og";

import { LogoMark } from "./logo-mark";

export const runtime = "edge";
export const size = { width: 128, height: 128 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(<LogoMark size={128} />, { ...size });
}
