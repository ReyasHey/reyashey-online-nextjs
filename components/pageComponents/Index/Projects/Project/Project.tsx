import { ReactNode } from "react"
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

import styles from "@styles/Project.module.css"
import ButtonLink from "@components/generalComponents/ButtonLink/ButtonLink";


interface props {
    // General Settings
    bgColor: string,
    bgTextColor: string,
    fgColor: string,
    fgTextColor: string,
    orientation: "ltr" | "rtl"
    // Text Bubble Settings
    title1: string,
    title2: string,
    excerptElement: ReactNode,
    // Image settings
    img: string,
    imgAlt: string,
    imgWidth: number,
    imgHeight: number,
    imgOrientation: "landscape" | "portrait",
    url: string,
    repo: string
}

function Project(props: props) {
    return (
        <div className={ styles.project } style={{ flexDirection: props.orientation === "rtl" ? "row-reverse" as "row-reverse" : "row" as "row" }}>
            <div style={{ backgroundColor: props.bgColor, color: props.bgTextColor }} className={ styles.textBubble }>
                <header style={{ margin: "0.5rem" }}>
                    <h3>{ props.title1 }</h3>
                    <h4>{ props.title2 }</h4>
                </header>
                { props.excerptElement }
            </div>

            <div style={{ backgroundColor: props.bgColor }} className={ `${styles.imgBubble} ${props.imgOrientation === "landscape" ? styles.landscape : styles.portrait}` }>
                <Link href={ props.url ?? '' } target="_blank" >
                    <ExportedImage src={ `/imgs/Projects/${ props.img }` } alt={ props.imgAlt } width={ props.imgWidth } height={ props.imgHeight } />
                </Link>

                <div className={ styles.linksWrapper }>
                    <ButtonLink
                        href={ props.url ?? '' }
                        target="_blank"
                        bgColor={ props.fgColor }
                        color={ props.fgTextColor }
                    >
                        Visit Website &gt;
                    </ButtonLink>

                    <ButtonLink
                        href={ props.repo ?? '' }
                        target="_blank"
                        bgColor={ props.fgColor }
                        color={ props.fgTextColor }
                    >
                        Github Project &gt;
                    </ButtonLink>
                </div>
            </div>
        </div>
    )
}

export default Project
