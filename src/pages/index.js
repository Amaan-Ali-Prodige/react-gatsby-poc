import * as React from "react"
import { Link } from "gatsby"
import Seo from "../components/seo"
// import Redux from "./redux"
import Redux from "../views/redux"
import { legacy_createStore as createStore } from "redux"
import { Provider } from "react-redux"

const employeeData = { salary: 1000 }
const reducer = (state = employeeData, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { salary: state.salary + 100 }
    case "DECREMENT":
      return { salary: state.salary - 100 }
    default:
      return state
  }
}
const store = createStore(reducer)
const IndexPage = () => {
  return (
    <>
      this is home page
      <br />
      <Link to="/page-2">2nd page</Link>
      <br />
      <Link to="/page-3">3rd page</Link>
      <br />
      <Link to="/number">React State Example</Link>
      <br />
      <Link to="/redux">React Redux Example</Link>
      <Provider store={store}>
        <Redux />
      </Provider>
    </>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
