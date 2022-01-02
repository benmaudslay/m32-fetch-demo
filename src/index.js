import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
// import App from "./App"
import { MovieApp, ChuckNorris } from "./control"

// import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    {/* <Router> */}
    <MovieApp />
    {/* <ChuckNorris /> */}
    {/* </Router> */}
  </React.StrictMode>,
  document.getElementById("root")
)
