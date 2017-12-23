import PropTypes from 'prop-types'
import React, { Component } from 'react'

import {browserHistory} from '../history' 

export default class Router extends Component {
  constructor(props) {
    super(props)
    this.state = {
      path: window.location.pathname
    }
  }
  getChildContext() {
    return {
      path: this.state.path
    }
  }
  componentWillMount() {
    browserHistory.listen(this.handlePopState)
  }
  componentDidMount() {
    window.addEventListener('popstate', this.handlePopState)
  }
  componentWillUnmount() {
    window.removeEventListener('popstate', this.handlePopState)
  }
  handlePopState = () => {
    this.setState({
      path: window.location.pathname
    })
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
  path: PropTypes.string
}