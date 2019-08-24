# Försöka använda ref => node i drag istället för e.target.offsetParent då det crashar om man drar i wrappern istället för i mappen(img)
# Lägg på dblClick på mappar för att öppna Window.jsx
# Översätta Window.jsx till React


[ ] Hej
# this should be refactored to React code instead (Folder.jsx)
 // Fill listeners
    // fill.addEventListener("dragstart", dragStart)
    // fill.addEventListener("dragend", dragEnd)

    // // Loop through empty boxes and add listeners
    // for (const empty of empties) {
    //   empty.addEventListener("dragover", dragOver)
    //   empty.addEventListener("dragenter", dragEnter)
    //   empty.addEventListener("dragleave", dragLeave)
    //   // empty.addEventListener("drop", dragDrop)
    // }

    // // Drag Functions

    // function dragStart() {
    //   this.className += " hold"
    //   setTimeout(() => (this.className = "invisible"), 0)
    // }

    // function dragEnd() {
    //   this.className = "fill"
    //   console.log("dragend")
    // }

    // function dragOver(e) {
    //   e.preventDefault()
    //   console.log("dragover")
    // }

    // function dragEnter(e) {
    //   e.preventDefault()
    //   this.className += " hovered"
    //   console.log("dragenter")
    // }

    // function dragLeave() {
    //   this.className = "empty"
    //   console.log("dragleave")
    // }

    // function dragDrop() {
    //   this.className = "empty"
    //   this.append(folderNode)
    //   console.log(folderNode)
    //   console.log(this)
    // }

       componentDidMount() {
    const folders = this.node
    const empties = document.querySelectorAll(".empty")

   
  }