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
        py-32
        px-6
      "
      style={{
        background:
          "linear-gradient(180deg,#eef4ff 0%,#ffffff 50%,#f5f3ff 100%)"
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

      <div
        className="
          relative
          z-10
          max-w-[1450px]
          mx-auto
          grid
          lg:grid-cols-2
          gap-20
          items-center
        "
      >

        {/* LEFT CONTENT */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

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
                "linear-gradient(135deg,#dbeafe,#ede9fe)",
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

            Free Consultation

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

            Let's Grow
            <br />

            <span
              style={{
                background:
                  "linear-gradient(90deg,#6366f1,#06b6d4)",
                WebkitBackgroundClip:"text",
                WebkitTextFillColor:"transparent"
              }}
            >
              Your Business Faster 🚀
            </span>

          </h2>

          {/* SUBTEXT */}

          <p
            className="
              text-gray-500
              text-lg
              leading-9
              mt-8
              max-w-2xl
            "
          >

            Fill the form and our team will contact you shortly.
            We help businesses generate more leads,
            improve sales, and scale effectively using
            smart digital growth strategies.

          </p>

          {/* BENEFITS */}

          <div
            className="
              grid
              sm:grid-cols-2
              gap-5
              mt-12
            "
          >

            <div
              className="
                rounded-[28px]
                p-6
                bg-white/70
                backdrop-blur-xl
                border
                border-black/[0.05]
              "
              style={{
                boxShadow:
                  "0 16px 40px rgba(0,0,0,0.05)"
              }}
            >

              <div className="text-2xl mb-4">
                🚀
              </div>

              <h3
                className="
                  text-lg
                  font-bold
                  text-gray-900
                "
              >
                Affordable Marketing Solutions
              </h3>

              <p
                className="
                  text-gray-500
                  text-sm
                  leading-7
                  mt-3
                "
              >
                Smart digital strategies designed
                to grow your business faster.
              </p>

            </div>

            <div
              className="
                rounded-[28px]
                p-6
                bg-white/70
                backdrop-blur-xl
                border
                border-black/[0.05]
              "
              style={{
                boxShadow:
                  "0 16px 40px rgba(0,0,0,0.05)"
              }}
            >

              <div className="text-2xl mb-4">
                📈
              </div>

              <h3
                className="
                  text-lg
                  font-bold
                  text-gray-900
                "
              >
                Fast Lead Generation
              </h3>

              <p
                className="
                  text-gray-500
                  text-sm
                  leading-7
                  mt-3
                "
              >
                Generate quality customers
                with targeted campaigns.
              </p>

            </div>

            <div
              className="
                rounded-[28px]
                p-6
                bg-white/70
                backdrop-blur-xl
                border
                border-black/[0.05]
                sm:col-span-2
              "
              style={{
                boxShadow:
                  "0 16px 40px rgba(0,0,0,0.05)"
              }}
            >

              <div className="text-2xl mb-4">
                💡
              </div>

              <h3
                className="
                  text-lg
                  font-bold
                  text-gray-900
                "
              >
                Expert Business Strategies
              </h3>

              <p
                className="
                  text-gray-500
                  text-sm
                  leading-7
                  mt-3
                "
              >
                Our team helps businesses scale
                effectively through proven marketing,
                branding, and sales strategies.
              </p>

            </div>

          </div>

        </motion.div>

        {/* FORM */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <form
            onSubmit={handleSubmit}

            className="
              relative
              overflow-hidden
              rounded-[40px]
              p-10
              md:p-12
              border
              border-black/[0.05]
              bg-white/75
              backdrop-blur-2xl
            "

            style={{
              boxShadow:
                "0 30px 80px rgba(99,102,241,0.15)"
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
                  "linear-gradient(135deg,#6366f1,#8b5cf6)"
              }}
            />

            {/* CONTENT */}

            <div className="relative z-10">

              {/* TOP */}

              <div className="mb-10">

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
                    mb-6
                  "
                  style={{
                    background:"#ecfeff",
                    color:"#0891b2",
                    border:"1px solid #a5f3fc"
                  }}
                >

                  ⚡ Quick Response Guaranteed

                </div>

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

                  Get Free
                  Consultation

                </h3>

                <p
                  className="
                    text-gray-500
                    leading-8
                    mt-5
                  "
                >

                  Fill out the form below and our team
                  will contact you shortly.

                </p>

              </div>

              {/* INPUTS */}

              <div className="space-y-6">

                {/* NAME */}

                <div>

                  <label
                    className="
                      block
                      text-sm
                      font-semibold
                      text-gray-700
                      mb-3
                    "
                  >
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                    value={formData.name}
                    onChange={handleChange}

                    className="
                      w-full
                      rounded-2xl
                      px-6
                      py-5
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

                </div>

                {/* PHONE */}

                <div>

                  <label
                    className="
                      block
                      text-sm
                      font-semibold
                      text-gray-700
                      mb-3
                    "
                  >
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    required
                    value={formData.phone}
                    onChange={handleChange}

                    className="
                      w-full
                      rounded-2xl
                      px-6
                      py-5
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

                </div>

                {/* CITY */}

                <div>

                  <label
                    className="
                      block
                      text-sm
                      font-semibold
                      text-gray-700
                      mb-3
                    "
                  >
                    City Name
                  </label>

                  <input
                    type="text"
                    name="city"
                    placeholder="Enter your city"
                    required
                    value={formData.city}
                    onChange={handleChange}

                    className="
                      w-full
                      rounded-2xl
                      px-6
                      py-5
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

                </div>

                {/* BUTTON */}

                <button
                  type="submit"
                  disabled={loading}

                  className="
                    relative
                    overflow-hidden
                    w-full
                    py-5
                    rounded-2xl
                    text-white
                    font-semibold
                    text-lg
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                  "

                  style={{
                    background:
                      "linear-gradient(135deg,#111827,#1f2937)",
                    boxShadow:
                      "0 18px 40px rgba(0,0,0,0.22)"
                  }}
                >

                  <span className="relative z-10">

                    {loading
                      ? "Submitting..."
                      : "Submit Now"}

                  </span>

                </button>

              </div>

              {/* TRUST NOTE */}

              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-3
                  mt-8
                  text-sm
                  text-gray-500
                "
              >

                <span>🔒 Secure Submission</span>

                <span className="text-gray-300">
                  •
                </span>

                <span>⚡ Fast Response</span>

              </div>

            </div>

          </form>

        </motion.div>

      </div>

    </section>
  )
}

export default LeadForm