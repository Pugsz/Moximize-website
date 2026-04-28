import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Moximize — HubSpot Partner & AI-Powered B2B Growth Agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#000000",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Background gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 80% 20%, rgba(41,171,226,0.12) 0%, transparent 60%)",
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "linear-gradient(135deg, #2B4EA0, #29ABE2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              color: "white",
              fontWeight: 900,
            }}
          >
            M
          </div>
          <span style={{ color: "white", fontSize: 32, fontWeight: 800, letterSpacing: -1 }}>
            Moximize
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "white",
            lineHeight: 1.1,
            letterSpacing: -2,
            maxWidth: 800,
            marginBottom: 24,
          }}
        >
          AI-Powered B2B Growth Agency
        </div>

        {/* Sub */}
        <div
          style={{
            fontSize: 24,
            color: "#72767a",
            maxWidth: 680,
            lineHeight: 1.5,
            marginBottom: 48,
          }}
        >
          HubSpot CRM · AI Lead Generation · Outbound Marketing · RevOps
        </div>

        {/* Pills */}
        <div style={{ display: "flex", gap: 12 }}>
          {["30+ Companies Helped", "HubSpot Certified", "90-Day Guarantee"].map((t) => (
            <div
              key={t}
              style={{
                background: "rgba(41,171,226,0.1)",
                border: "1px solid rgba(41,171,226,0.3)",
                borderRadius: 999,
                padding: "8px 20px",
                color: "#29ABE2",
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              {t}
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            right: 80,
            color: "#72767a",
            fontSize: 18,
            fontWeight: 600,
          }}
        >
          moximize.net
        </div>
      </div>
    ),
    { ...size }
  );
}
