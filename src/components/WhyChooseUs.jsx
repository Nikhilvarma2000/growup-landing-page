import {
  FaRocket,
  FaBullseye,
  FaUsers,
  FaChartLine,
} from "react-icons/fa"

import { motion } from "framer-motion"

const features = [
  {
    icon: <FaRocket />,
    title: "Fast Business Growth",
    description:
      "We help businesses scale rapidly using smart digital strategies.",
    gradient: "from-violet-500 to-indigo-600",
  },

  {
    icon: <FaBullseye />,
    title: "Targeted Marketing",
    description:
      "Reach the right customers with optimized ad campaigns.",
    gradient: "from-emerald-500 to-teal-600",
  },

  {
    icon: <FaUsers />,
    title: "Lead Generation",
    description:
      "Generate high-quality leads that convert into customers.",
    gradient: "from-sky-500 to-cyan-500",
  },

  {
    icon: <FaChartLine />,
    title: "Affordable Solutions",
    description:
      "Premium marketing solutions at budget-friendly pricing.",
    gradient: "from-orange-500 to-amber-500",
  },
]

function WhyChooseUs() {

  return (

    <section
      className="
        relative
        overflow-hidden

        py-20
        sm:py-24
        lg:py-32

        px-4
        sm:px-6
      "
      style={{
        background:
          "linear-gradient(180deg,#f8fafc 0%,#ffffff 50%,#f5f3ff 100%)",
      }}
    >

      {/* BLUR BG */}

      <div
        className="
          absolute
          top-[-120px]
          left-[-120px]

          w-[280px]
          sm:w-[420px]

          h-[280px]
          sm:h-[420px]

          rounded-full
          blur-3xl
          opacity-20
        "
        style={{
          background:
            "linear-gradient(135deg,#8b5cf6,#6366f1)",
        }}
      />

      <div
        className="
          absolute
          bottom-[-120px]
          right-[-120px]

          w-[280px]
          sm:w-[420px]

          h-[280px]
          sm:h-[420px]

          rounded-full
          blur-3xl
          opacity-20
        "
        style={{
          background:
            "linear-gradient(135deg,#06b6d4,#3b82f6)",
        }}
      />

      {/* CONTAINER */}

      <div
        className="
          relative
          z-10

          max-w-[1450px]
          mx-auto
        "
      >

        {/* TOP */}

        <div
          className="
            text-center

            mb-14
            sm:mb-20
          "
        >

          {/* BADGE */}

          <div
            className="
              inline-flex
              items-center
              gap-3

              px-5
              sm:px-6

              py-3

              rounded-full

              text-xs
              sm:text-sm

              font-semibold

              mb-6
              sm:mb-8
            "
            style={{
              background:
                "linear-gradient(135deg,#dcfce7,#d1fae5)",
              color:"#15803d",
              border:"1px solid #86efac",
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

            Why Choose Us

          </div>

          {/* HEADING */}

          <h2
            className="
              text-[2.3rem]
              sm:text-5xl
              lg:text-6xl

              font-black

              leading-[1.05]

              text-gray-900
            "
            style={{
              letterSpacing:"-0.05em",
            }}
          >

            Why Businesses

            <span
              className="
                block
                mt-2
              "
              style={{
                background:
                  "linear-gradient(90deg,#22c55e,#06b6d4)",
                WebkitBackgroundClip:"text",
                WebkitTextFillColor:"transparent",
              }}
            >

              Trust Growup

            </span>

          </h2>

          {/* TEXT */}

          <p
            className="
              text-gray-500

              mt-6
              sm:mt-8

              text-[15px]
              sm:text-lg

              leading-8

              max-w-3xl
              mx-auto
            "
          >

            We combine marketing, lead generation,
            and digital growth strategies to help
            businesses grow faster with affordable,
            result-driven solutions.

          </p>

        </div>

        {/* FEATURES */}

        <div
          className="
            grid

            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4

            gap-5
            sm:gap-7
          "
        >

          {features.map((item, index) => (

            <motion.div
              key={index}

              initial={{
                opacity:0,
                y:30,
              }}

              whileInView={{
                opacity:1,
                y:0,
              }}

              transition={{
                duration:0.45,
                delay:index * 0.08,
              }}

              viewport={{ once:true }}

              whileHover={{
                y:-6,
              }}

              className="
                relative
                overflow-hidden

                rounded-[28px]
                sm:rounded-[34px]

                p-6
                sm:p-8

                border
                border-black/[0.05]

                bg-white/80

                backdrop-blur-xl
              "

              style={{
                boxShadow:
                  "0 15px 40px rgba(0,0,0,0.05)",
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

                {/* ICON */}

                <div
                  className={`
                    w-16
                    h-16

                    sm:w-20
                    sm:h-20

                    rounded-[22px]

                    bg-gradient-to-br
                    ${item.gradient}

                    text-white

                    flex
                    items-center
                    justify-center

                    text-2xl
                    sm:text-3xl

                    mb-6
                    sm:mb-8
                  `}
                  style={{
                    boxShadow:
                      "0 16px 35px rgba(0,0,0,0.12)",
                  }}
                >

                  {item.icon}

                </div>

                {/* TITLE */}

                <h3
                  className="
                    text-xl
                    sm:text-2xl

                    font-bold

                    leading-snug

                    text-gray-900
                  "
                >

                  {item.title}

                </h3>

                {/* DESC */}

                <p
                  className="
                    text-gray-500

                    leading-7
                    sm:leading-8

                    text-sm
                    sm:text-[15px]

                    mt-4
                    sm:mt-5
                  "
                >

                  {item.description}

                </p>

              </div>

            </motion.div>

          ))}

        </div>

        {/* BOTTOM SECTION */}

        <div
          className="
            mt-14
            sm:mt-20

            rounded-[30px]
            sm:rounded-[36px]

            border
            border-black/[0.05]

            bg-white/80

            backdrop-blur-xl

            p-6
            sm:p-10
            lg:p-14
          "

          style={{
            boxShadow:
              "0 24px 60px rgba(0,0,0,0.05)",
          }}
        >

          <div
            className="
              flex
              flex-col
              xl:flex-row

              items-start
              xl:items-center

              justify-between

              gap-10
            "
          >

            {/* LEFT */}

            <div className="w-full">

              <h3
                className="
                  text-[2rem]
                  sm:text-4xl

                  font-black

                  leading-tight

                  text-gray-900
                "
                style={{
                  letterSpacing:"-0.04em",
                }}
              >

                Helping Businesses
                Scale Smarter & Faster

              </h3>

              <p
                className="
                  text-gray-500

                  mt-5

                  leading-8

                  text-[15px]
                  sm:text-base

                  max-w-2xl
                "
              >

                Growup focuses on affordable growth,
                powerful marketing, quality lead generation,
                and digital strategies that help businesses
                achieve long-term success.

              </p>

            </div>

            {/* RIGHT */}

            <div
              className="
                w-full
                xl:w-auto

                grid
                grid-cols-3

                gap-4
                sm:gap-8
              "
            >

              {[
                {
                  value:"30+",
                  label:"Businesses",
                },

                {
                  value:"2X",
                  label:"Growth",
                },

                {
                  value:"100%",
                  label:"Support",
                },
              ].map((item, index) => (

                <div
                  key={index}

                  className="
                    text-center

                    bg-gray-50

                    rounded-2xl

                    px-4
                    py-5
                    sm:px-6
                    sm:py-7
                  "
                >

                  <h4
                    className="
                      text-3xl
                      sm:text-5xl

                      font-black

                      text-gray-900
                    "
                    style={{
                      letterSpacing:"-0.05em",
                    }}
                  >

                    {item.value}

                  </h4>

                  <p
                    className="
                      text-gray-500

                      text-xs
                      sm:text-sm

                      mt-2
                    "
                  >

                    {item.label}

                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default WhyChooseUs