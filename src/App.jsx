import './index.css'


import React from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
//import {Auth} from "./pages/auth/index"
import Pagi from './Pagi'
import Expensee from './components/Expensee'
import Nav from './components/Nav'
const App = () => {
  return (
    <div>
       <Nav/>
<Router>
  <Routes>
  
    <Route path="/" exact element={<Pagi/>}/>
    <Route path="/expense" exact element={<Expensee/>}/>
  </Routes>
</Router>

    </div>
  )

}

export default App