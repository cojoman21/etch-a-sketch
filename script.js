let mainDiv = document.createElement("div");

let gridSize = 16;

document.body.appendChild(mainDiv);

mainDiv.setAttribute("class", "main");

function createGrid(gridSize) {
    for (let rows = 0; rows < gridSize; rows++) {
        let row = document.createElement("div");
        row.setAttribute("class", "row");
        row.style.display = "flex";
        for (let squares = 0; squares < gridSize; squares++) {
            let square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
        }
        mainDiv.appendChild(row);
    }
}

let squares = document.querySelectorAll(".square");

function randomRGB() {
    let min = 0;
    let max = 255;

    let rValue = Math.floor(Math.random() * (max - min + 1)) + min;
    let gValue = Math.floor(Math.random() * (max - min + 1)) + min;
    let bValue = Math.floor(Math.random() * (max - min + 1)) + min;
    return `rgb(${rValue}, ${gValue}, ${bValue})`;
}

function setTrailEffect() {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseenter", function (event) {
            event.target.style.backgroundColor = randomRGB();
            setTimeout(() => {
                event.target.style.backgroundColor = "";
            }, 1000);
        });
    });
}

createGrid(gridSize);
setTrailEffect();

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    gridSize = prompt("Enter grid size(max 100): ", 16);
    while (mainDiv.firstChild) {
        mainDiv.removeChild(mainDiv.firstChild);
    }
    createGrid(gridSize);
    setTrailEffect();
});
