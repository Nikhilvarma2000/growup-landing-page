import {
  FaWhatsapp,
  FaArrowRight
} from "react-icons/fa"

function Footer() {

  const services = [
    "Business Analysis",
    "Marketing",
    "Sales Strategies",
    "Meta Ads",
  ]

  return (

    <footer

      id="footer"

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

          max-w-[1450px]
          mx-auto
        "
      >

        {/* TOP */}

        <div
          className="
            grid

            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-3

            gap-12
            sm:gap-14
            lg:gap-16
          "
        >

          {/* COMPANY */}

          <div>

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

                  shadow-lg
                "

                style={{
                  background:
                    "linear-gradient(135deg,#2563eb,#7c3aed)"
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

                    tracking-tight
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

            {/* DESC */}

            <p
              className="
                text-gray-400

                mt-6
                sm:mt-7

                leading-7
                sm:leading-8

                text-sm
                sm:text-[15px]

                max-w-sm
              "
            >

              We help businesses scale faster
              with affordable marketing,
              lead generation, Meta ads,
              and digital business solutions.

            </p>

            {/* BUTTON */}

            <a
              href="#contact"

              className="
                inline-flex
                items-center
                justify-center

                gap-3

                mt-7
                sm:mt-8

                px-5
                sm:px-6

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
                  "0 14px 30px rgba(0,0,0,0.35)"
              }}
            >

              Get Consultation

              <FaArrowRight className="text-xs" />

            </a>

          </div>

          {/* SERVICES */}

          <div>

            <h3
              className="
                text-lg
                sm:text-xl

                font-bold

                mb-6
                sm:mb-8
              "
            >
              Services
            </h3>

            <div
              className="
                flex
                flex-col

                gap-4
                sm:gap-5
              "
            >

              {services.map((service, index) => (

                <div
                  key={index}

                  className="
                    text-gray-400

                    flex
                    items-center

                    gap-3

                    text-sm
                    sm:text-base
                  "
                >

                  <div
                    className="
                      w-2
                      h-2

                      rounded-full

                      bg-violet-500
                    "
                  />

                  {service}

                </div>

              ))}

            </div>

          </div>

          {/* CONTACT */}

          <div>

            <h3
              className="
                text-lg
                sm:text-xl

                font-bold

                mb-6
                sm:mb-8
              "
            >
              Contact
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
            mt-14
            sm:mt-20

            mb-6
            sm:mb-8

            h-[1px]
            w-full

            bg-gradient-to-r
            from-transparent
            via-white/10
            to-transparent
          "
        />

        {/* BOTTOM */}

        <div
          className="
            flex
            flex-col
            md:flex-row

            items-center
            justify-center

            gap-5
          "
        >

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

      </div>

    </footer>
  )
}

export default Footer