import React,{Component} from 'react'
import {browserHistory} from '../history'


export default class Link extends Component {
  handleClick = (e) => {
    const {to} = this.props
    e.preventDefault()
    browserHistory.push(to)
  }
  render() {
    const {to, children} = this.props
    console.log(children)
    return (
      <a href= {to} onClick={this.handleClick}>
        {children}
      </a>
    )
  }
}