import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './Home'
import Headder from './Headder'

const App = () => {
  return (
    <>
    <Route path='/' component={Headder} />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </>
  )
}

export default App
