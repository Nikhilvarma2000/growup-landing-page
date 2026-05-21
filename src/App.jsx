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
/* ULTRA PREMIUM FLOATING BAR STYLES */
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
      0 0 25px rgba(96,165,250,.18),
      0 0 60px rgba(168,85,247,.18),
      0 20px 80px rgba(0,0,0,.45);
  }

  50% {

    box-shadow:
      0 0 40px rgba(96,165,250,.32),
      0 0 100px rgba(168,85,247,.32),
      0 20px 90px rgba(0,0,0,.55);
  }
}

@keyframes livePulse {

  0%,100% {
    transform:scale(1);
    opacity:1;
  }

  50% {
    transform:scale(.7);
    opacity:.4;
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

  border-radius:28px;

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

.cta-button {

  transition:
    all .35s cubic-bezier(.34,1.56,.64,1);
}

.cta-button:hover {

  transform:
    translateY(-4px)
    scale(1.04);
}

.cta-button:hover .shine {
  animation:
    shineMove .8s ease forwards;
}

.live-dot {
  animation:
    livePulse 1.4s ease infinite;
}

.close-btn:hover {

  background:
    rgba(255,255,255,.16) !important;

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

  if (!show || closed) return null

  return (

    <div
      className="
        floating-enter

        fixed
        bottom-3
        left-1/2
        -translate-x-1/2

        z-50

        w-[95%]
        sm:w-[92%]

        max-w-7xl
      "
    >

      <div className="ultra-border">

        <div
          className="ultra-card"

          style={{
            position:"relative",

            overflow:"hidden",

            borderRadius:"26px",

            background:
              "linear-gradient(135deg,rgba(15,23,42,.97),rgba(76,29,149,.96),rgba(15,23,42,.98))",

            backdropFilter:"blur(25px)",

            fontFamily:"'Manrope',sans-serif"
          }}
        >

          {/* AMBIENT GLOWS */}

          <div
            style={{
              position:"absolute",
              top:"-140px",
              left:"-120px",

              width:"320px",
              height:"320px",

              borderRadius:"50%",

              background:
                "radial-gradient(circle,rgba(96,165,250,.28),transparent 70%)",

              filter:"blur(25px)"
            }}
          />

          <div
            style={{
              position:"absolute",
              bottom:"-140px",
              right:"-100px",

              width:"320px",
              height:"320px",

              borderRadius:"50%",

              background:
                "radial-gradient(circle,rgba(192,132,252,.25),transparent 70%)",

              filter:"blur(25px)"
            }}
          />

          {/* GRID OVERLAY */}

          <div
            style={{
              position:"absolute",
              inset:0,

              backgroundImage:
                "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)",

              backgroundSize:"40px 40px",

              maskImage:
                "linear-gradient(to bottom,transparent,black 20%,black 80%,transparent)"
            }}
          />

          {/* CLOSE BUTTON */}

          <button

            onClick={() => setClosed(true)}

            className="close-btn"

            style={{
              position:"absolute",

              top:"12px",
              right:"12px",

              width:"36px",
              height:"36px",

              borderRadius:"50%",

              border:"1px solid rgba(255,255,255,.1)",

              background:"rgba(255,255,255,.08)",

              color:"#fff",

              fontSize:"18px",

              cursor:"pointer",

              zIndex:50,

              transition:".35s ease",

              backdropFilter:"blur(10px)"
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

              gap-6

              px-5
              sm:px-8
              lg:px-10

              py-5
              sm:py-6
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

              {/* LIVE OFFER */}

              <div
                style={{
                  display:"inline-flex",
                  alignItems:"center",
                  gap:"8px",

                  padding:"7px 14px",

                  borderRadius:"999px",

                  background:"rgba(255,255,255,.08)",

                  border:"1px solid rgba(255,255,255,.08)",

                  marginBottom:"14px",

                  backdropFilter:"blur(10px)"
                }}
              >

                <span
                  className="live-dot"

                  style={{
                    width:"8px",
                    height:"8px",

                    borderRadius:"50%",

                    background:"#60a5fa"
                  }}
                />

                <span
                  style={{
                    color:"rgba(255,255,255,.88)",

                    fontSize:"11px",

                    fontWeight:800,

                    letterSpacing:".08em"
                  }}
                >

                  LIMITED TIME OFFER

                </span>

              </div>

              {/* MAIN HEADING */}

              <h2
                style={{
                  margin:0,

                  fontSize:"clamp(28px,6vw,62px)",

                  fontWeight:900,

                  lineHeight:1,

                  letterSpacing:"-0.05em",

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
                  marginTop:"12px",
                  marginBottom:0,

                  color:"rgba(255,255,255,.68)",

                  fontSize:"13px",

                  lineHeight:1.8,

                  fontWeight:500
                }}
              >

                Premium UI • Responsive • SEO Ready • Fast Delivery • Modern Design

              </p>

            </div>

            {/* RIGHT BUTTON */}

            <a
              href="#contact"

              className="
                floating-button

                relative
                z-10

                w-full
                sm:w-auto
              "

              style={{
                textDecoration:"none",

                maxWidth:"250px"
              }}
            >

              <button
                className="
                  cta-button

                  relative
                  overflow-hidden

                  w-full

                  px-8
                  sm:px-10

                  py-4
                  sm:py-5

                  rounded-[20px]

                  border-0

                  cursor-pointer

                  font-black

                  text-sm
                  sm:text-base

                  text-black
                "

                style={{
                  background:
                    "linear-gradient(135deg,#ffffff,#dbeafe,#c084fc)"
                }}
              >

                {/* SHINE EFFECT */}

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

                  Consult Now 🚀

                </span>

              </button>

            </a>

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