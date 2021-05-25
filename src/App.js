import React from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Recommendedvideos from './Recommendedvideos'
import {BrowserRouter as Router,Switch ,Route } from 'react-router-dom'

const App = () => {
  return (
    <>
    <div className="app">
      <Header />
     <div className="app__page">
       <Sidebar/>
       <Recommendedvideos/>
     </div>
    </div>
      
    </>
  )

}

export default App;