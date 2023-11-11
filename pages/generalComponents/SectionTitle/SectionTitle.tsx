import { ReactNode } from "react"
import style from "./SectionTitle.module.css"

interface props {
    title: string,
    id?: string
}

function SectionTitle( props: props ) {
  return (
    <h2 id={ props.id ? props.id : props.title } className={ style.title }>{ props.title }</h2>
  )
}

export default SectionTitle
