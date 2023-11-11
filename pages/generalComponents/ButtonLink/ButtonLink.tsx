import Link from 'next/link'
import { ReactNode } from 'react'
import styles from "./ButtonLink.module.css"

interface props {
  href: string,
  target?: string,
  bgColor?: string,
  color?: string,
  children?: ReactNode
}

function ButtonLink( props: props ) {
  return (
    <Link
      href={ props.href }
      target={ props.target }
      style={{ backgroundColor: props.bgColor, color: props.color }}
      className={ styles.btn }
    >
      { props.children }
    </Link>
  )
}

export default ButtonLink
