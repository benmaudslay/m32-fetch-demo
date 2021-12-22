import "./App.css"
import MovieListing from "./Popular"
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom"

const App = () => {
  return (
    <div className="App">
      <Router>
        <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/popular">Popular</Link>
          </li>
          <li>
            <Link to="/comingSoon">Coming Soon</Link>
          </li>
        </nav>

        <Switch>
          <Route path="/popular">
            <MovieListing type="popular" />
          </Route>
          <Route path="/comingSoon">
            <MovieListing type="coming" />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

const ComingSoon = () => {
  // fetch the data here
  return (
    <div>
      <h1>Coming soon: ....</h1>
    </div>
  )
}

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to my Movie Site</h1>
      <Link to="/subpage1">Sub page 1</Link>
      <Link to="/subpage2">Sub page 2</Link>
      <Switch>
        <Route path="/subpage1">
          <h3>Sub page 1</h3>
        </Route>
        <Route path="/subpage2">
          <h3>Sub page 2</h3>
        </Route>
      </Switch>
    </div>
  )
}

export default App
