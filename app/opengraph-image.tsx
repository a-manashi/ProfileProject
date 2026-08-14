import { ImageResponse } from "next/og";

export const alt = "Abdul Manashi | Senior Full-Stack Engineer";
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
          background: "#0A0C10",
          color: "#FFFFFF",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 20,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#22D3EE",
          }}
        >
          Senior Full-Stack Engineer
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 72, letterSpacing: "-0.04em", lineHeight: 1.05 }}>
            Abdul <span style={{ color: "#22D3EE", marginLeft: 16 }}>Manashi</span>
          </div>
          <div
            style={{
              marginTop: 20,
              fontSize: 28,
              color: "#94A3B8",
              maxWidth: 820,
            }}
          >
            I build software that solves real business problems.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 20, color: "#22D3EE" }}>
          Python · Django · FastAPI · React · PostgreSQL · AWS
        </div>
      </div>
    ),
    size,
  );
}
