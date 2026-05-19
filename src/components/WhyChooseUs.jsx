import {
  FaRocket,
  FaBullseye,
  FaUsers,
  FaChartLine,
  FaArrowRight
} from "react-icons/fa"

import { motion } from "framer-motion"

const features = [

  {
    icon: <FaRocket />,
    title: "Fast Business Growth",
    description:
      "We help businesses scale rapidly using smart digital strategies.",
    gradient: "from-violet-500 to-indigo-600"
  },

  {
    icon: <FaBullseye />,
    title: "Targeted Marketing",
    description:
      "Reach the right customers with optimized ad campaigns.",
    gradient: "from-emerald-500 to-teal-600"
  },

  {
    icon: <FaUsers />,
    title: "Lead Generation",
    description:
      "Generate high-quality leads that convert into customers.",
    gradient: "from-sky-500 to-cyan-500"
  },

  {
    icon: <FaChartLine />,
    title: "Affordable Solutions",
    description:
      "Premium marketing solutions at budget-friendly pricing.",
    gradient: "from-orange-500 to-amber-500"
  }

]

function WhyChooseUs() {

  return (

    <section
      className="
        relative
        overflow-hidden
        py-32
        px-5
        sm:px-6
      "
      style={{
        background:
          "linear-gradient(180deg,#f8fafc 0%,#ffffff 50%,#f5f3ff 100%)"
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

        {/* TOP SECTION */}

        <div className="text-center mb-24">

          {/* BADGE */}

          <div
            className="
              inline-flex
              items-center
              gap-3
              px-6
              py-3
              rounded-full
              text-sm
              font-semibold
              mb-8
            "
            style={{
              background:
                "linear-gradient(135deg,#dcfce7,#d1fae5)",
              color:"#15803d",
              border:"1px solid #86efac",
              boxShadow:
                "0 8px 24px rgba(34,197,94,0.10)"
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
              text-5xl
              md:text-6xl
              font-bold
              leading-tight
            "
            style={{
              color:"#111827",
              letterSpacing:"-0.05em"
            }}
          >

            Why Businesses
            <br />

            <span
              style={{
                background:
                  "linear-gradient(90deg,#22c55e,#06b6d4)",
                WebkitBackgroundClip:"text",
                WebkitTextFillColor:"transparent"
              }}
            >
              Trust Growup
            </span>

          </h2>

          {/* SUBTEXT */}

          <p
            className="
              text-gray-500
              mt-8
              text-lg
              leading-9
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

        {/* FEATURE GRID */}

        <div
          className="
            grid
            sm:grid-cols-2
            xl:grid-cols-4
            gap-8
          "
        >

          {features.map((item, index) => (

            <motion.div
              key={index}

              initial={{
                opacity:0,
                y:40
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              transition={{
                duration:0.5,
                delay:index * 0.08
              }}

              viewport={{ once:true }}

              whileHover={{
                y:-10
              }}

              className="
                group
                relative
                overflow-hidden
                rounded-[34px]
                p-9
                border
                border-black/[0.05]
                bg-white/70
                backdrop-blur-xl
              "

              style={{
                boxShadow:
                  "0 20px 50px rgba(0,0,0,0.05)"
              }}
            >

              {/* CARD GLOW */}

              <div
                className={`
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                  bg-gradient-to-br
                  ${item.gradient}
                `}
                style={{
                  filter:"blur(120px)",
                  transform:"scale(1.2)"
                }}
              />

              {/* CONTENT */}

              <div className="relative z-10">

                {/* ICON */}

                <div
                  className={`
                    w-20
                    h-20
                    rounded-[26px]
                    bg-gradient-to-br
                    ${item.gradient}

                    text-white

                    flex
                    items-center
                    justify-center

                    text-3xl

                    shadow-xl

                    mb-10
                  `}
                >

                  {item.icon}

                </div>

                {/* TITLE */}

                <h3
                  className="
                    text-2xl
                    font-bold
                    leading-snug
                    text-gray-900
                  "
                  style={{
                    letterSpacing:"-0.03em"
                  }}
                >

                  {item.title}

                </h3>

                {/* DESCRIPTION */}

                <p
                  className="
                    text-gray-500
                    leading-8
                    text-[15px]
                    mt-6
                  "
                >

                  {item.description}

                </p>

                {/* BOTTOM */}

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    mt-8
                    font-semibold
                    text-sm
                    text-gray-900
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                  "
                >

                  Learn More

                  <FaArrowRight className="text-xs" />

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        {/* BOTTOM TRUST SECTION */}

        <div
          className="
            mt-20
            rounded-[36px]
            border
            border-black/[0.05]
            bg-white/70
            backdrop-blur-xl
            p-10
            md:p-14
          "
          style={{
            boxShadow:
              "0 24px 60px rgba(0,0,0,0.05)"
          }}
        >

          <div
            className="
              flex
              flex-col
              lg:flex-row
              items-center
              justify-between
              gap-10
            "
          >

            {/* LEFT */}

            <div>

              <h3
                className="
                  text-4xl
                  font-bold
                  text-gray-900
                  leading-tight
                "
                style={{
                  letterSpacing:"-0.04em"
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
                grid
                grid-cols-3
                gap-8
              "
            >

              <div className="text-center">

                <h4
                  className="
                    text-5xl
                    font-bold
                    text-gray-900
                  "
                >
                  30+
                </h4>

                <p
                  className="
                    text-gray-500
                    text-sm
                    mt-2
                  "
                >
                  Businesses
                </p>

              </div>

              <div className="text-center">

                <h4
                  className="
                    text-5xl
                    font-bold
                    text-gray-900
                  "
                >
                  2X
                </h4>

                <p
                  className="
                    text-gray-500
                    text-sm
                    mt-2
                  "
                >
                  Growth
                </p>

              </div>

              <div className="text-center">

                <h4
                  className="
                    text-5xl
                    font-bold
                    text-gray-900
                  "
                >
                  100%
                </h4>

                <p
                  className="
                    text-gray-500
                    text-sm
                    mt-2
                  "
                >
                  Support
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default WhyChooseUs