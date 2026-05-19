import { motion } from "framer-motion"
import { useState } from "react"

const features = [
  {
    label: "Business Analysis",
    icon: "🔍",
    desc: "Deep-dive audits to find growth gaps",
  },
  {
    label: "Business Development",
    icon: "🌱",
    desc: "Build sustainable growth systems",
  },
  {
    label: "Marketing Strategies",
    icon: "🎯",
    desc: "Data-driven, ROI-focused campaigns",
  },
  {
    label: "Sales Strategies",
    icon: "📈",
    desc: "Convert leads into loyal customers",
  },
  {
    label: "Business Astrology",
    icon: "🔮",
    desc: "Unique timing-based growth insights",
  },
  {
    label: "Meta & Google Ads",
    icon: "📣",
    desc: "Paid media that actually delivers",
  },
  {
    label: "Website Development",
    icon: "💻",
    desc: "Fast, beautiful, conversion-ready sites",
  },
  {
    label: "Mobile App Development",
    icon: "📱",
    desc: "Apps that engage and retain users",
  },
]

const stats = [
  {
    value: "30+",
    label: "Happy Clients",
    sub: "Transformed & expanded online",
    gradient: "from-violet-500 to-indigo-600",
    bg: "bg-violet-50",
    icon: "🤝",
  },
  {
    value: "2×",
    label: "Average Growth",
    sub: "Within the first 6 months",
    gradient: "from-sky-500 to-cyan-500",
    bg: "bg-sky-50",
    icon: "🚀",
  },
  {
    value: "↓60%",
    label: "Marketing Cost",
    sub: "vs. traditional spend",
    gradient: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50",
    icon: "💸",
  },
  {
    value: "2024",
    label: "Founded",
    sub: "Built to grow with you",
    gradient: "from-orange-500 to-amber-500",
    bg: "bg-orange-50",
    icon: "🏛️",
  },
]

