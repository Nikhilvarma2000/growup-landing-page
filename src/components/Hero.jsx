import { motion } from "framer-motion"
import { useState } from "react"

const services = [
  "Meta Ads",
  "Google Ads",
  "Web Development",
  "Brand Strategy",
]

export default function Hero() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })

  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    setLoading(true)

    try {

      await fetch(
        "YOUR_GOOGLE_SCRIPT_URL",
        {
          method: "POST",

          mode: "no-cors",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      )

      alert("Submitted Successfully!")

      setFormData({
        name: "",
        phone: "",
        city: "",
      })

    } catch (error) {

      console.log(error)

      alert("Something went wrong")

    } finally {

      setLoading(false)

    }

  }

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
          "'Plus Jakarta Sans', sans-serif",
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
            "linear-gradient(135deg,#8b5cf6,#6366f1)",
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

          px-4
          sm:px-6
          lg:px-8

          grid
          xl:grid-cols-2

          gap-12
          xl:gap-20

          items-center
        "
      >

        {/* LEFT */}

        <motion.div
          initial={{
            opacity:0,
            y:40,
          }}

          animate={{
            opacity:1,
            y:0,
          }}

          transition={{
            duration:0.7,
          }}

          className="w-full"
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

              color:"#4338ca",
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

              text-[2.8rem]
              sm:text-[4rem]
              md:text-[5rem]
              xl:text-[6rem]

              leading-[0.92]

              font-black

              text-gray-900
            "
            style={{
              letterSpacing:"-0.07em",
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

                WebkitTextFillColor:"transparent",
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
                    "0 8px 20px rgba(0,0,0,0.04)",
                }}
              >

                {item}

              </div>

            ))}

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
            scale:0.92,
          }}

          animate={{
            opacity:1,
            scale:1,
          }}

          transition={{
            duration:0.8,
          }}

          className="w-full"
        >

          <div
            className="
              relative
              overflow-hidden

              rounded-[32px]

              bg-white/80

              border
              border-white

              backdrop-blur-2xl

              p-5
              sm:p-7
              lg:p-8
            "
            style={{
              boxShadow:
                "0 30px 80px rgba(99,102,241,0.12)",
            }}
          >

            {/* GLOW */}

            <div
              className="
                absolute
                top-[-100px]
                right-[-100px]

                w-[260px]
                h-[260px]

                rounded-full
                blur-3xl
                opacity-20
              "
              style={{
                background:
                  "linear-gradient(135deg,#6366f1,#8b5cf6)",
              }}
            />

            <div className="relative z-10">

              {/* OFFER CARD */}

              <div
                className="
                  relative
                  overflow-hidden

                  rounded-[28px]

                  p-6
                  sm:p-8

                  text-white
                "
                style={{
                  background:
                    "linear-gradient(135deg,#111827,#1f2937)",
                }}
              >

                <div
                  className="
                    absolute
                    top-[-60px]
                    right-[-60px]

                    w-[180px]
                    h-[180px]

                    rounded-full
                  "
                  style={{
                    background:
                      "rgba(255,255,255,0.05)",
                  }}
                />

                <div className="relative z-10">

                  <div
                    className="
                      inline-flex
                      items-center

                      px-4
                      py-2

                      rounded-full

                      bg-white/10

                      text-xs
                      font-semibold

                      mb-6
                    "
                  >

                    🔥 Limited Time Offer

                  </div>

                  <h3
                    className="
                      text-3xl
                      sm:text-5xl

                      font-black

                      leading-none
                    "
                    style={{
                      letterSpacing:"-0.06em",
                    }}
                  >

                    Websites
                    <br />

                    <span className="text-cyan-400">
                      Only at
                    </span>

                  </h3>

                  <div
                    className="
                      mt-5

                      text-5xl
                      sm:text-6xl

                      font-black

                      leading-none
                    "
                    style={{
                      letterSpacing:"-0.06em",
                    }}
                  >

                    ₹1999/-

                  </div>

                  <p
                    className="
                      mt-5

                      text-white/75

                      leading-7

                      text-sm
                      sm:text-base
                    "
                  >

                    Modern responsive business websites
                    for startups, local businesses,
                    shops, clinics & brands.

                  </p>

                </div>

              </div>

              {/* FORM TITLE */}

              <div
                className="
                  mt-7
                  mb-5

                  text-center
                "
              >

                <h4
                  className="
                    text-xl
                    sm:text-2xl

                    font-bold

                    text-gray-900
                  "
                  style={{
                    letterSpacing:"-0.03em",
                  }}
                >

                  Fill The Form For More Details

                </h4>

                <p
                  className="
                    text-gray-500

                    text-sm
                    sm:text-base

                    mt-2
                  "
                >

                  Our team will contact you shortly 🚀

                </p>

              </div>

              {/* FORM */}

              <form
                onSubmit={handleSubmit}

                className="
                  space-y-4
                "
              >

                {/* NAME */}

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required

                  value={formData.name}
                  onChange={handleChange}

                  className="
                    w-full

                    rounded-2xl

                    px-5
                    py-4

                    bg-white

                    border
                    border-gray-200

                    outline-none

                    text-gray-900

                    transition-all
                    duration-300

                    focus:border-violet-500
                    focus:ring-4
                    focus:ring-violet-100
                  "
                />

                {/* PHONE */}

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required

                  value={formData.phone}
                  onChange={handleChange}

                  className="
                    w-full

                    rounded-2xl

                    px-5
                    py-4

                    bg-white

                    border
                    border-gray-200

                    outline-none

                    text-gray-900

                    transition-all
                    duration-300

                    focus:border-violet-500
                    focus:ring-4
                    focus:ring-violet-100
                  "
                />

                {/* CITY */}

                <input
                  type="text"
                  name="city"
                  placeholder="City Name"
                  required

                  value={formData.city}
                  onChange={handleChange}

                  className="
                    w-full

                    rounded-2xl

                    px-5
                    py-4

                    bg-white

                    border
                    border-gray-200

                    outline-none

                    text-gray-900

                    transition-all
                    duration-300

                    focus:border-violet-500
                    focus:ring-4
                    focus:ring-violet-100
                  "
                />

                {/* BUTTON */}

                <button
                  type="submit"
                  disabled={loading}

                  className="
                    w-full

                    py-4

                    rounded-2xl

                    text-white

                    font-bold

                    text-[15px]

                    transition-all
                    duration-300

                    hover:scale-[1.02]
                  "
                  style={{
                    background:
                      "linear-gradient(135deg,#2563eb,#7c3aed)",

                    boxShadow:
                      "0 18px 40px rgba(99,102,241,0.18)",
                  }}
                >

                  {loading
                    ? "Submitting..."
                    : "Get Website Now"}

                </button>

              </form>

              {/* TRUST */}

              <div
                className="
                  flex
                  flex-wrap

                  justify-center

                  gap-x-5
                  gap-y-3

                  mt-6

                  text-xs
                  sm:text-sm

                  text-gray-500

                  font-medium
                "
              >

                <span>⚡ Fast Delivery</span>

                <span>📱 Fully Responsive</span>

                <span>💰 Budget Friendly</span>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}