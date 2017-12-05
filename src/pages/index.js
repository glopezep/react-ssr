import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './containers/Home'
import About from './containers/About'

const Page = (props) => (
  <Switch>
    <Route exact path='/' component={Home} {...props} />
    <Route exact path='/about' component={About} {...props} />
  </Switch>
)

export default Page