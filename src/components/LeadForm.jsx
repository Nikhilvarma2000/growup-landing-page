import { useState } from "react"
import { motion } from "framer-motion"

function LeadForm() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: ""
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    setLoading(true)

    try {

      await fetch(
        "https://script.google.com/macros/s/AKfycbykZKK6LBtkxk-VJTVISQMD3t315P4IDQHdSIL9bw44vbYZleFNJ1_s1H9FaUg2EWjs/exec",
        {

          method: "POST",

          mode: "no-cors",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(formData)

        }
      )

      if (typeof fbq !== "undefined") {
        fbq('track', 'Lead')
      }

      alert("Form submitted successfully!")

      setFormData({
        name: "",
        phone: "",
        city: ""
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
      id="contact"

      className="
        relative
        overflow-hidden

        py-20
        sm:py-24
        lg:py-28

        px-4
        sm:px-6
      "

      style={{
        background:
          "linear-gradient(180deg,#eef4ff 0%,#ffffff 50%,#f5f3ff 100%)"
      }}
    >

      {/* BLURS */}

      <div
        className="
          absolute
          top-[-140px]
          left-[-120px]

          w-[320px]
          sm:w-[420px]

          h-[320px]
          sm:h-[420px]

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
          bottom-[-140px]
          right-[-120px]

          w-[320px]
          sm:w-[420px]

          h-[320px]
          sm:h-[420px]

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

          max-w-[720px]
          mx-auto
        "
      >

        {/* FORM */}

        <motion.div
          initial={{
            opacity:0,
            y:40
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.7
          }}

          viewport={{ once:true }}
        >

          <form
            onSubmit={handleSubmit}

            className="
              relative
              overflow-hidden

              rounded-[32px]
              sm:rounded-[40px]

              p-6
              sm:p-8
              lg:p-10

              border
              border-black/[0.05]

              bg-white/80

              backdrop-blur-2xl
            "

            style={{
              boxShadow:
                "0 30px 80px rgba(99,102,241,0.12)"
            }}
          >

            {/* GLOW */}

            <div
              className="
                absolute
                top-[-100px]
                right-[-100px]

                w-[240px]
                h-[240px]

                rounded-full
                blur-3xl
                opacity-20
              "
              style={{
                background:
                  "linear-gradient(135deg,#6366f1,#8b5cf6)"
              }}
            />

            <div className="relative z-10">

              {/* TOP */}

              <div
                className="
                  text-center

                  mb-8
                  sm:mb-10
                "
              >

                <div
                  className="
                    inline-flex
                    items-center
                    gap-2

                    px-4
                    py-2

                    rounded-full

                    text-xs
                    font-semibold

                    mb-5
                  "
                  style={{
                    background:"#ecfeff",
                    color:"#0891b2",
                    border:"1px solid #a5f3fc"
                  }}
                >

                  ⚡ Quick Response Guaranteed

                </div>

                <div className="flex flex-col items-center">

  {/* OFFER BADGE */}

  <div
    className="
      inline-flex
      items-center
      gap-2

      px-5
      py-2

      rounded-full

      text-sm
      font-bold

      mb-5
    "
    style={{
      background:
        "linear-gradient(135deg,#dcfce7,#bbf7d0)",
      color:"#166534",
      border:"1px solid #86efac"
    }}
  >

    🔥 Limited Time Offer

  </div>

  {/* HEADING */}

  <h3
    className="
      text-3xl
      sm:text-5xl

      font-black

      text-center

      leading-tight
    "
    style={{
      letterSpacing:"-0.05em",
      color:"#111827"
    }}
  >

    Websites Only At

    <span
      className="
        block
        mt-2
      "
      style={{
        background:
          "linear-gradient(90deg,#6366f1,#8b5cf6)",
        WebkitBackgroundClip:"text",
        WebkitTextFillColor:"transparent"
      }}
    >

      ₹1999

    </span>

  </h3>

</div>

                <p
                  className="
                    text-gray-500

                    leading-7
                    sm:leading-8

                    text-sm
                    sm:text-base

                    mt-4
                  "
                >

                  Fill the form below and our team
                  will contact you shortly.

                </p>

              </div>

              {/* INPUTS */}

              <div
                className="
                  space-y-5
                  sm:space-y-6
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
                    sm:px-6

                    py-4
                    sm:py-5

                    bg-white

                    border
                    border-gray-200

                    outline-none

                    text-gray-900

                    text-sm
                    sm:text-base

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
                    sm:px-6

                    py-4
                    sm:py-5

                    bg-white

                    border
                    border-gray-200

                    outline-none

                    text-gray-900

                    text-sm
                    sm:text-base

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
                    sm:px-6

                    py-4
                    sm:py-5

                    bg-white

                    border
                    border-gray-200

                    outline-none

                    text-gray-900

                    text-sm
                    sm:text-base

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
                    sm:py-5

                    rounded-2xl

                    text-white

                    text-sm
                    sm:text-lg

                    font-bold

                    transition-all
                    duration-300

                    hover:scale-[1.02]
                  "

                  style={{
                    background:
                      "linear-gradient(135deg,#111827,#1f2937)",

                    boxShadow:
                      "0 18px 40px rgba(0,0,0,0.18)"
                  }}
                >

                  {loading
                    ? "Submitting..."
                    : "Submit Now"}

                </button>

              </div>

            </div>

          </form>

        </motion.div>

      </div>

    </section>
  )
}

export default LeadForm