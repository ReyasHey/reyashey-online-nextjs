import Technology from './Technology/Technology'

import rectangles from "../../../../public/imgs/TechRectangles/rectangle-blood-dragon-no-opacity.svg"
import SectionTitle from '@components/generalComponents/SectionTitle/SectionTitle';
import Image from 'next/image';


function Tech() {
  return (
    <section id='Technologies'>
        <Image
            src={ rectangles }
            alt="Decorative Rectangle 1"
            style={{ width: "100%", zIndex: "-1000000", marginTop: "-5rem", position: "relative", top: "-1rem", filter: "brightness(98%)" }}
        />

        <div style={{ padding: "3vw" }} className='container '>
          <SectionTitle title="Tech" className="mt-3 mb-2" />
          <ul className='mt-4 row mx-auto' style={{ height: "5rem" }}>
            <Technology text="Html5" />
            <Technology text="React" />
            <Technology text="Next.js" />
            <Technology text=".NET" />
            <Technology text="MySQL" />
            <Technology text="AWS" />
            <Technology text="and More..." />
          </ul>
        </div>

        <Image
            src={ rectangles }
            alt="Decorative Rectangle 1"
            style={{ width: "100%", zIndex: "-1000000", marginBottom: "-5rem", position: "relative", bottom: "-1rem", transform: "rotate(180deg)", filter: "brightness(98%)" }}
        />
    </section>
  )
}

export default Tech
