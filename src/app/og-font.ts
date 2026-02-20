/** Cormorant Garamond 600 for OG/icon (Satori). Latin subset for "SL" / "Stage Link". */
const CORMORANT_LATIN_URL =
  "https://fonts.gstatic.com/s/cormorantgaramond/v21/co3umX5slCNuHLi8bLeY9MK7whWMhyjypVO7abI26QOD_iE9KnTOig.woff2";

export const CORMORANT_FONT_NAME = "Cormorant Garamond";

export async function getCormorantFont() {
  const res = await fetch(CORMORANT_LATIN_URL);
  if (!res.ok) throw new Error("Failed to load Cormorant font");
  const data = await res.arrayBuffer();
  return [
    {
      name: CORMORANT_FONT_NAME,
      data,
      style: "normal" as const,
      weight: 600 as const,
    },
  ];
}
