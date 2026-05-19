import { useState, useEffect } from "react"
import { FaArrowRight } from "react-icons/fa"

function Navbar() {

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener(
      "scroll",
      handleScroll
    )

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      )

  }, [])

  return (

    <header
      className={`
        fixed
        top-0
        left-0
        w-full
        z-[999]

        transition-all
        duration-300

        ${
          scrolled
            ? "bg-white/80 backdrop-blur-2xl border-b border-black/[0.05] shadow-[0_10px_40px_rgba(0,0,0,0.05)]"
            : "bg-transparent"
        }
      `}
    >

      {/* CONTAINER */}

      <div
        className="
          max-w-[1450px]
          mx-auto

          h-[82px]
          sm:h-[88px]

          px-4
          sm:px-6
          lg:px-8

          flex
          items-center
          justify-between
        "
      >

        {/* LEFT */}

        <a
          href="#home"

          className="
            flex
            items-center

            gap-3
            sm:gap-4

            min-w-0
          "
        >

          {/* LOGO */}

          <div
            className="
              shrink-0

              w-[48px]
              h-[48px]

              sm:w-[56px]
              sm:h-[56px]

              rounded-[16px]
              sm:rounded-[20px]

              overflow-hidden

              bg-gradient-to-br
              from-violet-500
              to-indigo-600

              shadow-[0_16px_35px_rgba(99,102,241,0.28)]
            "
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

          {/* TEXT */}

          <div
            className="
              flex
              flex-col

              leading-none

              min-w-0
            "
          >

            <span
              className="
                text-[1rem]
                sm:text-[1.2rem]

                font-extrabold

                text-gray-900

                truncate
              "

              style={{
                letterSpacing:"-0.05em"
              }}
            >

              GrowUp

            </span>

            <span
              className="
                hidden
                sm:block

                mt-1

                text-[11px]

                font-semibold

                uppercase

                tracking-[0.18em]

                text-gray-500
              "
            >

              Business Consultancy

            </span>

          </div>

        </a>

        {/* RIGHT */}

        <a
          href="#contact"

          className="
            shrink-0

            flex
            items-center
            justify-center

            gap-2

            px-4
            sm:px-6
            lg:px-7

            h-[46px]
            sm:h-[52px]

            rounded-[14px]
            sm:rounded-[18px]

            text-[13px]
            sm:text-[15px]

            font-bold

            text-white

            bg-gradient-to-br
            from-[#111827]
            to-[#1f2937]

            transition-all
            duration-300

            hover:-translate-y-1
          "

          style={{
            boxShadow:
              "0 14px 35px rgba(0,0,0,0.16)"
          }}
        >

          <span className="hidden xs:block">
            Free Consultation
          </span>

          <span className="xs:hidden">
            Contact
          </span>

          <FaArrowRight
            className="
              text-[11px]
              sm:text-[12px]
            "
          />

        </a>

      </div>

    </header>
  )
}

export default Navbar