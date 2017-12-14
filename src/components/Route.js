import PropTypes from 'prop-types'
import React, { Component } from 'react'

import {browserHistory} from '../history'

export default class Route extends Component {
  constructor(props) {
    super(props)
  }
  getChildContext() {
    return {
      History: browserHistory()
    }
  }
  render() {
    const {component: Component} = this.props
    return <Component />
  }
} 

Route.childContextTypes = {
  History: PropTypes.object
}