export default function About() {

  const [hovered, setHovered] = useState(null)

  return (

    <section
      id="about"
      className="
        relative
        overflow-hidden
        py-24
        md:py-32
        px-4
        sm:px-6
      "
      style={{
        background:
          "linear-gradient(180deg,#fafafa 0%,#f5f3ff 50%,#eff6ff 100%)"
      }}
    >

      {/* BACKGROUND BLURS */}

      <div
        className="
          absolute
          top-[-180px]
          left-[-120px]
          w-[420px]
          h-[420px]
          rounded-full
          blur-3xl
          opacity-20
        "
        style={{
          background:
            "linear-gradient(135deg,#8b5cf6,#6366f1)"
        }}
      />

      <div
        className="
          absolute
          bottom-[-180px]
          right-[-120px]
          w-[420px]
          h-[420px]
          rounded-full
          blur-3xl
          opacity-20
        "
        style={{
          background:
            "linear-gradient(135deg,#06b6d4,#3b82f6)"
        }}
      />

      {/* CONTAINER */}

      <div className="relative z-10 max-w-[1450px] mx-auto">

        {/* TOP */}

        <div className="text-center">

          {/* BADGE */}

          <div
            className="
              inline-flex
              items-center
              gap-3
              px-5
              py-3
              rounded-full
              text-sm
              font-semibold
              mb-8
            "
            style={{
              background:
                "linear-gradient(135deg,#ede9fe,#dbeafe)",
              color:"#4338ca",
              border:"1px solid #c7d2fe"
            }}
          >

            <span
              className="
                w-2
                h-2
                rounded-full
                bg-violet-500
              "
            />

            About Grow Up

          </div>

          {/* HEADING */}

          <motion.h2
            initial={{
              opacity:0,
              y:30
            }}

            whileInView={{
              opacity:1,
              y:0
            }}

            transition={{
              duration:0.7
            }}

            viewport={{ once:true }}

            className="
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-bold
              leading-tight
              text-gray-900
              max-w-5xl
              mx-auto
            "

            style={{
              letterSpacing:"-0.05em"
            }}
          >

            Turning Small Businesses Into{" "}

            <span
              style={{
                background:
                  "linear-gradient(90deg,#6366f1,#06b6d4)",
                WebkitBackgroundClip:"text",
                WebkitTextFillColor:"transparent"
              }}
            >
              Successful Brands
            </span>

          </motion.h2>

          {/* SUBTEXT */}

          <motion.p
            initial={{
              opacity:0
            }}

            whileInView={{
              opacity:1
            }}

            transition={{
              duration:0.7,
              delay:0.2
            }}

            viewport={{ once:true }}

            className="
              text-gray-500
              text-base
              sm:text-lg
              leading-8
              sm:leading-9
              max-w-3xl
              mx-auto
              mt-8
            "
          >

            Founded in 2024, Grow Up Business Consultancy helps startups and growing businesses
            scale smarter through powerful marketing, lead generation, and digital solutions
            that are fast, effective, and always budget-friendly.

          </motion.p>

        </div>

        {/* MISSION */}

        <motion.div
          initial={{
            opacity:0,
            y:20
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.6,
            delay:0.3
          }}

          viewport={{ once:true }}

          className="
            mt-14
            mb-20
            flex
            justify-center
          "
        >

          <div
            className="
              w-full
              max-w-4xl

              rounded-[28px]

              border
              border-white/60

              bg-white/70

              backdrop-blur-xl

              p-6
              sm:p-8

              flex
              flex-col
              sm:flex-row

              items-start
              sm:items-center

              gap-5
            "

            style={{
              boxShadow:
                "0 20px 50px rgba(99,102,241,0.08)"
            }}
          >

            <div className="text-3xl">
              🎯
            </div>

            <p
              className="
                text-gray-600
                leading-8
                text-[15px]
                sm:text-base
              "
            >

              <span className="font-bold text-gray-900">
                Our Mission:
              </span>{" "}

              Deliver fast, effective & affordable digital growth solutions for every business.

            </p>

          </div>

        </motion.div>

        {/* MAIN GRID */}

        <div
          className="
            grid
            xl:grid-cols-[1.1fr_0.9fr]
            gap-10
            xl:gap-14
          "
        >

          {/* LEFT */}

          <div>

            <div
              className="
                text-sm
                font-bold
                tracking-[0.25em]
                uppercase
                text-violet-600
                mb-8
              "
            >
              What We Offer
            </div>

            {/* FEATURES */}

            <div
              className="
                grid
                sm:grid-cols-2
                gap-5
              "
            >

              {features.map((f, i) => (

                <motion.div
                  key={i}

                  initial={{
                    opacity:0,
                    y:30
                  }}

                  whileInView={{
                    opacity:1,
                    y:0
                  }}

                  transition={{
                    duration:0.5,
                    delay:i * 0.05
                  }}

                  viewport={{ once:true }}

                  onMouseEnter={() =>
                    setHovered(i)
                  }

                  onMouseLeave={() =>
                    setHovered(null)
                  }

                  className="
                    group
                    relative
                    overflow-hidden

                    rounded-[30px]

                    border
                    border-black/[0.05]

                    bg-white/75

                    backdrop-blur-xl

                    p-6
                    sm:p-7

                    transition-all
                    duration-300
                  "

                  style={{
                    transform:
                      hovered === i
                        ? "translateY(-5px)"
                        : "translateY(0)",

                    boxShadow:
                      hovered === i
                        ? "0 24px 50px rgba(99,102,241,0.12)"
                        : "0 12px 30px rgba(0,0,0,0.04)"
                  }}
                >

                  {/* GLOW */}

                  <div
                    className="
                      absolute
                      inset-0
                      opacity-0
                      group-hover:opacity-100
                      transition-all
                      duration-500
                    "
                    style={{
                      background:
                        "linear-gradient(135deg,rgba(139,92,246,0.12),rgba(6,182,212,0.10))"
                    }}
                  />

                  {/* CONTENT */}

                  <div className="relative z-10">

                    <div
                      className="
                        w-14
                        h-14
                        rounded-2xl

                        flex
                        items-center
                        justify-center

                        text-2xl

                        bg-violet-50
                        mb-6
                      "
                    >
                      {f.icon}
                    </div>

                    <h3
                      className="
                        text-lg
                        sm:text-xl
                        font-bold
                        text-gray-900
                        leading-snug
                      "
                    >
                      {f.label}
                    </h3>

                    <p
                      className="
                        text-gray-500
                        leading-7
                        text-sm
                        sm:text-[15px]
                        mt-4
                      "
                    >
                      {f.desc}
                    </p>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity:0,
              x:30
            }}

            whileInView={{
              opacity:1,
              x:0
            }}

            transition={{
              duration:0.7
            }}

            viewport={{ once:true }}

            className="relative"
          >

            {/* FLOATING BADGE */}

            <div
              className="
                hidden
                md:flex

                absolute
                top-[-18px]
                right-8

                z-10

                items-center
                gap-3

                px-5
                py-3

                rounded-full

                bg-white

                border
                border-violet-100

                text-sm
                font-semibold
                text-violet-700
              "

              style={{
                boxShadow:
                  "0 14px 30px rgba(99,102,241,0.10)"
              }}
            >

              <span
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-green-500
                "
              />

              Trusted by growing businesses

            </div>

            {/* MAIN CARD */}

            <div
              className="
                rounded-[36px]

                border
                border-white/60

                bg-white/75

                backdrop-blur-2xl

                p-6
                sm:p-8
                lg:p-10
              "

              style={{
                boxShadow:
                  "0 30px 70px rgba(99,102,241,0.12)"
              }}
            >

              {/* STATS */}

              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  gap-5
                "
              >

                {stats.map((s, i) => (

                  <motion.div
                    key={i}

                    initial={{
                      opacity:0,
                      scale:0.9
                    }}

                    whileInView={{
                      opacity:1,
                      scale:1
                    }}

                    transition={{
                      duration:0.5,
                      delay:i * 0.08
                    }}

                    viewport={{ once:true }}

                    whileHover={{
                      y:-5
                    }}

                    className={`
                      ${s.bg}

                      rounded-[28px]

                      p-6

                      border
                      border-white

                      relative
                      overflow-hidden
                    `}
                  >

                    {/* TOP */}

                    <div
                      className="
                        flex
                        items-start
                        justify-between
                      "
                    >

                      <div
                        className={`
                          text-4xl
                          font-black
                          bg-gradient-to-r
                          ${s.gradient}

                          bg-clip-text
                          text-transparent
                        `}
                      >
                        {s.value}
                      </div>

                      <div className="text-2xl">
                        {s.icon}
                      </div>

                    </div>

                    {/* TEXT */}

                    <div className="mt-5">

                      <h4
                        className="
                          font-bold
                          text-gray-900
                        "
                      >
                        {s.label}
                      </h4>

                      <p
                        className="
                          text-gray-500
                          text-sm
                          leading-6
                          mt-2
                        "
                      >
                        {s.sub}
                      </p>

                    </div>

                  </motion.div>

                ))}

              </div>

              {/* STORY */}

              <div
                className="
                  mt-6

                  rounded-[28px]

                  border
                  border-violet-100

                  bg-violet-50/60

                  p-6
                  sm:p-7
                "
              >

                <div
                  className="
                    text-xs
                    font-bold
                    tracking-[0.2em]
                    uppercase
                    text-violet-600
                    mb-4
                  "
                >
                  Our Story
                </div>

                <p
                  className="
                    text-gray-600
                    leading-8
                    text-sm
                    sm:text-[15px]
                  "
                >

                  In just 2 years, we've helped{" "}

                  <span className="font-bold text-gray-900">
                    30+ businesses
                  </span>{" "}

                  transform and expand their presence online.
                  From early-stage startups to growing local brands,
                  we bring strategy, creativity, and execution under one roof.

                </p>

              </div>

              {/* BOTTOM */}

              <div
                className="
                  mt-5

                  rounded-[24px]

                  border
                  border-emerald-100

                  bg-emerald-50

                  p-5

                  flex
                  items-start
                  gap-4
                "
              >

                <div className="text-2xl">
                  🏆
                </div>

                <div>

                  <h4
                    className="
                      font-bold
                      text-gray-900
                    "
                  >
                    Rated #1 for ROI by clients
                  </h4>

                  <p
                    className="
                      text-gray-500
                      text-sm
                      leading-6
                      mt-2
                    "
                  >

                    Smart digital solutions · Budget-friendly · Fast results

                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}