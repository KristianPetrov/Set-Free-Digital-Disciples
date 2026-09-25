import { ImageResponse } from "next/og";

export const alt = "Set Free Digital Disciples — Next.js websites and technical SEO";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#050806",
          color: "#f4fff6",
          padding: "64px 72px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", color: "#3dff7a", fontSize: 28, fontWeight: 700, letterSpacing: 4 }}>
            SET FREE DIGITAL DISCIPLES
          </div>
          <div
            style={{
              display: "flex",
              color: "#67e8f9",
              fontSize: 22,
              border: "2px solid #14532d",
              padding: "8px 16px",
            }}
          >
            NEXT.JS
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 800, lineHeight: 1, letterSpacing: -2 }}>
            Sites that rank.
          </div>
          <div style={{ display: "flex", marginTop: 18, fontSize: 36, color: "#67e8f9" }}>
            Looks that hit. Signals that agree.
          </div>
        </div>
        <div style={{ display: "flex", gap: 18, color: "#86efac", fontSize: 24 }}>
          <span>Technical SEO</span>
          <span style={{ color: "#14532d" }}>/</span>
          <span>Core Web Vitals</span>
          <span style={{ color: "#14532d" }}>/</span>
          <span>Schema</span>
          <span style={{ color: "#14532d" }}>/</span>
          <span>Vercel</span>
        </div>
      </div>
    ),
    size,
  );
}
