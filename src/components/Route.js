import PropTypes from 'prop-types'
import React, { Component } from 'react'

import {browserHistory} from '../history'

export default class Route extends Component {
  constructor(props) {
    super(props)
    this.state = {
      path: window.location.pathname
    }
  }
  componentWillMount() {
    console.log('hidr',this.context.History) 
    this.context.History.listen(this.handleChangePath)
  }
  handleChangePath = (path) => {
    console.log('change' ,path)
    this.setState({
      path,
    })
  }
  render() { 
    const {component: Component, path} = this.props
    console.log('component',this.props.component) 
    return this.state.path === path ? <Component /> : null
  }
} 

Route.contextTypes = {
  History: PropTypes.object
}
