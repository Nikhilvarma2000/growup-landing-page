import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import WhyChooseUs from "./components/WhyChooseUs"
import About from "./components/About"
import Testimonials from "./components/Testimonials"
import LeadForm from "./components/LeadForm"
import Footer from "./components/Footer"

import { FaWhatsapp } from "react-icons/fa"

function App() {

  return (

    <div className="relative overflow-hidden bg-white">

      {/* BACKGROUND GLOWS */}

      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-blue-200 opacity-20 blur-[120px] rounded-full -z-10"></div>

      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-purple-200 opacity-20 blur-[120px] rounded-full -z-10"></div>

      {/* WEBSITE */}

      <Navbar />

      <Hero />

      <Services />

      <WhyChooseUs />

      <About />

      <Testimonials />

      <LeadForm />

      <Footer />

      {/* FLOATING BUTTONS */}

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">

        {/* CONSULTATION BUTTON */}

        <a href="#contact">

          <div
            className="
              group
              relative
              overflow-hidden
              px-7
              py-4
              rounded-2xl
              backdrop-blur-xl
              border
              border-white/20
              text-white
              font-semibold
              shadow-2xl
              hover:scale-105
              hover:-translate-y-1
              transition-all
              duration-300
            "
            style={{
              background:
                "linear-gradient(135deg,#6366f1,#8b5cf6)",
              boxShadow:
                "0 18px 40px rgba(99,102,241,0.35)"
            }}
          >

            {/* SHINE EFFECT */}

            <div
              className="
                absolute
                top-0
                left-[-120%]
                w-[60%]
                h-full
                skew-x-[-20deg]
                opacity-30
                group-hover:left-[220%]
                transition-all
                duration-700
              "
              style={{
                background:
                  "linear-gradient(90deg,transparent,white,transparent)"
              }}
            />

            <span className="relative z-10 flex items-center gap-2">

              🚀 Get Consultation

            </span>

          </div>

        </a>

        {/* WHATSAPP BUTTON */}

        <a
          href="https://wa.me/919150299458"
          target="_blank"
          rel="noopener noreferrer"
        >

          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-500 text-white flex items-center justify-center text-2xl sm:text-3xl shadow-2xl hover:scale-110 hover:shadow-green-300 transition-all duration-300 animate-bounce">

            <FaWhatsapp />

          </div>

        </a>

      </div>

    </div>

  )
}

export default App