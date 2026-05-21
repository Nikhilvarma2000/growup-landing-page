import {
  FaWhatsapp,
  FaArrowRight,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
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

        pt-16
        sm:pt-20
        lg:pt-24

        pb-8
        sm:pb-10

        px-4
        sm:px-6
      "
    >

      {/* BACKGROUND GLOW */}

      <div
        className="
          absolute
          top-[-120px]
          left-[-120px]

          w-[220px]
          sm:w-[320px]

          h-[220px]
          sm:h-[320px]

          rounded-full

          blur-3xl
          opacity-20
        "

        style={{
          background:
            "linear-gradient(135deg,#4f46e5,#7c3aed)"
        }}
      />

      {/* CONTAINER */}

      <div
        className="
          relative
          z-10

          max-w-[950px]
          mx-auto
        "
      >

        {/* TITLE */}

        <div className="text-center">

          <h2
            className="
              text-[2rem]
              sm:text-5xl

              leading-tight

              font-black
            "
          >

            Contact Information

          </h2>

          <p
            className="
              mt-4
              sm:mt-5

              text-gray-400

              text-sm
              sm:text-base

              leading-7

              max-w-[650px]
              mx-auto
            "
          >

            Get in touch for premium websites,
            business growth and digital marketing services.

          </p>

        </div>

        {/* CARD */}

        <div
          className="
            mt-10
            sm:mt-12

            p-5
            sm:p-8

            rounded-[24px]
            sm:rounded-[32px]

            border
            border-white/10

            bg-white/[0.04]

            backdrop-blur-xl
          "
        >

          {/* CONTACT ITEMS */}

          <div
            className="
              flex
              flex-col

              gap-6
              sm:gap-8
            "
          >

            {/* EMAIL */}

            <div
              className="
                flex

                items-start

                gap-4
              "
            >

              <div
                className="
                  shrink-0

                  w-11
                  h-11

                  sm:w-12
                  sm:h-12

                  rounded-2xl

                  flex
                  items-center
                  justify-center

                  bg-violet-600/20
                "
              >

                <FaEnvelope
                  className="
                    text-violet-400

                    text-sm
                    sm:text-base
                  "
                />

              </div>

              <div className="min-w-0">

                <p
                  className="
                    text-gray-500

                    text-xs
                    sm:text-sm

                    mb-1.5
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

                    break-words

                    font-semibold

                    hover:text-violet-400

                    transition-all
                    duration-300
                  "
                >

                  growupbusinessconsultancy@gmail.com

                </a>

              </div>

            </div>

            {/* PHONE */}

            <div
              className="
                flex
                items-start

                gap-4
              "
            >

              <div
                className="
                  shrink-0

                  w-11
                  h-11

                  sm:w-12
                  sm:h-12

                  rounded-2xl

                  flex
                  items-center
                  justify-center

                  bg-blue-600/20
                "
              >

                <FaPhoneAlt
                  className="
                    text-blue-400

                    text-sm
                    sm:text-base
                  "
                />

              </div>

              <div>

                <p
                  className="
                    text-gray-500

                    text-xs
                    sm:text-sm

                    mb-1.5
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

                    font-semibold

                    hover:text-blue-400

                    transition-all
                    duration-300
                  "
                >

                  +91 91829 86117

                </a>

              </div>

            </div>

            {/* ADDRESS */}

            <div
              className="
                flex
                items-start

                gap-4
              "
            >

              <div
                className="
                  shrink-0

                  w-11
                  h-11

                  sm:w-12
                  sm:h-12

                  rounded-2xl

                  flex
                  items-center
                  justify-center

                  bg-pink-600/20
                "
              >

                <FaMapMarkerAlt
                  className="
                    text-pink-400

                    text-sm
                    sm:text-base
                  "
                />

              </div>

              <div>

                <p
                  className="
                    text-gray-500

                    text-xs
                    sm:text-sm

                    mb-1.5
                  "
                >

                  Address

                </p>

                <p
                  className="
                    text-white

                    text-sm
                    sm:text-base

                    font-semibold

                    leading-7
                  "
                >

                  Pragathi Nagar,
                  Hyderabad

                </p>

              </div>

            </div>

          </div>

          {/* BUTTON */}

          <a
            href="https://wa.me/919182986117"

            target="_blank"
            rel="noreferrer"

            className="
              mt-8
              sm:mt-10

              flex
              items-center
              justify-center

              gap-3

              w-full

              px-5
              sm:px-6

              py-4

              rounded-2xl

              bg-green-600

              text-white

              text-sm
              sm:text-base

              font-bold

              hover:bg-green-500
              hover:-translate-y-1

              transition-all
              duration-300
            "
          >

            <FaWhatsapp />

            Chat On WhatsApp

            <FaArrowRight className="text-xs" />

          </a>

        </div>

        {/* COPYRIGHT */}

        <p
          className="
            mt-8
            sm:mt-10

            text-center

            text-gray-500

            text-[11px]
            sm:text-sm

            leading-6
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