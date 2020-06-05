import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Headder from './Headder'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'

const App = () => {
  return (
    <>
    <Route path='/' component={Headder} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path ='/contact' component={Contact} />
      </Switch>
    <Route path='/' component={Footer} />
    </>
  )
}

export default App
