import Link from "next/link"
import Image from "next/image"
import navBlob from "../public/imgs/Blobs/NavBlob.svg"

function Header() {
  return (
    <header className="main-header">
        <h1>ReyasHey</h1>

        <nav className="sticky-nav-links-wrapper">
            <ul>
                <li className="sticky-link-wrapper">
                  <Image
                    src={navBlob}
                    alt="Navigation Blob for Home"
                    style={{ height: "2rem" }}
                  />
                  <Link href="#Home" className="bouncy-nav-link">Home</Link>
                </li>

                <li className="sticky-link-wrapper">
                  <Image
                    src={navBlob}
                    alt="Navigation Blob for Technologies"
                    style={{ height: "2rem" }}
                  />
                  <Link href="#Technologies" className="bouncy-nav-link">Technologies</Link>
                </li>

                <li className="sticky-link-wrapper">
                  <Image
                    src={navBlob}
                    alt="Navigation Blob for Projects"
                    style={{ height: "2rem" }}
                  />
                  <Link href="#Projects" className="bouncy-nav-link">Projects</Link>
                </li>

                <li className="sticky-link-wrapper">
                  <Image
                    src={navBlob}
                    alt="Navigation Blob for Contacts"
                    style={{ height: "2rem" }}
                  />
                  <Link href="#Contacts" className="bouncy-nav-link">Contacts</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
