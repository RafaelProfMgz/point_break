import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Point Break - Gestão de Ponto Inteligente";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const background = "#0A0A0B";
  const primary = "#8B5CF6";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: background,
          backgroundImage: `radial-gradient(circle at 25px 25px, #1e1b4b 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1e1b4b 2%, transparent 0%)`,
          backgroundSize: "100px 100px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "600px",
            backgroundColor: primary,
            filter: "blur(120px)",
            opacity: 0.2,
            borderRadius: "100%",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 80px",
            borderRadius: "40px",
            backgroundColor: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 0 50px -12px rgba(139, 92, 246, 0.25)",
          }}
        >
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke={primary}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ marginBottom: 20 }}
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>

          <div
            style={{
              fontSize: 70,
              fontWeight: 900,
              background: "linear-gradient(to bottom, #fff, #a5b4fc)",
              backgroundClip: "text",
              color: "transparent",
              marginBottom: 10,
              letterSpacing: "-0.05em",
            }}
          >
            Point Break
          </div>

          <div
            style={{
              fontSize: 32,
              color: "#94a3b8",
              fontWeight: 500,
            }}
          >
            Controle de ponto reinventado.
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 20,
            color: "#475569",
          }}
        >
          pointbreak.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
