import React, { Component } from "react"
import folder from "../../content/assets/folder.png"
import camelCase from "lodash/camelCase"

export let folderNode = ""

class Folder extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  dragStart(e) {
    e.persist()
    folderNode = e.target.offsetParent
    // console.log(e)
    console.log(e)
  }

  dragEnd(e) {
    e.persist()
    console.log(e)
  }
  render() {
    const folderID = camelCase(this.props.folderName)

    return (
      <div
        // ref={ node => {this.node = node}}
        onDoubleClick={this.props.handleDoubleClick}
        className="folder fill"
        id={folderID}
        onDragStart={this.dragStart}
        onDragEnd={this.dragEnd}
        draggable="true"
      >
        <div draggable="true" id="folder">
          <img name={folderID} src={folder} alt="" />
          <p>{this.props.folderName} </p>
        </div>
      </div>
    )
  }
}

export default Folder
