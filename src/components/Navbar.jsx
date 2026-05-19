import { useState, useEffect } from "react"
import { FaArrowRight } from "react-icons/fa"

function Navbar() {

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
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

    <>
      <style>{`

        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        *{
          box-sizing:border-box;
        }

        body{
          font-family:'Plus Jakarta Sans',sans-serif;
        }

        .navbar-wrapper{

          position:fixed;

          top:0;
          left:0;

          width:100%;

          z-index:999;
        }

        .navbar{

          width:100%;
          height:88px;

          padding:0 42px;

          display:flex;
          align-items:center;
          justify-content:space-between;

          transition:0.35s ease;

          background:
            ${scrolled
              ? "rgba(255,255,255,0.78)"
              : "transparent"};

          backdrop-filter:
            ${scrolled
              ? "blur(18px)"
              : "blur(0px)"};

          -webkit-backdrop-filter:
            ${scrolled
              ? "blur(18px)"
              : "blur(0px)"};

          border-bottom:
            ${scrolled
              ? "1px solid rgba(0,0,0,0.06)"
              : "1px solid transparent"};

          box-shadow:
            ${scrolled
              ? "0 10px 40px rgba(0,0,0,0.06)"
              : "none"};
        }

        /* LOGO */

        .logo{
          display:flex;
          align-items:center;
          gap:16px;
          text-decoration:none;
        }

        .logo-icon{

          width:56px;
          height:56px;

          border-radius:20px;

          display:flex;
          align-items:center;
          justify-content:center;

          background:
            linear-gradient(
              135deg,
              #6366f1,
              #8b5cf6
            );

          color:white;

          font-size:1.25rem;
          font-weight:800;

          box-shadow:
            0 16px 35px rgba(99,102,241,0.30);
        }

        .logo-text{
          display:flex;
          flex-direction:column;
        }

        .logo-title{

          font-size:1.28rem;
          font-weight:800;

          color:#111827;

          letter-spacing:-0.05em;
        }

        .logo-sub{

          margin-top:3px;

          font-size:0.78rem;
          font-weight:600;

          color:#6b7280;
        }

        /* CTA */

        .cta-btn{

          position:relative;
          overflow:hidden;

          display:flex;
          align-items:center;
          gap:10px;

          padding:15px 26px;

          border-radius:18px;

          text-decoration:none;

          background:
            linear-gradient(
              135deg,
              #111827,
              #1f2937
            );

          color:white;

          font-size:0.95rem;
          font-weight:700;

          transition:0.35s ease;

          box-shadow:
            0 14px 35px rgba(0,0,0,0.16);
        }

        .cta-btn::before{

          content:"";

          position:absolute;

          top:0;
          left:-120%;

          width:60%;
          height:100%;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(255,255,255,0.18),
              transparent
            );

          transform:skewX(-20deg);

          transition:0.7s ease;
        }

        .cta-btn:hover::before{
          left:220%;
        }

        .cta-btn:hover{

          transform:
            translateY(-3px);

          box-shadow:
            0 20px 45px rgba(0,0,0,0.22);
        }

        .cta-arrow{
          transition:0.3s ease;
        }

        .cta-btn:hover .cta-arrow{
          transform:translateX(4px);
        }

        /* MOBILE */

        @media(max-width:768px){

          .navbar{

            height:76px;

            padding:0 18px;
          }

          .logo-icon{

            width:46px;
            height:46px;

            border-radius:16px;

            font-size:1rem;
          }

          .logo-title{
            font-size:1rem;
          }

          .logo-sub{
            display:none;
          }

          .cta-btn{

            padding:12px 16px;

            border-radius:14px;

            font-size:0.82rem;
          }
        }

      `}</style>

      <div className="navbar-wrapper">

        <nav className="navbar">

          {/* LOGO */}

          <a
            href="#home"
            className="logo"
          >

            <div className="logo-icon">

            <img
            src="/logo.png"
            alt="Growup Logo"
            style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "20px"
          }}
          />

</div>
            <div className="logo-text">

              <span className="logo-title">
                GrowUp
              </span>

              <span className="logo-sub">
                Business Consultancy
              </span>

            </div>

          </a>

          {/* CTA */}

          <a
            href="#contact"
            className="cta-btn"
          >

            Free Consultation

            <FaArrowRight className="cta-arrow" />

          </a>

        </nav>

      </div>
    </>
  )
}

export default Navbar