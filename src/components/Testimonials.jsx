import { motion } from "framer-motion"
import { FaStar, FaQuoteRight } from "react-icons/fa"

const testimonials = [

  {
    name: "Koti",
    review:
      "Growup helped us develop our business. They provided quality services at very low cost. We are very happy with their service.",
    gradient: "from-violet-500 to-indigo-600"
  },

  {
    name: "Chaitanya",
    review:
      "The way they create ad scripts, target customers, and run ads is extremely impressive. They provide excellent service at affordable cost.",
    gradient: "from-sky-500 to-cyan-500"
  },

  {
    name: "Ramu",
    review:
      "The Growup team is extremely talented. They scaled our business 2X within a very short time and with very low budget.",
    gradient: "from-emerald-500 to-teal-600"
  }

]

function Testimonials() {

  return (

    <section
      id="reviews"
      className="
        relative
        overflow-hidden
        py-32
        px-6
      "
      style={{
        background:
          "linear-gradient(180deg,#ffffff 0%,#f8fafc 50%,#f5f3ff 100%)"
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
                "linear-gradient(135deg,#ffedd5,#fde68a)",
              color:"#c2410c",
              border:"1px solid #fdba74",
              boxShadow:
                "0 8px 24px rgba(251,146,60,0.12)"
            }}
          >

            <span
              className="
                w-2
                h-2
                rounded-full
                bg-orange-500
              "
            />

            Testimonials

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

            What Our Clients
            <br />

            <span
              style={{
                background:
                  "linear-gradient(90deg,#f97316,#ec4899)",
                WebkitBackgroundClip:"text",
                WebkitTextFillColor:"transparent"
              }}
            >
              Say About Growup
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

            Businesses trust Growup to scale faster
            with affordable and effective strategies,
            modern marketing, and high-converting digital solutions.

          </p>

        </div>

        {/* TESTIMONIAL GRID */}

        <div
          className="
            grid
            sm:grid-cols-2
            xl:grid-cols-3
            gap-8
          "
        >

          {testimonials.map((item, index) => (

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
                duration:0.6,
                delay:index * 0.12
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

                {/* TOP */}

                <div className="flex items-start justify-between">

                  {/* STARS */}

                  <div className="flex gap-1.5 text-yellow-400 text-lg">

                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />

                  </div>

                  {/* QUOTE */}

                  <div
                    className={`
                      w-14
                      h-14
                      rounded-2xl
                      bg-gradient-to-br
                      ${item.gradient}

                      flex
                      items-center
                      justify-center

                      text-white
                      text-xl

                      shadow-lg
                    `}
                  >

                    <FaQuoteRight />

                  </div>

                </div>

                {/* REVIEW */}

                <p
                  className="
                    text-gray-600
                    leading-9
                    text-[17px]
                    mt-8
                  "
                >

                  "{item.review}"

                </p>

                {/* USER */}

                <div
                  className="
                    flex
                    items-center
                    gap-4
                    mt-10
                  "
                >

                  {/* AVATAR */}

                  <div
                    className={`
                      w-16
                      h-16
                      rounded-2xl
                      bg-gradient-to-br
                      ${item.gradient}

                      text-white

                      flex
                      items-center
                      justify-center

                      font-bold
                      text-xl

                      shadow-lg
                    `}
                  >

                    {item.name.charAt(0)}

                  </div>

                  {/* INFO */}

                  <div>

                    <h3
                      className="
                        font-bold
                        text-xl
                        text-gray-900
                      "
                    >
                      {item.name}
                    </h3>

                    <p
                      className="
                        text-gray-500
                        text-sm
                        mt-1
                      "
                    >
                      Business Owner
                    </p>

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        {/* BOTTOM TRUST STRIP */}

        <div
          className="
            mt-20
            rounded-[34px]
            border
            border-black/[0.05]
            bg-white/70
            backdrop-blur-xl
            p-8
            md:p-10
          "
          style={{
            boxShadow:
              "0 20px 50px rgba(0,0,0,0.05)"
          }}
        >

          <div
            className="
              flex
              flex-col
              md:flex-row
              items-center
              justify-between
              gap-8
            "
          >

            {/* LEFT */}

            <div>

              <h3
                className="
                  text-3xl
                  font-bold
                  text-gray-900
                  leading-tight
                "
                style={{
                  letterSpacing:"-0.04em"
                }}
              >

                Trusted By Growing
                Businesses Across Industries

              </h3>

              <p
                className="
                  text-gray-500
                  mt-4
                  leading-8
                  max-w-2xl
                "
              >

                We focus on affordable growth,
                strong branding, quality lead generation,
                and digital strategies that deliver real business results.

              </p>

            </div>

            {/* RIGHT */}

            <div
              className="
                flex
                items-center
                gap-10
              "
            >

              <div className="text-center">

                <h4
                  className="
                    text-4xl
                    font-bold
                    text-gray-900
                  "
                >
                  30+
                </h4>

                <p className="text-gray-500 text-sm mt-2">
                  Clients
                </p>

              </div>

              <div className="text-center">

                <h4
                  className="
                    text-4xl
                    font-bold
                    text-gray-900
                  "
                >
                  2X
                </h4>

                <p className="text-gray-500 text-sm mt-2">
                  Growth
                </p>

              </div>

              <div className="text-center">

                <h4
                  className="
                    text-4xl
                    font-bold
                    text-gray-900
                  "
                >
                  100%
                </h4>

                <p className="text-gray-500 text-sm mt-2">
                  Satisfaction
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Testimonials