import "./App.css"
import { useState } from "react"
import MovieListing from "./Popular"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { NavBar } from "./NavBar"
import { HomePage } from "./HomePage"
import { FavouritePage } from "./FavouritePage"

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
