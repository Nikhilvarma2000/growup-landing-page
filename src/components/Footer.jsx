import {
  FaWhatsapp,
  FaArrowRight
} from "react-icons/fa"

function Footer() {

  return (

    <footer

      id="contact-info"

      className="
        relative
        overflow-hidden

        bg-[#050505]

        text-white

        pt-20
        sm:pt-24
        lg:pt-28

        pb-8
        sm:pb-10

        px-4
        sm:px-6
      "
    >

      {/* BLUR BG */}

      <div
        className="
          absolute
          top-[-150px]
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
            "linear-gradient(135deg,#4f46e5,#7c3aed)"
        }}
      />

      <div
        className="
          absolute
          bottom-[-150px]
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
            "linear-gradient(135deg,#06b6d4,#3b82f6)"
        }}
      />

      {/* CONTAINER */}

      <div
        className="
          relative
          z-10

          max-w-[1100px]
          mx-auto
        "
      >

        {/* TOP */}

        <div
          className="
            flex
            flex-col
            lg:flex-row

            items-start
            justify-between

            gap-14
          "
        >

          {/* LEFT */}

          <div
            className="
              max-w-[500px]
            "
          >

            {/* LOGO */}

            <div
              className="
                flex
                items-center
                gap-4
              "
            >

              <div
                className="
                  w-12
                  h-12

                  sm:w-14
                  sm:h-14

                  rounded-2xl

                  overflow-hidden
                "

                style={{
                  background:
                    "linear-gradient(135deg,#2563eb,#7c3aed)",

                  boxShadow:
                    "0 16px 40px rgba(124,58,237,0.35)"
                }}
              >

                <img
                  src="/logo.png"
                  alt="Growup Logo"

                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />

              </div>

              <div>

                <h2
                  className="
                    text-2xl
                    sm:text-3xl

                    font-black
                  "
                >

                  Growup

                </h2>

                <p
                  className="
                    text-xs
                    sm:text-sm

                    text-gray-500

                    mt-1
                  "
                >

                  Business Consultancy

                </p>

              </div>

            </div>

            {/* DESCRIPTION */}

            <p
              className="
                text-gray-400

                mt-7

                leading-8

                text-sm
                sm:text-[15px]
              "
            >

              We build premium modern websites
              and help businesses grow faster
              with digital marketing, Meta ads,
              branding and lead generation solutions.

            </p>

            {/* CTA */}

            <a
              href="#contact"

              className="
                inline-flex
                items-center
                justify-center

                gap-3

                mt-8

                px-6
                py-4

                rounded-2xl

                text-sm
                font-semibold

                transition-all
                duration-300

                hover:-translate-y-1
              "

              style={{
                background:
                  "linear-gradient(135deg,#111827,#1f2937)",

                boxShadow:
                  "0 14px 35px rgba(0,0,0,0.35)"
              }}
            >

              Get Consultation

              <FaArrowRight className="text-xs" />

            </a>

          </div>

          {/* CONTACT */}

          <div
            className="
              w-full
              max-w-[430px]
            "
          >

            <h3
              className="
                text-2xl

                font-bold

                mb-7
              "
            >

              Contact Information

            </h3>

            <div
              className="
                p-6
                sm:p-7

                rounded-[30px]

                border
                border-white/10

                bg-white/[0.04]

                backdrop-blur-xl
              "
            >

              {/* EMAIL */}

              <div className="mb-6">

                <p
                  className="
                    text-gray-500
                    text-sm
                    mb-2
                  "
                >

                  Email

                </p>

                <a
                  href="mailto:growupbusinessconsultancy@gmail.com"

                  className="
                    text-white

                    text-sm
                    sm:text-base

                    font-medium

                    hover:text-violet-400

                    transition-all
                    duration-300
                  "
                >

                  growupbusinessconsultancy@gmail.com

                </a>

              </div>

              {/* PHONE */}

              <div className="mb-6">

                <p
                  className="
                    text-gray-500
                    text-sm
                    mb-2
                  "
                >

                  Phone

                </p>

                <a
                  href="tel:+919182986117"

                  className="
                    text-white

                    text-sm
                    sm:text-base

                    font-medium

                    hover:text-violet-400

                    transition-all
                    duration-300
                  "
                >

                  +91 91829 86117

                </a>

              </div>

              {/* ADDRESS */}

              <div>

                <p
                  className="
                    text-gray-500
                    text-sm
                    mb-2
                  "
                >

                  Address

                </p>

                <p
                  className="
                    text-white

                    text-sm
                    sm:text-base

                    font-medium
                  "
                >

                  Pragathi Nagar, Hyderabad

                </p>

              </div>

              {/* WHATSAPP */}

              <a
                href="https://wa.me/919182986117"

                target="_blank"
                rel="noreferrer"

                className="
                  mt-7

                  inline-flex
                  items-center
                  gap-3

                  px-5
                  py-4

                  rounded-2xl

                  bg-green-600

                  text-white

                  font-semibold

                  hover:bg-green-500
                  hover:-translate-y-1

                  transition-all
                  duration-300
                "
              >

                <FaWhatsapp />

                Chat On WhatsApp

              </a>

            </div>

          </div>

        </div>

        {/* DIVIDER */}

        <div
          className="
            mt-16

            mb-7

            h-[1px]
            w-full

            bg-gradient-to-r
            from-transparent
            via-white/10
            to-transparent
          "
        />

        {/* COPYRIGHT */}

        <p
          className="
            text-gray-500

            text-xs
            sm:text-sm

            text-center
          "
        >

          © 2026 Growup Business Consultancy.
          All rights reserved.

        </p>

      </div>

    </footer>
  )
}

export default Footer