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
      translateY(100px)
      scale(.9);
  }

  to {
    opacity:1;
    transform:
      translateY(0)
      scale(1);
  }
}

@keyframes pulseDot {

  0%,100% {
    transform:scale(1);
    opacity:1;
  }

  50% {
    transform:scale(.7);
    opacity:.4;
  }
}

@keyframes glowPulse {

  0%,100% {

    box-shadow:
      0 0 20px rgba(96,165,250,.12),
      0 10px 40px rgba(0,0,0,.4);
  }

  50% {

    box-shadow:
      0 0 35px rgba(192,132,252,.18),
      0 10px 55px rgba(0,0,0,.5);
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
    slideUp .7s cubic-bezier(.34,1.56,.64,1) both;
}

.floating-border {

  padding:2px;

  border-radius:20px;

  background:
    conic-gradient(
      from var(--angle),
      #60a5fa,
      #8b5cf6,
      #c084fc,
      #60a5fa
    );

  animation:
    borderRotate 6s linear infinite;
}

.floating-card {

  animation:
    glowPulse 3s ease-in-out infinite;
}

.live-dot {

  animation:
    pulseDot 1.3s ease infinite;
}

.cta-btn {

  transition:
    all .35s cubic-bezier(.34,1.56,.64,1);
}

.cta-btn:hover {

  transform:
    translateY(-2px)
    scale(1.03);
}

.cta-btn:hover .shine {

  animation:
    shineMove .7s ease forwards;
}

.close-btn:hover {

  transform:
    rotate(90deg);

  background:
    rgba(255,255,255,.15) !important;
}

@media(max-width:640px){

  .floating-mobile{
    flex-direction:column;
    align-items:stretch !important;
  }

  .floating-btn{
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

  /* CONSULT BUTTON */

  const handleConsultation = () => {

    /* BOX VANISH */

    setClosed(true)

    /* SCROLL TO FORM */

    const form = document.getElementById("contact")

    if(form){

      setTimeout(() => {

        form.scrollIntoView({
          behavior:"smooth",
          block:"start"
        })

      }, 150)

    }
  }

  if(!show || closed) return null

  return (

    <div
      className="
        floating-enter

        fixed
        bottom-2
        left-1/2
        -translate-x-1/2

        z-50

        w-[92%]
        sm:w-[88%]

        max-w-4xl
      "
    >

      <div className="floating-border">

        <div
          className="floating-card"

          style={{
            position:"relative",

            overflow:"hidden",

            borderRadius:"18px",

            background:
              "linear-gradient(135deg,rgba(15,23,42,.96),rgba(76,29,149,.95))",

            backdropFilter:"blur(20px)",

            fontFamily:"'Manrope',sans-serif"
          }}
        >

          {/* GLOW */}

          <div
            style={{
              position:"absolute",
              top:"-80px",
              left:"-80px",

              width:"180px",
              height:"180px",

              borderRadius:"50%",

              background:
                "radial-gradient(circle,rgba(96,165,250,.18),transparent 70%)",

              filter:"blur(20px)"
            }}
          />

          {/* CLOSE BUTTON */}

          <button

            onClick={() => setClosed(true)}

            className="close-btn"

            style={{
              position:"absolute",

              top:"8px",
              right:"8px",

              width:"28px",
              height:"28px",

              borderRadius:"50%",

              border:"1px solid rgba(255,255,255,.1)",

              background:"rgba(255,255,255,.08)",

              color:"#fff",

              fontSize:"14px",

              cursor:"pointer",

              zIndex:50,

              transition:".35s ease"
            }}
          >

            ×

          </button>

          {/* CONTENT */}

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
              sm:px-5

              py-3.5
            "
          >

            {/* LEFT */}

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
                  gap:"6px",

                  padding:"5px 10px",

                  borderRadius:"999px",

                  background:"rgba(255,255,255,.08)",

                  border:"1px solid rgba(255,255,255,.06)",

                  marginBottom:"8px"
                }}
              >

                <span
                  className="live-dot"

                  style={{
                    width:"6px",
                    height:"6px",

                    borderRadius:"50%",

                    background:"#60a5fa"
                  }}
                />

                <span
                  style={{
                    color:"rgba(255,255,255,.82)",

                    fontSize:"9px",

                    fontWeight:800,

                    letterSpacing:".08em"
                  }}
                >

                  LIMITED OFFER

                </span>

              </div>

              {/* HEADING */}

              <h2
                style={{
                  margin:0,

                  fontSize:"clamp(18px,4vw,34px)",

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

            </div>

            {/* BUTTON */}

            <div
              className="
                floating-btn

                w-full
                sm:w-auto
              "

              style={{
                maxWidth:"190px"
              }}
            >

              <button

                onClick={handleConsultation}

                className="
                  cta-btn

                  relative
                  overflow-hidden

                  w-full

                  px-5
                  sm:px-6

                  py-3

                  rounded-[15px]

                  border-0

                  cursor-pointer

                  font-black

                  text-sm

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
                      "linear-gradient(90deg,transparent,rgba(255,255,255,.85),transparent)"
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

      {/* STYLES */}

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