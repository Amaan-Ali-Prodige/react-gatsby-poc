import React, { useState } from "react"
import { Link } from "gatsby"
const Number = () => {
  const [number, setNumber] = useState(100)

  const incre = () => {
    setNumber(number + 100)
  }
  const decre = () => {
    setNumber(number - 100)
  }
  return (
    <>
      <div>Increase number</div>
      {number}
      <br />
      <button onClick={incre}>increase</button>
      <button onClick={decre}>decrease</button>
      <br />
      <Link to="/">back to index</Link>
    </>
  )
}

export default Number
