import Link from "next/link"
import navBlob from "../../../public/imgs/Blobs/NavBlob.svg"
import ExportedImage from "next-image-export-optimizer"
import { FaEnvelopeSquare, FaLinkedin } from "react-icons/fa"
import { FaSquareGithub, FaSquareXTwitter } from "react-icons/fa6"

function Header({ display }: { display: boolean }) {
  return (
    <div className="main-header text-center" style={{ backgroundColor: "#222222", display: display ? "flex" : "none" }}>
        <header>
          <h1>
            ReyasHey
          <hr className="my-3" />
            <div style={{ fontWeight: "500", transform: "translateY(-50%)" }}>Portfolio</div>
          </h1>
        </header>

        <nav className="sticky-nav-links-wrapper">
            <ul>
                <li className="sticky-link-wrapper">
                  <ExportedImage
                    src={navBlob}
                    alt="Navigation Blob for Home"
                    style={{ height: "2rem" }}
                  />
                  <Link href="#Home" className="bouncy-nav-link">Home</Link>
                </li>

                <li className="sticky-link-wrapper">
                  <ExportedImage
                    src={navBlob}
                    alt="Navigation Blob for Technologies"
                    style={{ height: "2rem" }}
                  />
                  <Link href="#Technologies" className="bouncy-nav-link">Technologies</Link>
                </li>

                <li className="sticky-link-wrapper">
                  <ExportedImage
                    src={navBlob}
                    alt="Navigation Blob for Projects"
                    style={{ height: "2rem" }}
                  />
                  <Link href="#Projects" className="bouncy-nav-link">Projects</Link>
                </li>

                <li className="sticky-link-wrapper">
                  <ExportedImage
                    src={navBlob}
                    alt="Navigation Blob for Contacts"
                    style={{ height: "2rem" }}
                  />
                  <Link href="#Contacts" className="bouncy-nav-link">Contacts</Link>
                </li>
            </ul>
        </nav>

        <div className="d-flex align-items-center justify-content-evenly" >
          <Link href="mailto:reyas.hey@gmail.com" aria-label="Email link">
            <FaEnvelopeSquare size={50} fill="grey" />
          </Link>
          <Link href="https://www.linkedin.com/in/leandro-bonaccorso-8976a0237" target="_blank" aria-label="Linkedin link">
            <FaLinkedin size={50} fill="grey" />
          </Link>
          <Link href="https://github.com/ReyasHey" target="_blank" aria-label="Github link">
            <FaSquareGithub size={50} fill="grey" />
          </Link>
          <Link href="https://twitter.com/ReyasHey" target="_blank" aria-label="Twitter">
            <FaSquareXTwitter size={50} fill="grey" />
          </Link>
        </div>
    </div>
  )
}

export default Header
