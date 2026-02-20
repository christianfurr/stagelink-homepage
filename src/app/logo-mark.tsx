/** Shared logo mark for icon.tsx, apple-icon.tsx, opengraph-image.tsx. Inline styles only (Satori). */
export function LogoMark({ size }: { size: number }) {
  const stroke = Math.max(2, Math.floor(size / 32));
  const gap = Math.floor(size / 16);
  const r = Math.floor(size * 0.22);
  const dotR = Math.floor(size * 0.06);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0C0A09",
        borderRadius: Math.floor(size / 6),
        border: `${stroke}px solid rgba(201, 162, 39, 0.35)`,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap,
        }}
      >
        <div
          style={{
            width: r * 2,
            height: r * 2,
            border: `${stroke}px solid #C9A227`,
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            width: r * 2,
            height: r * 2,
            border: `${stroke}px solid #C9A227`,
            borderRadius: "50%",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: Math.floor(size * 0.12),
          right: Math.floor(size * 0.12),
          width: dotR * 2,
          height: dotR * 2,
          borderRadius: "50%",
          backgroundColor: "#B71C2E",
        }}
      />
    </div>
  );
}
