import Link from "next/link"

function Header() {
  return (
    <header>
        <nav style={{ position: "fixed", zIndex: "5" }}>
            <ul>
                <li><Link href="#Home">Home</Link></li>
                <li><Link href="#Technologies">Technologies</Link></li>
                <li><Link href="#Projects">Projects</Link></li>
                <li><Link href="#Contacts">Contacts</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
