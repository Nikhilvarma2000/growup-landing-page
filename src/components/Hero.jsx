import { motion } from "framer-motion"

const stats = [
  {
    value: "30+",
    title: "Businesses Grown",
    icon: "🚀",
    gradient: "from-violet-500 to-indigo-600",
  },

  {
    value: "2X",
    title: "Average Growth",
    icon: "📈",
    gradient: "from-sky-500 to-cyan-500",
  },

  {
    value: "8+",
    title: "Services",
    icon: "⚡",
    gradient: "from-orange-500 to-amber-500",
  },

  {
    value: "24/7",
    title: "Support",
    icon: "💬",
    gradient: "from-emerald-500 to-teal-600",
  },
]

const services = [
  "Meta Ads",
  "Google Ads",
  "Web Development",
  "Brand Strategy",
]

export default function Hero() {

  return (

    <section
      className="
        relative
        overflow-hidden
        w-full
        min-h-screen

        pt-[120px]
        pb-16

        bg-gradient-to-b
        from-[#eef2ff]
        via-white
        to-[#f5f3ff]
      "
      style={{
        fontFamily:
          "'Plus Jakarta Sans', sans-serif"
      }}
    >

      {/* BLUR BG */}

      <div
        className="
          absolute
          top-[-180px]
          left-[-120px]
          w-[350px]
          md:w-[500px]
          h-[350px]
          md:h-[500px]
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
          w-[350px]
          md:w-[500px]
          h-[350px]
          md:h-[500px]
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

      <div
        className="
          relative
          z-10

          max-w-[1450px]
          mx-auto

          px-4
          sm:px-6
          lg:px-8

          grid
          xl:grid-cols-2

          gap-14
          xl:gap-20

          items-center
        "
      >

        {/* LEFT */}

        <motion.div
          initial={{
            opacity:0,
            y:40
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.7
          }}

          className="
            w-full
          "
        >

          {/* BADGE */}

          <div
            className="
              inline-flex
              items-center
              gap-3

              px-4
              sm:px-5

              py-3

              rounded-full

              text-xs
              sm:text-sm

              font-semibold

              bg-white/80

              border
              border-white

              backdrop-blur-xl
            "

            style={{
              boxShadow:
                "0 10px 30px rgba(0,0,0,0.04)",

              color:"#4338ca"
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

            Grow Up Business Consultancy

          </div>

          {/* HEADING */}

          <h1
            className="
              mt-7

              text-[2.9rem]
              sm:text-[4rem]
              md:text-[5rem]
              xl:text-[6rem]

              leading-[0.92]

              font-black

              text-gray-900
            "

            style={{
              letterSpacing:"-0.07em"
            }}
          >

            Scale Your
            Business With

            <span
              className="
                block
                mt-2
              "

              style={{
                background:
                  "linear-gradient(90deg,#2563eb,#7c3aed)",

                WebkitBackgroundClip:"text",

                WebkitTextFillColor:"transparent"
              }}
            >

              Smart Digital Growth

            </span>

          </h1>

          {/* DESC */}

          <p
            className="
              mt-8

              text-gray-500

              text-[15px]
              sm:text-lg

              leading-8
              sm:leading-9

              max-w-2xl
            "
          >

            We help startups and local businesses grow through
            powerful marketing, branding, web development,
            automation, and sales strategies — all under one roof
            with affordable and scalable solutions.

          </p>

          {/* SERVICES */}

          <div
            className="
              flex
              flex-wrap

              gap-3

              mt-10
            "
          >

            {services.map((item, index) => (

              <div
                key={index}

                className="
                  px-4
                  sm:px-5

                  py-3

                  rounded-full

                  text-sm

                  font-semibold

                  text-gray-700

                  bg-white/80

                  border
                  border-black/[0.05]

                  backdrop-blur-xl
                "

                style={{
                  boxShadow:
                    "0 8px 20px rgba(0,0,0,0.04)"
                }}
              >

                {item}

              </div>

            ))}

          </div>

          {/* BUTTONS */}

          <div
            className="
              flex
              flex-col
              sm:flex-row

              gap-4

              mt-12
            "
          >

            {/* BTN 1 */}

            <a
              href="#contact"

              className="
                w-full
                sm:w-auto

                flex
                items-center
                justify-center

                px-8
                py-5

                rounded-2xl

                text-[15px]
                font-bold

                text-white

                transition-all
                duration-300

                hover:-translate-y-1
              "

              style={{
                background:
                  "linear-gradient(135deg,#111827,#1f2937)",

                boxShadow:
                  "0 18px 40px rgba(0,0,0,0.15)"
              }}
            >

              Get Free Consultation

            </a>

            {/* BTN 2 */}

            <a
              href="#services"

              className="
                w-full
                sm:w-auto

                flex
                items-center
                justify-center

                px-8
                py-5

                rounded-2xl

                text-[15px]
                font-bold

                text-gray-900

                bg-white/80

                border
                border-black/[0.05]

                backdrop-blur-xl

                transition-all
                duration-300

                hover:-translate-y-1
              "

              style={{
                boxShadow:
                  "0 10px 25px rgba(0,0,0,0.04)"
              }}
            >

              Explore Services

            </a>

          </div>

          {/* TRUST */}

          <div
            className="
              flex
              flex-wrap

              gap-x-6
              gap-y-3

              mt-10

              text-sm
              sm:text-[15px]

              text-gray-500
              font-medium
            "
          >

            <span>🚀 30+ Clients</span>

            <span>⚡ Fast Results</span>

            <span>💰 Budget Friendly</span>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{
            opacity:0,
            scale:0.92
          }}

          animate={{
            opacity:1,
            scale:1
          }}

          transition={{
            duration:0.8
          }}

          className="
            w-full
          "
        >

          {/* MAIN CARD */}

          <div
            className="
              w-full

              rounded-[32px]

              bg-white/75

              border
              border-white

              backdrop-blur-2xl

              p-4
              sm:p-6
              lg:p-8
            "

            style={{
              boxShadow:
                "0 30px 80px rgba(99,102,241,0.12)"
            }}
          >

            {/* TOP CARD */}

            <div
              className="
                relative
                overflow-hidden

                rounded-[28px]

                p-6
                sm:p-8
                md:p-10

                min-h-[240px]

                flex
                flex-col
                justify-center
              "

              style={{
                background:
                  "linear-gradient(135deg,#111827,#1f2937)"
              }}
            >

              <div
                className="
                  absolute
                  top-[-70px]
                  right-[-70px]

                  w-[220px]
                  h-[220px]

                  rounded-full
                "

                style={{
                  background:
                    "rgba(255,255,255,0.05)"
                }}
              />

              <div className="relative z-10">

                <div
                  className="
                    text-white/70
                    text-sm
                  "
                >
                  Business Growth
                </div>

                <div
                  className="
                    mt-4

                    text-[4rem]
                    sm:text-[5rem]

                    leading-none

                    font-black

                    text-white
                  "

                  style={{
                    letterSpacing:"-0.06em"
                  }}
                >

                  +240%

                </div>

                <p
                  className="
                    mt-5

                    max-w-sm

                    text-white/75

                    leading-8

                    text-sm
                    sm:text-base
                  "
                >

                  Average client engagement growth
                  after working with our team.

                </p>

              </div>

            </div>

            {/* STATS */}

            <div
              className="
                mt-5

                grid
                grid-cols-2

                gap-4
              "
            >

              {stats.map((item, index) => (

                <motion.div
                  key={index}

                  whileHover={{
                    y:-5
                  }}

                  className="
                    relative
                    overflow-hidden

                    rounded-[24px]

                    bg-white

                    border
                    border-black/[0.05]

                    p-4
                    sm:p-6
                  "

                  style={{
                    boxShadow:
                      "0 10px 25px rgba(0,0,0,0.04)"
                  }}
                >

                  {/* GLOW */}

                  <div
                    className={`
                      absolute
                      inset-0

                      opacity-10

                      bg-gradient-to-br
                      ${item.gradient}
                    `}
                  />

                  <div className="relative z-10">

                    <div className="text-2xl">
                      {item.icon}
                    </div>

                    <div
                      className="
                        mt-4

                        text-2xl
                        sm:text-4xl

                        font-black

                        text-gray-900
                      "

                      style={{
                        letterSpacing:"-0.05em"
                      }}
                    >

                      {item.value}

                    </div>

                    <div
                      className="
                        mt-2

                        text-xs
                        sm:text-[15px]

                        text-gray-500

                        leading-5
                        sm:leading-6
                      "
                    >

                      {item.title}

                    </div>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}