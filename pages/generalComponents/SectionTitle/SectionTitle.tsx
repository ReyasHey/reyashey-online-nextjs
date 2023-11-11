import { ReactNode } from "react"
import style from "./SectionTitle.module.css"

interface props {
    title: string,
    id?: string | undefined
    className?: string | undefined
}

function SectionTitle( props: props ) {

  const classes = props.className != null ? props.className : ''

  return (
    <h2 id={ props.id ? props.id : props.title } className={ style.title + ' ' + classes }>{ props.title }</h2>
  )
}

export default SectionTitle
