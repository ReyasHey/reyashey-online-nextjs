import Image from 'next/image';
import styles from "@styles/Hero.module.css"

import ReyasAvatar from "../../../../public/imgs/Reyas-avatar.webp"

import BG from "../../../../public/imgs/BGs/heroBG.webp"

import Blob1 from "../../../../public/imgs/Blobs/blob1.svg"
import Blob2 from "../../../../public/imgs/Blobs/blob2.svg"
import Blob3 from "../../../../public/imgs/Blobs/blob3.svg"

function MainHero() {
  return (
    <section id='Home' style={{ padding: "0 20vw", position: "relative", height: "100vh", overflow: "hidden" }}>
        <Image
            priority
            src={ BG }
            alt="Main Background Image"
            style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", zIndex: "-10" }}
        />

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "40vw", height: "100%", paddingBottom: "10vh" }}>
            <h1 style={{ textAlign: "center" }} >
                Reyas
                <br />
                Hey,
            </h1>

            <p style={{ fontSize: "clamp(0.8rem, 1.5vw, 20rem)" }}>
                I'm an Italy based software/web developer, with a strong interest in everything tech
            </p>
        </div>

        <div className={ styles.heroImg }>
            <Image
                priority
                src={ ReyasAvatar }
                alt="Reyas' avatar"
                width="527"
                height="1052"
                style={{ width: "clamp(300px, 25vw, 9000px)", height: "auto", maxHeight: "100%" , maxWidth: "100%" }}
            />
        </div>


        <Image src={ Blob3 } alt="Morphing Blob 1"
            style={{ position: "absolute", top: "13vh", width: "10rem", height: "fit-content", filter: "blur(10px)" }}
        />

        <Image src={ Blob2 } alt="Morphing Blob 1"
            style={{ position: "absolute", top: "33vh", left: "44vw", width: "14rem", height: "fit-content", filter: "blur(5px)", zIndex: "-8" }}
        />

        <Image src={ Blob1 } alt="Morphing Blob 1"
            style={{ position: "absolute", top: "68vh", left: "25vw", width: "16rem", height: "fit-content", filter: "blur(1px)", }}
        />

    </section>
  )
}

export default MainHero
