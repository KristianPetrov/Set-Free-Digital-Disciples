import { ImageResponse } from "next/og";

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
          background: "#050806",
          color: "#3dff7a",
          fontSize: 16,
          fontWeight: 800,
          letterSpacing: -1,
        }}
      >
        SF
      </div>
    ),
    size,
  );
}
