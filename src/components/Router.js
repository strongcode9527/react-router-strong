import PropTypes from 'prop-types'
import React, { Component } from 'react'

import {browserHistory} from '../history' 

export default class Router extends Component {
  constructor(props) {
    super(props)
  }
  getChildContext() {
    return {
      History: browserHistory()
    }
  }
  render() {
    const {children} = this.props
    
    return <div>

    </div>
  }
} 

Router.childContextTypes = {
  History: PropTypes.object
}