import PropTypes from 'prop-types'
import React, { Component } from 'react'

import {browserHistory} from '../history' 

export default class Router extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: window.location
    }
  }
  getChildContext() {
    return {
      History: browserHistory
    }
  }
  render() {
    const {children} = this.props
    
    return <div>
      {
        children
      }
    </div>
  }
} 

Router.childContextTypes = {
  History: PropTypes.object
}