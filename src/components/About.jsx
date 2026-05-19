import { motion } from "framer-motion"
import { useState } from "react"

const features = [
  { label: "Business Analysis", icon: "🔍", desc: "Deep-dive audits to find growth gaps" },
  { label: "Business Development", icon: "🌱", desc: "Build sustainable growth systems" },
  { label: "Marketing Strategies", icon: "🎯", desc: "Data-driven, ROI-focused campaigns" },
  { label: "Sales Strategies", icon: "📈", desc: "Convert leads into loyal customers" },
  { label: "Business Astrology", icon: "🔮", desc: "Unique timing-based growth insights" },
  { label: "Meta & Google Ads", icon: "📣", desc: "Paid media that actually delivers" },
  { label: "Website Development", icon: "💻", desc: "Fast, beautiful, conversion-ready sites" },
  { label: "Mobile App Development", icon: "📱", desc: "Apps that engage and retain users" },
]

const stats = [
  {
    value: "30+",
    label: "Happy Clients",
    sub: "Transformed & expanded online",
    bg: "from-violet-50 to-indigo-50",
    border: "border-violet-200",
    text: "text-violet-600",
    icon: "🤝",
  },
  {
    value: "2×",
    label: "Average Growth",
    sub: "Within the first 6 months",
    bg: "from-sky-50 to-cyan-50",
    border: "border-sky-200",
    text: "text-sky-600",
    icon: "🚀",
  },
  {
    value: "↓60%",
    label: "Marketing Cost",
    sub: "vs. traditional spend",
    bg: "from-emerald-50 to-teal-50",
    border: "border-emerald-200",
    text: "text-emerald-600",
    icon: "💸",
  },
  {
    value: "2024",
    label: "Founded",
    sub: "Built to grow with you",
    bg: "from-amber-50 to-yellow-50",
    border: "border-amber-200",
    text: "text-amber-600",
    icon: "🏛️",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
}

export default function About() {

  const [hovered, setHovered] = useState(null)

  return (
    <section
      id="about"
      className="relative overflow-hidden"
      style={{
        padding: "120px 32px",
        background:
          "linear-gradient(160deg, #fafafa 0%, #f3f0ff 50%, #eff6ff 100%)",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >

      {/* BLOBS */}

      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -180,
          left: -180,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(108,99,255,0.12), transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: -200,
          right: -150,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(14,165,233,0.10), transparent 70%)",
        }}
      />

      {/* CONTAINER */}

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: 1450,
          margin: "0 auto",
        }}
      >

        {/* BADGE */}

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 24,
          }}
        >

          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,

              padding: "12px 22px",

              borderRadius: 999,

              background:
                "linear-gradient(135deg,#ede9fe,#dbeafe)",

              border: "1px solid #c7d2fe",

              color: "#4338ca",

              fontSize: "0.9rem",
              fontWeight: 700,

              boxShadow:
                "0 8px 24px rgba(99,102,241,0.10)",
            }}
          >

            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#8b5cf6",
              }}
            />

            About Grow Up

          </span>

        </motion.div>

        {/* HEADING */}

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center",

            fontSize: "clamp(3rem,5vw,5.2rem)",

            fontWeight: 800,

            lineHeight: 1.02,

            letterSpacing: "-0.05em",

            color: "#111827",

            maxWidth: 1000,

            margin: "0 auto",
          }}
        >

          Turning Small Businesses Into{" "}

          <span
            style={{
              background:
                "linear-gradient(90deg,#6C63FF,#38BDF8)",

              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Successful Brands
          </span>

        </motion.h2>

        {/* SUBTEXT */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center",

            fontSize: "1.15rem",

            color: "#6b7280",

            lineHeight: 1.9,

            maxWidth: 850,

            margin:
              "28px auto 0",
          }}
        >

          Founded in 2024, Grow Up Business Consultancy helps startups and growing businesses
          scale smarter — through powerful marketing, lead generation, and digital solutions
          that are fast, effective, and always budget-friendly.

        </motion.p>

        {/* MISSION */}

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 44,
            marginBottom: 90,
          }}
        >

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,

              background: "rgba(255,255,255,0.72)",

              backdropFilter: "blur(16px)",

              border:
                "1px solid rgba(255,255,255,0.7)",

              padding: "18px 28px",

              borderRadius: 24,

              boxShadow:
                "0 10px 30px rgba(99,102,241,0.10)",

              maxWidth: 780,
            }}
          >

            <span style={{ fontSize: "1.2rem" }}>
              🎯
            </span>

            <span
              style={{
                color: "#6b7280",
                lineHeight: 1.7,
                fontSize: "0.98rem",
              }}
            >
              <strong style={{ color: "#111827" }}>
                Our Mission:
              </strong>{" "}
              Deliver fast, effective & affordable digital growth solutions for every business.
            </span>

          </div>

        </motion.div>

        {/* MAIN GRID */}

        <div
          style={{
            display: "grid",

            gridTemplateColumns:
              "1.05fr 0.95fr",

            gap: 44,

            alignItems: "start",
          }}
        >

          {/* LEFT */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            <motion.p
              variants={itemVariants}
              style={{
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#8b5cf6",
                marginBottom: 24,
              }}
            >
              What We Offer
            </motion.p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "1fr 1fr",
                gap: 16,
              }}
            >

              {features.map((f, i) => (

                <motion.div
                  key={i}
                  variants={itemVariants}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    borderRadius: 26,

                    padding: "22px 22px",

                    background:
                      hovered === i
                        ? "linear-gradient(135deg,#ede9fe,#dbeafe)"
                        : "rgba(255,255,255,0.72)",

                    border:
                      hovered === i
                        ? "1px solid #a5b4fc"
                        : "1px solid rgba(0,0,0,0.05)",

                    backdropFilter: "blur(14px)",

                    boxShadow:
                      hovered === i
                        ? "0 18px 40px rgba(99,102,241,0.16)"
                        : "0 8px 24px rgba(0,0,0,0.04)",

                    transition: "0.35s ease",

                    transform:
                      hovered === i
                        ? "translateY(-4px)"
                        : "translateY(0)",
                  }}
                >

                  <div
                    style={{
                      display: "flex",
                      gap: 16,
                    }}
                  >

                    <span
                      style={{
                        fontSize: "1.6rem",
                        flexShrink: 0,
                      }}
                    >
                      {f.icon}
                    </span>

                    <div>

                      <div
                        style={{
                          fontWeight: 700,
                          fontSize: "1rem",

                          color:
                            hovered === i
                              ? "#4338ca"
                              : "#111827",
                        }}
                      >
                        {f.label}
                      </div>

                      <div
                        style={{
                          marginTop: 6,

                          fontSize: "0.88rem",

                          color: "#6b7280",

                          lineHeight: 1.6,
                        }}
                      >
                        {f.desc}
                      </div>

                    </div>

                  </div>

                </motion.div>

              ))}

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              position: "relative",
            }}
          >

            {/* FLOATING BADGE */}

            <div
              style={{
                position: "absolute",
                top: -18,
                right: 24,

                zIndex: 10,

                display: "flex",
                alignItems: "center",
                gap: 10,

                background: "#fff",

                border:
                  "1px solid #e0e7ff",

                padding: "12px 18px",

                borderRadius: 999,

                boxShadow:
                  "0 10px 28px rgba(99,102,241,0.12)",

                fontSize: "0.82rem",
                fontWeight: 700,
                color: "#4338ca",
              }}
            >

              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#22c55e",
                }}
              />

              Trusted by growing businesses

            </div>

            {/* CARD */}

            <div
              style={{
                background:
                  "rgba(255,255,255,0.75)",

                backdropFilter: "blur(18px)",

                border:
                  "1px solid rgba(255,255,255,0.7)",

                borderRadius: 36,

                padding: 34,

                boxShadow:
                  "0 24px 70px rgba(99,102,241,0.14)",
              }}
            >

              {/* STATS */}

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "1fr 1fr",
                  gap: 18,
                }}
              >

                {stats.map((s, i) => (

                  <motion.div
                    key={i}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.08,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.03,
                    }}
                    className={`bg-gradient-to-br ${s.bg} ${s.border}`}
                    style={{
                      borderRadius: 28,

                      padding: "24px",

                      borderWidth: 1,

                      boxShadow:
                        "0 10px 30px rgba(0,0,0,0.05)",
                    }}
                  >

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                      }}
                    >

                      <div
                        className={s.text}
                        style={{
                          fontSize: "3rem",
                          fontWeight: 800,
                          letterSpacing: "-0.04em",
                        }}
                      >
                        {s.value}
                      </div>

                      <span
                        style={{
                          fontSize: "1.4rem",
                          opacity: 0.75,
                        }}
                      >
                        {s.icon}
                      </span>

                    </div>

                    <div
                      style={{
                        marginTop: 10,
                        fontWeight: 700,
                        color: "#111827",
                      }}
                    >
                      {s.label}
                    </div>

                    <div
                      style={{
                        marginTop: 4,
                        color: "#6b7280",
                        fontSize: "0.82rem",
                      }}
                    >
                      {s.sub}
                    </div>

                  </motion.div>

                ))}

              </div>

              {/* STORY */}

              <div
                style={{
                  marginTop: 20,

                  borderRadius: 24,

                  padding: "22px 24px",

                  background: "#f8f7ff",

                  border:
                    "1px solid #ede9fe",
                }}
              >

                <div
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "#8b5cf6",
                    marginBottom: 10,
                  }}
                >
                  Our Story
                </div>

                <div
                  style={{
                    color: "#6b7280",
                    lineHeight: 1.8,
                    fontSize: "0.95rem",
                  }}
                >
                  In just 2 years, we've helped{" "}
                  <strong style={{ color: "#111827" }}>
                    30+ businesses
                  </strong>{" "}
                  transform and expand their presence online.
                  From early-stage startups to growing local brands,
                  we bring strategy, creativity, and execution under one roof — at a cost that works for you.
                </div>

              </div>

              {/* BOTTOM NOTE */}

              <div
                style={{
                  marginTop: 18,

                  borderRadius: 22,

                  padding: "20px 22px",

                  background: "#f0fdf4",

                  border:
                    "1px solid #bbf7d0",

                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >

                <div
                  style={{
                    fontSize: "1.8rem",
                    flexShrink: 0,
                  }}
                >
                  🏆
                </div>

                <div>

                  <div
                    style={{
                      fontWeight: 700,
                      color: "#111827",
                    }}
                  >
                    Rated #1 for ROI by clients
                  </div>

                  <div
                    style={{
                      marginTop: 4,
                      color: "#6b7280",
                      fontSize: "0.82rem",
                    }}
                  >
                    Smart digital solutions · Budget-friendly · Fast results
                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

      {/* MOBILE */}

      <style>{`
        @media(max-width:1024px){

          #about{
            padding:100px 24px !important;
          }

          #about .main-grid{
            grid-template-columns:1fr !important;
          }
        }

        @media(max-width:768px){

          #about{
            padding:90px 18px !important;
          }

          .features-grid{
            grid-template-columns:1fr !important;
          }

        }
      `}</style>

    </section>
  )
}