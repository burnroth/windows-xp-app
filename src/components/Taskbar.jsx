import React, { Component } from 'react'
import Img from 'gatsby-image'
import flag from '../../content/assets/flag.png'

class Taskbar extends Component {
  render() {
    return(
      <div id="taskbar">
        
        <div id="homebtn">
        <img id="flag" src={flag} alt=""/>
         <p>Start</p>
        </div>
      </div>
    )
  }
}

export default Taskbar