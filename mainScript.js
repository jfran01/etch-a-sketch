function createGrid(num = 16) {
  let squareContainer = document.querySelector(".square-container");
  for (let i = 0; i < num; i++) {
    let newRow = document.createElement("div");
    newRow.classList.add("row");
    for (let j = 0; j < num; j++) {
      let newSquare = document.createElement("div");
      newSquare.classList.add("square");
      newSquare.addEventListener("mouseover", () => {
        newSquare.classList.add("hover");
      });
      newRow.appendChild(newSquare);
    }
    squareContainer.appendChild(newRow);
  }
}

function newGrid() {
  document.querySelector(".square-container").innerHTML = "";
  let chosenNum = prompt("what size would you like your grid to be?");
  createGrid(chosenNum);
}

createGrid();
let newGridBtn = document.querySelector("#new-grid-btn");
newGridBtn.addEventListener("click", newGrid);
