import React from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Recommendedvideos from './Recommendedvideos'
import SearchPage from './SearchPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <div className="app">
        <Router>
          <Header />
          <Switch>
            <Route path="/search/:searchTerm">
              <div className="app__page">
                <Sidebar />
                <SearchPage />
              </div>
            </Route>
            <Route path="/">
              <div className="app__page">
                <Sidebar />
                <Recommendedvideos />
              </div>
            </Route>
          </Switch>
        </Router>





      </div>

    </>
  )

}

export default App;