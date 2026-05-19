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

      {/* WHATSAPP BUTTON */}

      <a
        href="https://wa.me/919150299458"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >

        <div className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center text-3xl shadow-2xl hover:scale-110 hover:shadow-green-300 transition-all duration-300 animate-bounce">

          <FaWhatsapp />

        </div>

      </a>

    </div>

  )
}

export default App