import classes from "@styles/Technology.module.css"

interface props {
  text: string
}

function Technology(props: props) {
  return (
    <li className={ classes.singleTech + ` col-3 mx-auto my-2 btn btn-dark` } >
      { props.text }
    </li>
  )
}

export default Technology
