document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)

  const moveContainer = document.getElementById("move-containier")
  
  var moveList = []

  document.addEventListener("keydown", function(e) {
    if (e.key == "ArrowUp"){
      moveList.push(move("up"))
      moveContainer.push("<li>Up</li>")
    }
    else if (e.key == "ArrowDown"){
      moveList.push(move("down"))
      moveContainer.push("<liDown</li>")
    }
    else if (e.key == "ArrowLeft"){
      moveList.push(move("left"))
      moveContainer.push("<li>Left</li>")
    }
    else (e.key == "ArrowRight")
    moveList.push(move("right"))
    moveContainer.push("<li>Right</li>")
  })
})
