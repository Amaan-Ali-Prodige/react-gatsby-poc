import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import axios from "axios"
import Seo from "../components/seo"

const host = "localhost"
const apiLink = `http://${host}/wordpressapireact/wp-json/wp/v2/new-post`

const SecondPage = () => {
  useEffect(() => {
    getApiData()
  }, [])
  const [state, setState] = useState({
    content: [],
    error: [],
  })

  const getApiData = () => {
    setState({
      content: "loading...",
    })
    axios
      .get(apiLink)
      .then(res =>
        // console.log('state.content', res.data)
        setState({
          content: res.data[0],
        })
      )
      .catch(err =>
        // console.log(err)
        setState({
          error: err,
        })
      )
  }

  return (
    <>
      this is page 2 helooooo page 222
      <br />
      <p
        style={{ margin: "0" }}
        dangerouslySetInnerHTML={{
          __html: `${
            state?.content?.title?.rendered ||
            state.error?.message ||
            "loading....."
          }`,
        }}
      />
      <button onClick={getApiData}>refresh</button>
      <br />
      <Link to="/">back to index</Link>
    </>
  )
}

export const Head = () => <Seo title="Page two" />

export default SecondPage
