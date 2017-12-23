import PropTypes from 'prop-types'
import React, { Component } from 'react'

import {browserHistory} from '../history'

export default class Route extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   path: window.location.pathname
    // }
  }

  // componentWillMount() {
  //   browserHistory.listen(this.handleChangePath)
  // }

  // handleChangePath = (path) => {
  //   this.setState({
  //     path,
  //   })
  // }

  render() { 
    const {component: Component, path} = this.props
    return this.context.path === path ? <Component /> : null
  }
} 

Route.contextTypes = {
  path: PropTypes.string
}
