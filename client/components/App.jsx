import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Headder from './Headder'
import Home from './Home'
import About from './About'

const App = () => {
  return (
    <>
    <Route path='/' component={Headder} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
      </Switch>
    </>
  )
}

export default App
