import React from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Recommendedvideos from './Recommendedvideos'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <div className="app">

        <Router>
        <Header />

          <Switch>
            <Route path="/search">
              <h1>this is search page</h1>
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