import { useState } from "react"

import "./App.css"

const App = () => {
  const [data, setData] = useState([])
  //   const [country, setCountry] = useState("uk")

  const handleFetch = async () => {
    // const response = await fetch(`https://covid19-api.com/country?name=${country}&format=json`)
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`)
    console.log(response)
    const data = await response.json()
    console.log(data)
    setData(data)
  }

  return (
    <div className="App">
      <h1>Movie DB Popular List</h1>
      {/* <form
        onSubmit={(e) => {
          e.preventDefault()
          setCountry(e.target.country.value)
          handleFetch()
        }}
      >
        <input type="text" name="country" />
        <button type="submit">Submit</button>
      </form> */}
      {/* <p>{data ? data : "Click the button"}</p> */}
      <button onClick={handleFetch}>click</button>
      {/* <div>
        {data && (
          <>
            <p>{data.country}</p>
            <p>{data.code}</p>
            <p>{data.confirmed}</p>
            <p>{data.recovered}</p>
          </>
        )}
      </div> */}
      <ol>
        {data.results &&
          data.results.map((movie, index) => {
            return (
              <li key={index}>
                <h4>{movie.original_title}</h4>
                <img className="poster" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
              </li>
            )
          })}
      </ol>
    </div>
  )
}

export default App
