import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
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
          background: "#1E3336",
          borderRadius: 12,
          color: "#F5F7F6",
          fontSize: 30,
          fontWeight: 600,
          fontFamily: "Georgia, serif",
        }}
      >
        CC
      </div>
    ),
    { ...size }
  );
}
