import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaArrowRight
} from "react-icons/fa"

function Footer() {

  const links = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Reviews", href: "#reviews" },
  ]

  const services = [
    "Business Analysis",
    "Marketing",
    "Sales Strategies",
    "Meta Ads",
  ]

  return (

    <footer
      className="
        relative
        overflow-hidden
        bg-[#050505]
        text-white
        pt-28
        pb-10
        px-6
      "
    >

      {/* BACKGROUND BLURS */}

      <div
        className="
          absolute
          top-[-180px]
          left-[-140px]
          w-[420px]
          h-[420px]
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
          bottom-[-180px]
          right-[-140px]
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

        <div
          className="
            grid
            sm:grid-cols-2
            lg:grid-cols-4
            gap-14
            lg:gap-16
          "
        >

          {/* COMPANY */}

          <div>

            {/* LOGO */}

            <div className="flex items-center gap-4">

              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  text-white
                  font-bold
                  text-xl
                  shadow-lg
                "
                style={{
                  background:
                    "linear-gradient(135deg,#2563eb,#7c3aed)"
                }}
              >
                G
              </div>

              <div>

                <h2
                  className="
                    text-3xl
                    font-bold
                    tracking-tight
                  "
                >
                  Growup
                </h2>

                <p className="text-sm text-gray-500 mt-1">
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
                text-[15px]
                max-w-sm
              "
            >

              We help businesses scale faster
              with affordable marketing,
              lead generation, and digital solutions.

            </p>

            {/* CTA */}

            <a
              href="#contact"
              className="
                inline-flex
                items-center
                gap-3
                mt-8
                px-6
                py-4
                rounded-2xl
                font-semibold
                text-sm
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

              Free Consultation

              <FaArrowRight className="text-xs" />

            </a>

          </div>

          {/* QUICK LINKS */}

          <div>

            <h3
              className="
                text-xl
                font-semibold
                mb-8
              "
            >
              Quick Links
            </h3>

            <div className="flex flex-col gap-5">

              {links.map((item, index) => (

                <a
                  key={index}
                  href={item.href}
                  className="
                    text-gray-400
                    hover:text-white
                    transition-all
                    duration-300
                    hover:translate-x-1
                    w-fit
                  "
                >
                  {item.label}
                </a>

              ))}

            </div>

          </div>

          {/* SERVICES */}

          <div>

            <h3
              className="
                text-xl
                font-semibold
                mb-8
              "
            >
              Services
            </h3>

            <div className="flex flex-col gap-5">

              {services.map((service, index) => (

                <div
                  key={index}
                  className="
                    text-gray-400
                    flex
                    items-center
                    gap-3
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
                text-xl
                font-semibold
                mb-8
              "
            >
              Contact
            </h3>

            <p
              className="
                text-gray-400
                leading-8
                text-[15px]
              "
            >

              Contact our team to scale
              your business faster 🚀

            </p>

            {/* CONTACT CARD */}

            <div
              className="
                mt-8
                p-5
                rounded-3xl
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-xl
              "
            >

              <div className="flex gap-4">

                {/* FACEBOOK */}

                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-white/5
                    flex
                    items-center
                    justify-center
                    hover:bg-blue-600
                    transition-all
                    duration-300
                    cursor-pointer
                    hover:-translate-y-1
                  "
                >

                  <FaFacebookF className="text-lg" />

                </div>

                {/* INSTAGRAM */}

                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-white/5
                    flex
                    items-center
                    justify-center
                    hover:bg-pink-600
                    transition-all
                    duration-300
                    cursor-pointer
                    hover:-translate-y-1
                  "
                >

                  <FaInstagram className="text-lg" />

                </div>

                {/* WHATSAPP */}

                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-white/5
                    flex
                    items-center
                    justify-center
                    hover:bg-green-600
                    transition-all
                    duration-300
                    cursor-pointer
                    hover:-translate-y-1
                  "
                >

                  <FaWhatsapp className="text-lg" />

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* DIVIDER */}

        <div
          className="
            mt-20
            mb-8
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
            justify-between
            gap-5
          "
        >

          <p className="text-gray-500 text-sm">

            © 2026 Growup Business Consultancy.
            All rights reserved.

          </p>

          <div
            className="
              flex
              items-center
              gap-6
              text-sm
              text-gray-500
            "
          >

            <a
              href="#"
              className="
                hover:text-white
                transition
              "
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="
                hover:text-white
                transition
              "
            >
              Terms
            </a>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer