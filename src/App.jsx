import { useEffect, useState } from "react"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import WhyChooseUs from "./components/WhyChooseUs"
import About from "./components/About"
import Testimonials from "./components/Testimonials"
import LeadForm from "./components/LeadForm"
import Footer from "./components/Footer"

/* ───────────────────────────────────────────── */
/* FLOATING BAR STYLES */
/* ───────────────────────────────────────────── */

const floatStyles = `

@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800;900&display=swap');

@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

@keyframes borderRotate {

  to {
    --angle: 360deg;
  }
}

@keyframes slideUp {

  from {
    opacity:0;
    transform:
      translateY(120px)
      scale(.92);
  }

  to {
    opacity:1;
    transform:
      translateY(0)
      scale(1);
  }
}

@keyframes pulseGlow {

  0%,100% {

    box-shadow:
      0 0 20px rgba(96,165,250,.18),
      0 0 50px rgba(168,85,247,.18),
      0 15px 60px rgba(0,0,0,.45);
  }

  50% {

    box-shadow:
      0 0 35px rgba(96,165,250,.28),
      0 0 80px rgba(168,85,247,.28),
      0 15px 80px rgba(0,0,0,.55);
  }
}

@keyframes pulseDot {

  0%,100% {
    transform:scale(1);
    opacity:1;
  }

  50% {
    transform:scale(.7);
    opacity:.5;
  }
}

@keyframes shineMove {

  0% {
    left:-120%;
  }

  100% {
    left:220%;
  }
}

.floating-enter {

  animation:
    slideUp .8s cubic-bezier(.34,1.56,.64,1) both;
}

.ultra-border {

  position:relative;

  padding:2px;

  border-radius:24px;

  background:
    conic-gradient(
      from var(--angle),
      #60a5fa,
      #8b5cf6,
      #c084fc,
      #ffffff,
      #60a5fa
    );

  animation:
    borderRotate 7s linear infinite;
}

.ultra-card {

  animation:
    pulseGlow 3s ease-in-out infinite;
}

.live-dot {

  animation:
    pulseDot 1.4s ease infinite;
}

.cta-button {

  transition:
    all .35s cubic-bezier(.34,1.56,.64,1);
}

.cta-button:hover {

  transform:
    translateY(-3px)
    scale(1.03);
}

.cta-button:hover .shine {

  animation:
    shineMove .8s ease forwards;
}

.close-btn:hover {

  background:
    rgba(255,255,255,.15) !important;

  transform:
    rotate(90deg);
}

@media(max-width:640px){

  .floating-mobile{
    flex-direction:column;
    align-items:stretch !important;
  }

  .floating-button{
    width:100%;
    max-width:100% !important;
  }

}
`

/* ───────────────────────────────────────────── */
/* FLOATING BAR */
/* ───────────────────────────────────────────── */

function FloatingBar() {

  const [show, setShow] = useState(false)

  const [closed, setClosed] = useState(false)

  useEffect(() => {

    const timer = setTimeout(() => {
      setShow(true)
    }, 700)

    return () => clearTimeout(timer)

  }, [])

  /* BUTTON CLICK */

  const handleConsultation = () => {

    /* CLOSE BAR */
    setClosed(true)

    /* SCROLL TO FORM */

    const form = document.getElementById("contact")

    if(form){

      form.scrollIntoView({
        behavior:"smooth",
        block:"start"
      })

    }
  }

  if (!show || closed) return null

  return (

    <div
      className="
        floating-enter

        fixed
        bottom-2
        left-1/2
        -translate-x-1/2

        z-50

        w-[94%]
        sm:w-[90%]

        max-w-5xl
      "
    >

      <div className="ultra-border">

        <div
          className="ultra-card"

          style={{
            position:"relative",

            overflow:"hidden",

            borderRadius:"22px",

            background:
              "linear-gradient(135deg,rgba(15,23,42,.97),rgba(76,29,149,.96))",

            backdropFilter:"blur(20px)",

            fontFamily:"'Manrope',sans-serif"
          }}
        >

          {/* AMBIENT GLOW */}

          <div
            style={{
              position:"absolute",
              top:"-100px",
              left:"-100px",

              width:"220px",
              height:"220px",

              borderRadius:"50%",

              background:
                "radial-gradient(circle,rgba(96,165,250,.22),transparent 70%)",

              filter:"blur(20px)"
            }}
          />

          <div
            style={{
              position:"absolute",
              bottom:"-100px",
              right:"-80px",

              width:"220px",
              height:"220px",

              borderRadius:"50%",

              background:
                "radial-gradient(circle,rgba(192,132,252,.20),transparent 70%)",

              filter:"blur(20px)"
            }}
          />

          {/* CLOSE BUTTON */}

          <button

            onClick={() => setClosed(true)}

            className="close-btn"

            style={{
              position:"absolute",

              top:"10px",
              right:"10px",

              width:"30px",
              height:"30px",

              borderRadius:"50%",

              border:"1px solid rgba(255,255,255,.1)",

              background:"rgba(255,255,255,.08)",

              color:"#fff",

              fontSize:"15px",

              cursor:"pointer",

              zIndex:50,

              transition:".35s ease"
            }}
          >

            ×

          </button>

          {/* MAIN CONTENT */}

          <div
            className="
              floating-mobile

              relative
              z-10

              flex

              items-center
              justify-between

              gap-4

              px-4
              sm:px-6
              lg:px-7

              py-4
            "
          >

            {/* LEFT SIDE */}

            <div
              className="
                flex
                flex-col

                items-center
                sm:items-start

                text-center
                sm:text-left
              "
            >

              {/* BADGE */}

              <div
                style={{
                  display:"inline-flex",
                  alignItems:"center",
                  gap:"7px",

                  padding:"6px 12px",

                  borderRadius:"999px",

                  background:"rgba(255,255,255,.08)",

                  border:"1px solid rgba(255,255,255,.06)",

                  marginBottom:"10px"
                }}
              >

                <span
                  className="live-dot"

                  style={{
                    width:"7px",
                    height:"7px",

                    borderRadius:"50%",

                    background:"#60a5fa"
                  }}
                />

                <span
                  style={{
                    color:"rgba(255,255,255,.85)",

                    fontSize:"10px",

                    fontWeight:800,

                    letterSpacing:".08em"
                  }}
                >

                  LIMITED TIME OFFER

                </span>

              </div>

              {/* HEADING */}

              <h2
                style={{
                  margin:0,

                  fontSize:"clamp(22px,5vw,42px)",

                  fontWeight:900,

                  lineHeight:1.05,

                  letterSpacing:"-0.04em",

                  background:
                    "linear-gradient(90deg,#60a5fa,#c084fc,#ffffff)",

                  WebkitBackgroundClip:"text",

                  WebkitTextFillColor:"transparent"
                }}
              >

                Professional Websites
                <br />

                At ₹1999/- Only

              </h2>

              {/* SUBTEXT */}

              <p
                style={{
                  marginTop:"8px",
                  marginBottom:0,

                  color:"rgba(255,255,255,.65)",

                  fontSize:"12px",

                  lineHeight:1.6,

                  fontWeight:500
                }}
              >

                Responsive • SEO Ready • Premium Design

              </p>

            </div>

            {/* BUTTON */}

            <div
              className="
                floating-button

                w-full
                sm:w-auto
              "

              style={{
                maxWidth:"210px"
              }}
            >

              <button

                onClick={handleConsultation}

                className="
                  cta-button

                  relative
                  overflow-hidden

                  w-full

                  px-6
                  sm:px-7

                  py-3.5

                  rounded-[18px]

                  border-0

                  cursor-pointer

                  font-black

                  text-sm
                  sm:text-[15px]

                  text-black
                "

                style={{
                  background:
                    "linear-gradient(135deg,#ffffff,#dbeafe,#c084fc)"
                }}
              >

                {/* SHINE */}

                <div
                  className="shine"

                  style={{
                    position:"absolute",

                    top:0,
                    left:"-120%",

                    width:"60%",
                    height:"100%",

                    transform:"skewX(-20deg)",

                    background:
                      "linear-gradient(90deg,transparent,rgba(255,255,255,.8),transparent)"
                  }}
                />

                <span
                  style={{
                    position:"relative",
                    zIndex:10
                  }}
                >

                  Get Consultation 🚀

                </span>

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

/* ───────────────────────────────────────────── */
/* APP */
/* ───────────────────────────────────────────── */

function App() {

  return (

    <div className="relative overflow-hidden bg-white">

      {/* GLOBAL STYLES */}

      <style>{floatStyles}</style>

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

      {/* FLOATING BAR */}

      <FloatingBar />

    </div>

  )
}

export default App