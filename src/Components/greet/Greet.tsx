
type initialState ={
  name?: string;
}

function Greet(props:initialState) {
  return (
    <div>
      Hello {props.name}
    </div>
  )
}

export default Greet
