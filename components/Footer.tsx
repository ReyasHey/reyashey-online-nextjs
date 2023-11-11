import SectionTitle from "../pages/generalComponents/SectionTitle/SectionTitle"
import { FaSquareXTwitter, FaLinkedin, FaSquareGithub } from 'react-icons/fa6';
import { FaEnvelopeSquare } from 'react-icons/fa';
import Link from "next/link";

function Footer() {
  return (
    <footer >
        <SectionTitle id="Contacts" title="Keep in Contact" style={{ margin: "5vw" }} />

        <p>
            Thank you for visiting my portfolio!
        </p>

        {/* Gradient section */}
        <div className="my-5">
          <div className="d-flex flex-wrap align-items-center justify-content-center gap-4" style={{ width: "100%" }}>
            <span className="gradient-text follow-gradient-text">&nbsp;&nbsp;&nbsp;&nbsp;Follow me</span>
            <span className="footer-gradients-separator"> or </span>
            <span className="gradient-text contact-gradient-text">Contact me</span>
          </div>

          <div className="d-flex align-items-center justify-content-center gap-3" >
            <Link href="mailto:reyas.hey@gmail.com" aria-label="Email link">
              <FaEnvelopeSquare size={50} fill="url(#SvgGradient1)"/>
            </Link>
            <Link href="https://www.linkedin.com/in/leandro-bonaccorso-8976a0237" target="_blank" aria-label="Linkedin link">
              <FaLinkedin size={50} fill="url(#SvgGradient2)" />
            </Link>
            <Link href="https://github.com/ReyasHey" target="_blank" aria-label="Github link">
              <FaSquareGithub size={50} fill="url(#SvgGradient3)" />
            </Link>
            <Link href="https://twitter.com/ReyasHey" target="_blank" aria-label="Twitter">
              <FaSquareXTwitter size={50} fill="url(#SvgGradient4)" />
            </Link>
          </div>
        </div>

        <span>
            To stay tuned on my next projects or if you want to
            <br />
            know more about what's behind the hood
        </span>



        {/* Defining gradients for svgs */}
        <svg>
          <defs>
              <linearGradient id="SvgGradient1">
              <stop offset="0%" stopColor="#922eb8"></stop>
              <stop offset="100%" stopColor="#a432ab"></stop>
              </linearGradient>
          </defs>
          <defs>
              <linearGradient id="SvgGradient2">
              <stop offset="0%" stopColor="#ae36a2"></stop>
              <stop offset="100%" stopColor="#bc3a95"></stop>
              </linearGradient>
          </defs>
          <defs>
              <linearGradient id="SvgGradient3">
              <stop offset="0%" stopColor="#c43c8d"></stop>
              <stop offset="100%" stopColor="#cd4081"></stop>
              </linearGradient>
          </defs>
          <defs>
              <linearGradient id="SvgGradient4">
              <stop offset="0%" stopColor="#d24379"></stop>
              <stop offset="100%" stopColor="#d9486c"></stop>
              </linearGradient>
          </defs>
        </svg>


    </footer>
  )
}

export default Footer
