import React from "react"

import Taskbar from "../components/Taskbar"
import "./styles.css"
import Folder from "../components/Folder"
import upperFirst from "lodash/upperFirst"
import Window from "../components/Window"
import { folderNode } from "../components/Folder"
class BlogIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      MaggansPortfolio: false,
      MaggansWebbdesign: false,
      MaggansWebbutveckling: false,
      
    }

    this.handleDoubleClick = this.handleDoubleClick.bind(this)
    this.handleDragOver = this.handleDragOver.bind(this)
    this.handleDrop = this.handleDrop.bind(this)
  }

  handleDoubleClick(e) {
    e.persist()
    let folderID = e.target.name
    const componentName = upperFirst(e.target.name)
    console.log(componentName)
    this.setState({
      [componentName]: true,
    })
  }

  handleDragOver(e) {
    e.preventDefault()
  }
  handleDrop(e) {
    e.persist()
    const placeholder = e.target
    const payload = e.dataTransfer.getData("node")
    console.log(payload)
    console.log(folderNode)
    placeholder.append(folderNode)
  }

  render() {
    return (
      <div>
        <div>
          <p></p>
          <Folder folderName="Maggans Portfolio" />
          <Folder folderName="Maggans Webbdesign" />
          <Folder folderName="Maggans Webbutveckling" />

          <div>
            <div
              onDragOver={this.handleDragOver}
              onDrop={this.handleDrop}
              className="empty"
            ></div>

            <div
              onDragOver={this.handleDragOver}
              onDrop={this.handleDrop}
              className="empty"
            ></div>

            <div
              onDragOver={this.handleDragOver}
              onDrop={this.handleDrop}
              className="empty"
            ></div>

            <div
              onDragOver={this.handleDragOver}
              onDrop={this.handleDrop}
              className="empty"
            ></div>

            <div
              onDragOver={this.handleDragOver}
              onDrop={this.handleDrop}
              className="empty"
            ></div>
          </div>
        </div>
        {this.state.MaggansPortfolio ? <Window /> : null}
        <Taskbar />
      </div>
    )
  }
}

export default BlogIndex
