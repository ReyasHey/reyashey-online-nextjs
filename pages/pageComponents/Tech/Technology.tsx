interface props {
  text: string
}

const style = {
  borderRadius: "15px",
  backgroundColor: "#333333",
  padding: "0.5em",
  margin: "0 2rem",
  color: "aliceblue",
  width: "fit-content",
}

function Technology(props: props) {
  return (
    <li style={ style }>
      { props.text }
    </li>
  )
}

export default Technology
