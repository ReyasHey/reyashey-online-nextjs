import Head from "next/head"
import Link from "next/link"

import { FaExternalLinkAlt } from "react-icons/fa";

function DailyMoodBoard() {
  return (
    <main className="container" style={{ marginTop: "10rem" }}>

      <Head>
        <title>Daily Mood Board</title>
        <meta name="description" content="Mood Board with a daily word, a daily palette of colors and in the future also daily images for art/design/fashion inspiration and more." />
      </Head>

      <div className="row">

        <h1 className="col-12">Coming soon...</h1>

        <span className="text-center col-12">
          For the time being you can check the test version
          &nbsp;
          <Link href="https://reyashey.github.io/DailyMoodBoard/" target="_blank">
            here
            &nbsp;
            <FaExternalLinkAlt size={25} />
          </Link>
        </span>
      </div>

    </main>
  )
}

export default DailyMoodBoard
