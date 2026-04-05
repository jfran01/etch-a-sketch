function createGrid(num = 16) {
  let squareContainer = document.querySelector(".square-container");
  if (num > 100) return;
  for (let i = 0; i < num; i++) {
    let newRow = document.createElement("div");
    newRow.classList.add("row");
    for (let j = 0; j < num; j++) {
      let newSquare = document.createElement("div");
      newSquare.classList.add("square");
      newSquare.addEventListener("mouseover", () => {
        generateRandomColour();
        newSquare.style.backgroundColor = randomColour;
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

let red = 0;
let green = 0;
let blue = 0;
let randomColour = "rgb(0, 0, 0)";

function generateRandomColour() {
  red = Math.floor(Math.random() * 255);
  green = Math.floor(Math.random() * 255);
  blue = Math.floor(Math.random() * 255);
  randomColour = `rgb(${red}, ${green}, ${blue})`;
}

createGrid();
let newGridBtn = document.querySelector("#new-grid-btn");
newGridBtn.addEventListener("click", newGrid);
