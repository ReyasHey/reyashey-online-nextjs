import Link from "next/link"
import SectionTitle from "../pages/generalComponents/SectionTitle/SectionTitle"

function Footer() {
  return (
    <footer>
        <SectionTitle id="Contacts" title="Keep in Contact" />

        <p>
            Thank you for visiting my portfolio!
        </p>

        <Link href="" > Follow me </Link>
        <span> or </span>
        <Link href="" > Contact me </Link>

        <p>
            To stay tuned on my next projects or if you want to
            <br />
            know more about what's behind the hood
        </p>

    </footer>
  )
}

export default Footer
