import {render} from 'react-dom'
import React, {Component} from 'react'

import Home from './Home'
import Login from './Login'
import Forget from './Forget'
import Register from './Register'
import Link from '../src/components/Link'
import Route from '../src/components/Route'
import Router from '../src/components/Router'


class Index extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Router>
          <Route path={"/"} component={Home}></Route>
          <Route path={"/login"} component={Login}></Route>
          <Route path={"/forget"} component={Forget}></Route>
          <Route path={"/register"} component={Register}></Route>
        </Router>
      </div>
    )
  }
}

render(<Index />, document.getElementById('root'))



