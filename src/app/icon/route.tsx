import { ImageResponse } from "next/og";

import { LogoMark } from "../logo-mark";
import { getCormorantFont } from "../og-font";

import { isSafari } from "./utils";

export const runtime = "edge";

export async function GET(request: Request) {
  const userAgent = request.headers.get("User-Agent");
  const transparent = isSafari(userAgent);
  const size = 128;
  const fonts = await getCormorantFont();
  return new ImageResponse(
    <LogoMark size={size} transparent={transparent} />,
    {
      width: size,
      height: size,
      fonts,
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable",
        "Content-Type": "image/png",
      },
    }
  );
}
