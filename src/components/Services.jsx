import {
  FaChartLine,
  FaBullhorn,
  FaLightbulb,
  FaFacebook,
  FaLaptopCode,
  FaArrowRight
} from "react-icons/fa"

import { motion } from "framer-motion"

const services = [

  {
    icon: <FaChartLine />,
    title: "Business Analysis",
    description:
      "Detailed strategies to improve and scale your business.",
    gradient: "from-violet-500 to-indigo-600"
  },

  {
    icon: <FaBullhorn />,
    title: "Marketing",
    description:
      "Modern marketing solutions to attract quality customers.",
    gradient: "from-sky-500 to-cyan-500"
  },

  {
    icon: <FaLightbulb />,
    title: "Sales Strategies",
    description:
      "Boost conversions and maximize your business revenue.",
    gradient: "from-amber-500 to-orange-500"
  },

  {
    icon: <FaFacebook />,
    title: "Facebook & Instagram Ads",
    description:
      "Targeted campaigns that generate high quality leads.",
    gradient: "from-blue-600 to-indigo-600"
  },

  {
    icon: <FaLaptopCode />,
    title: "Websites & Apps",
    description:
      "Modern websites and applications for your business.",
    gradient: "from-emerald-500 to-teal-600"
  }

]

function Services() {

  return (

    <section
      id="services"
      className="
        relative
        overflow-hidden
        py-32
        px-6
      "
      style={{
        background:
          "linear-gradient(180deg,#ffffff 0%,#f8faff 50%,#f5f3ff 100%)"
      }}
    >

      {/* BACKGROUND BLURS */}

      <div
        className="
          absolute
          top-[-200px]
          left-[-120px]
          w-[420px]
          h-[420px]
          rounded-full
          blur-3xl
          opacity-20
        "
        style={{
          background:
            "linear-gradient(135deg,#6366f1,#8b5cf6)"
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
                "linear-gradient(135deg,#ede9fe,#dbeafe)",
              color:"#4338ca",
              border:"1px solid #c7d2fe",
              boxShadow:
                "0 8px 24px rgba(99,102,241,0.10)"
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

            Our Expertise

          </div>

          {/* HEADING */}

          <h2
            className="
              text-5xl
              md:text-6xl
              font-bold
              tracking-tight
              leading-tight
            "
            style={{
              color:"#111827",
              letterSpacing:"-0.05em"
            }}
          >

            Services That Help
            <br />

            <span
              style={{
                background:
                  "linear-gradient(90deg,#6366f1,#06b6d4)",
                WebkitBackgroundClip:"text",
                WebkitTextFillColor:"transparent"
              }}
            >
              Businesses Scale Faster
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

            We provide affordable business growth
            services designed to scale your brand rapidly
            through smart digital solutions, marketing,
            and modern technology.

          </p>

        </div>

        {/* SERVICES GRID */}

        <div
          className="
            grid
            sm:grid-cols-2
            xl:grid-cols-3
            gap-8
          "
        >

          {services.map((service, index) => (

            <motion.div
              key={index}

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
                  ${service.gradient}
                `}
                style={{
                  filter:"blur(120px)",
                  transform:"scale(1.2)"
                }}
              />

              {/* INNER */}

              <div className="relative z-10">

                {/* ICON */}

                <div
                  className={`
                    w-20
                    h-20
                    rounded-[26px]
                    bg-gradient-to-br
                    ${service.gradient}

                    text-white

                    flex
                    items-center
                    justify-center

                    text-3xl

                    shadow-xl

                    mb-10
                  `}
                >

                  {service.icon}

                </div>

                {/* TITLE */}

                <h3
                  className="
                    text-3xl
                    font-bold
                    leading-snug
                    text-gray-900
                  "
                  style={{
                    letterSpacing:"-0.03em"
                  }}
                >

                  {service.title}

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

                  {service.description}

                </p>

                {/* BUTTON */}

                <button
                  className="
                    mt-8
                    inline-flex
                    items-center
                    gap-3
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

                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Services