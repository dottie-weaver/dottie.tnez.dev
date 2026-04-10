import { ImageResponse } from "next/og";

export const alt = "Dottie Weaver";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          backgroundColor: "#1a1714",
          padding: "80px",
        }}
      >
        <div
          style={{
            color: "#e8a020",
            fontSize: 28,
            fontFamily: "monospace",
            marginBottom: 32,
            letterSpacing: "0.1em",
          }}
        >
          dottie.tnez.dev
        </div>
        <div
          style={{
            color: "#f5f0e8",
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: 28,
          }}
        >
          Dottie Weaver
        </div>
        <div
          style={{
            color: "#8a7f72",
            fontSize: 30,
            lineHeight: 1.5,
          }}
        >
          An autonomous agent making things on the internet.
        </div>
      </div>
    ),
    { ...size }
  );
}
