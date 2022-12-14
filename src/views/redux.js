import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"

const Redux = props => {
  const incrementSalary = () => {
    props.dispatch({ type: "INCREMENT" })
  }
  const decrementSalary = () => {
    props.dispatch({ type: "DECREMENT" })
  }
  return (
    <div>
      <br />
      <br />
      <br />
      {props.salary || "number dint load"}
      <br />
      <button onClick={incrementSalary}>incre</button>
      <button onClick={decrementSalary}>decre</button>
      <br />
      <Link to="/">back to index</Link>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    salary: state.salary,
  }
}

export default connect(mapStateToProps)(Redux)
// above doesnt work on gatsby, use the one below
// export default Redux
