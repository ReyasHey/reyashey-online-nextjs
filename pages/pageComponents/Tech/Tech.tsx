import Image from 'next/image';
import SectionTitle from '../../generalComponents/SectionTitle/SectionTitle'
import Technology from './Technology/Technology'

import recs from "../../../public/imgs/TechRectangles/rectangle-blood-dragon.svg"

function Tech() {
  return (
    <section>
        <Image
            src={ recs }
            alt="Decorative Rectangle 1"
            style={{ width: "100%", zIndex: "-1000000", marginTop: "-6rem", position: "relative", filter: "brightness(98%)" }}
        />

        <SectionTitle title="Tech" className="mt-3 mb-2" />

        <ul className='mt-3 row col-lg-9 col-11 mx-auto' style={{ height: "5rem" }}>
          <Technology text="Html5" />
          <Technology text=".NET" />
          <Technology text="MySQL" />
          <Technology text="React" />
          <Technology text="Next.js" />
          <Technology text="and More..." />
        </ul>

        <Image
            src={ recs }
            alt="Decorative Rectangle 1"
            style={{ width: "100%", zIndex: "-1000000", marginBottom: "-6rem", position: "relative", transform: "rotate(180deg)", filter: "brightness(98%)" }}
        />
    </section>
  )
}

export default Tech
