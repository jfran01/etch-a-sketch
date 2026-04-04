function createGrid(num = 16) {
  let squareContainer = document.querySelector(".square-container");
  for (let i = 0; i < num; i++) {
    let newRow = document.createElement("div");
    newRow.classList.add("row");
    for (let j = 0; j < num; j++) {
      let newSquare = document.createElement("div");
      newSquare.classList.add("square");
      newRow.appendChild(newSquare);
    }
    squareContainer.appendChild(newRow);
  }
}

createGrid();
