import "./App.css"
import { useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import MovieListing from "./components/Popular"
import { NavBar } from "./components/NavBar"
import { HomePage } from "./components/HomePage"
import { FavouritePage } from "./components/FavouritePage"

const App = () => {
  const [favourites, setFavourites] = useState([])

  const handleAddFavourite = (item) => {
    setFavourites([...favourites, item])
  }

  const handleRemoveFav = (index) => {
    let temp = [...favourites]
    temp.splice(index, 1)
    setFavourites([...temp])
  }

  return (
    <div className="App">
      <Router>
        <NavBar />

        <Switch>
          <Route path="/popular">
            <MovieListing handleAddFavourite={handleAddFavourite} />
          </Route>
          <Route path="/favourites">
            <FavouritePage data={favourites} handleRemoveFav={handleRemoveFav} />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
