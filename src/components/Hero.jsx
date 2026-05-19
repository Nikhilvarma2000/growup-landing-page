import { motion } from "framer-motion"

const stats = [
  { value: "30+", title: "Businesses Grown", icon: "🚀" },
  { value: "2X", title: "Average Growth", icon: "📈" },
  { value: "8+", title: "Services", icon: "⚡" },
  { value: "24/7", title: "Support", icon: "💬" },
]

const services = [
  "Meta Ads",
  "Google Ads",
  "Web Development",
  "Brand Strategy",
]

export default function Hero() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        *{
          box-sizing:border-box;
        }

        body{
          margin:0;
          padding:0;
        }

        .hero-btn-primary{
          background:linear-gradient(135deg,#111827,#1f2937);
          color:white;
          border:none;
          padding:18px 34px;
          border-radius:16px;
          font-weight:700;
          cursor:pointer;
          transition:0.35s ease;
          text-decoration:none;
          display:inline-flex;
          align-items:center;
          justify-content:center;
          box-shadow:0 12px 30px rgba(0,0,0,0.16);
        }

        .hero-btn-primary:hover{
          transform:translateY(-4px);
          box-shadow:0 20px 40px rgba(0,0,0,0.22);
        }

        .hero-btn-secondary{
          background:rgba(255,255,255,0.7);
          backdrop-filter:blur(10px);
          color:#111827;
          border:1px solid rgba(0,0,0,0.08);
          padding:18px 34px;
          border-radius:16px;
          font-weight:700;
          cursor:pointer;
          transition:0.35s ease;
          text-decoration:none;
          display:inline-flex;
          align-items:center;
          justify-content:center;
        }

        .hero-btn-secondary:hover{
          transform:translateY(-4px);
          background:white;
          box-shadow:0 14px 30px rgba(0,0,0,0.08);
        }

        .service-pill{
          background:rgba(255,255,255,0.72);
          backdrop-filter:blur(12px);
          border:1px solid rgba(255,255,255,0.6);
          padding:12px 18px;
          border-radius:999px;
          font-size:0.92rem;
          font-weight:600;
          color:#374151;
          box-shadow:0 4px 14px rgba(0,0,0,0.04);
        }

        .stat-card{
          background:white;
          border-radius:26px;
          padding:28px;
          border:1px solid rgba(0,0,0,0.05);
          box-shadow:0 10px 28px rgba(0,0,0,0.04);
          transition:0.35s ease;
        }

        .stat-card:hover{
          transform:translateY(-5px);
          box-shadow:0 18px 40px rgba(0,0,0,0.08);
        }

        @media(max-width:980px){

          .hero-grid{
            grid-template-columns:1fr !important;
            gap:55px !important;
            padding:120px 24px 70px !important;
          }

          .hero-right{
            width:100% !important;
          }
        }

        @media(max-width:640px){

          .hero-grid{
            padding:110px 18px 60px !important;
          }

          .hero-buttons{
            flex-direction:column;
          }

          .hero-buttons a{
            width:100%;
          }

          .hero-stats{
            grid-template-columns:1fr 1fr !important;
          }

          .hero-heading{
            font-size:3.3rem !important;
          }
        }

      `}</style>

      <section
        style={{
          minHeight: "100vh",
          width: "100%",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg,#eef2ff 0%,#ffffff 45%,#f5f3ff 100%)",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >

        {/* Background Blur */}
        <div
          style={{
            position: "absolute",
            width: 650,
            height: 650,
            borderRadius: "50%",
            background: "rgba(99,102,241,0.16)",
            filter: "blur(130px)",
            top: -180,
            left: -160,
          }}
        />

        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(168,85,247,0.12)",
            filter: "blur(130px)",
            bottom: -150,
            right: -120,
          }}
        />

        {/* GRID */}
        <div
          className="hero-grid"
          style={{
            position: "relative",
            zIndex: 2,

            width: "100%",
            maxWidth: 1450,

            margin: "0 auto",

            padding: "125px 32px 80px",

            display: "grid",

            gridTemplateColumns: "1.18fr 0.82fr",

            gap: 40,

            alignItems: "center",
          }}
        >

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "rgba(255,255,255,0.72)",
                border: "1px solid rgba(255,255,255,0.65)",
                backdropFilter: "blur(12px)",
                padding: "11px 20px",
                borderRadius: 999,
                fontSize: "0.92rem",
                fontWeight: 700,
                color: "#4338CA",
                boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
              }}
            >
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#22c55e",
                }}
              />
              Grow Up Business Consultancy
            </div>

            {/* HEADING */}
            <h1
              className="hero-heading"
              style={{
                fontSize: "clamp(3.5rem,6vw,6rem)",
                lineHeight: 0.95,
                marginTop: 32,
                marginBottom: 28,
                fontWeight: 800,
                color: "#111827",
                letterSpacing: "-0.06em",
                maxWidth: 780,
              }}
            >
              Scale Your
              <br />
              Business With
              <span
                style={{
                  display: "block",
                  background:
                    "linear-gradient(135deg,#2563eb,#7c3aed)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Smart Digital Growth
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p
              style={{
                maxWidth: 720,
                fontSize: "1.12rem",
                lineHeight: 1.9,
                color: "#6b7280",
              }}
            >
              We help startups and local businesses grow through
              powerful marketing, branding, web development,
              automation, and sales strategies — all under one roof
              with affordable and scalable solutions.
            </p>

            {/* SERVICES */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
                marginTop: 34,
              }}
            >
              {services.map((item, index) => (
                <div
                  key={index}
                  className="service-pill"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div
              className="hero-buttons"
              style={{
                display: "flex",
                gap: 18,
                marginTop: 42,
              }}
            >
              <a href="#contact" className="hero-btn-primary">
                Get Free Consultation
              </a>

              <a href="#services" className="hero-btn-secondary">
                Explore Services
              </a>
            </div>

            {/* TRUST */}
            <div
              style={{
                marginTop: 30,
                display: "flex",
                flexWrap: "wrap",
                gap: 22,
                color: "#6b7280",
                fontSize: "0.96rem",
                fontWeight: 500,
              }}
            >
              <span>🚀 30+ Clients</span>
              <span>⚡ Fast Results</span>
              <span>💰 Budget Friendly</span>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="hero-right"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >

            <div
              style={{
                background: "rgba(255,255,255,0.72)",
                backdropFilter: "blur(18px)",
                border: "1px solid rgba(255,255,255,0.6)",

                borderRadius: 36,

                padding: 34,

                boxShadow:
                  "0 24px 80px rgba(99,102,241,0.14)",

                width: "100%",
              }}
            >

              {/* TOP CARD */}
              <div
                style={{
                  background:
                    "linear-gradient(135deg,#111827,#1f2937)",

                  borderRadius: 30,

                  padding: 36,

                  color: "white",

                  position: "relative",

                  overflow: "hidden",

                  minHeight: 260,

                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >

                <div
                  style={{
                    position: "absolute",
                    width: 240,
                    height: 240,
                    background: "rgba(255,255,255,0.06)",
                    borderRadius: "50%",
                    top: -90,
                    right: -90,
                  }}
                />

                <div
                  style={{
                    fontSize: "0.95rem",
                    opacity: 0.8,
                  }}
                >
                  Business Growth
                </div>

                <div
                  style={{
                    fontSize: "4.5rem",
                    fontWeight: 800,
                    marginTop: 10,
                    lineHeight: 1,
                    letterSpacing: "-0.05em",
                  }}
                >
                  +240%
                </div>

                <div
                  style={{
                    marginTop: 16,
                    fontSize: "1rem",
                    opacity: 0.85,
                    lineHeight: 1.7,
                    maxWidth: 320,
                  }}
                >
                  Average client engagement growth after
                  working with our team.
                </div>
              </div>

              {/* STATS */}
              <div
                className="hero-stats"
                style={{
                  display: "grid",

                  gridTemplateColumns: "1fr 1fr",

                  gap: 18,

                  marginTop: 22,
                }}
              >

                {stats.map((item, index) => (
                  <div
                    key={index}
                    className="stat-card"
                  >

                    <div style={{ fontSize: "1.8rem" }}>
                      {item.icon}
                    </div>

                    <div
                      style={{
                        marginTop: 16,
                        fontSize: "2.2rem",
                        fontWeight: 800,
                        color: "#111827",
                      }}
                    >
                      {item.value}
                    </div>

                    <div
                      style={{
                        marginTop: 6,
                        color: "#6b7280",
                        fontSize: "0.95rem",
                        fontWeight: 500,
                      }}
                    >
                      {item.title}
                    </div>

                  </div>
                ))}

              </div>

            </div>

          </motion.div>

        </div>

      </section>
    </>
  )
}