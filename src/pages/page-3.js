import * as React from "react"
import { Link } from "gatsby"

import Seo from "../components/seo"

const ThirdPage = () => {
  return (
    <>
      this is page 3 testingggg hi
      <Link to="/">back to index</Link>
    </>
  )
}

export const Head = () => <Seo title="Page two" />

export default ThirdPage
