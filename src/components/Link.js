import React,{Component} from 'react'
import {browserHistory} from './history'


export default class Link extends Component {
  handleClick = (e) => {
    const {path} = this.props
    e.preventDefault()
    browserHistory.push(path)
  }
  render() {
    const {path} = this.props
    return (
      <a href= {path} onClick={this.handleClick} />
    )
  }
}