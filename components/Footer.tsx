import SectionTitle from "../pages/generalComponents/SectionTitle/SectionTitle"
import { FaSquareXTwitter, FaLinkedin, FaSquareGithub } from 'react-icons/fa6';
import { FaEnvelopeSquare } from 'react-icons/fa';
import Link from "next/link";

function Footer() {
  return (
    <footer >
        <SectionTitle id="Contacts" title="Keep in Contact" />

        <p>
            Thank you for visiting my portfolio!
        </p>

        <div className="d-flex flex-wrap align-items-center justify-content-center gap-3" style={{ width: "100%" }}>
          <span className="mail-link">&nbsp;&nbsp;&nbsp;&nbsp;Follow me</span>
          <span> or </span>
          <span className="socialLinksText">Contact me</span>
        </div>

        <div className="d-flex align-items-center justify-content-center gap-3" >
          <Link href="mailto:reyas.hey@gmail.com">
            <FaEnvelopeSquare size={40} fill="url(#SvgGradient1)" />
          </Link>
          <Link href="https://www.linkedin.com/in/leandro-bonaccorso-8976a0237" target="_blank">
            <FaLinkedin size={40} fill="url(#SvgGradient2)" />
          </Link>
          <Link href="https://github.com/ReyasHey" target="_blank">
            <FaSquareGithub size={40} fill="url(#SvgGradient3)" />
          </Link>
          <Link href="https://twitter.com/ReyasHey" target="_blank">
            <FaSquareXTwitter size={40} fill="url(#SvgGradient4)" />
          </Link>
        </div>

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

        <span>
            To stay tuned on my next projects or if you want to
            <br />
            know more about what's behind the hood
        </span>

    </footer>
  )
}

export default Footer
