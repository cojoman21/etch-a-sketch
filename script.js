const mainDiv = document.createElement("div");

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
            square.style.opacity = "1.0";
            square.classList.add("square");
            row.appendChild(square);
        }
        mainDiv.appendChild(row);
    }
}

// let squares = document.querySelectorAll(".square");

const randomRGB = () => {
    let min = 0;
    let max = 255;

    let rValue = Math.floor(Math.random() * (max - min + 1)) + min;
    let gValue = Math.floor(Math.random() * (max - min + 1)) + min;
    let bValue = Math.floor(Math.random() * (max - min + 1)) + min;
    return `rgb(${rValue}, ${gValue}, ${bValue})`;
};

const singleColor = () => {
    return `rgb(${100}, ${100}, ${100})`;
};

// Initial setup 16x16, random colors
createGrid(gridSize);
let colorMode = randomRGB;
setTrailEffect();

// function setTrailEffect() {
//     const squares = document.querySelectorAll(".square");
//     squares.forEach((square) => {
//         square.addEventListener("mouseenter", function (event) {
//             event.target.style.backgroundColor = colorMode();
//             setTimeout(() => {
//                 event.target.style.backgroundColor = "";
//             }, 1000);
//         });
//     });
// }

const gridSizeBtn = document.querySelector("#gridSize");

gridSizeBtn.addEventListener("click", () => {
    gridSize = prompt("Enter grid size(max 100): ", gridSize);
    if (gridSize > 100) gridSize = 100;
    while (mainDiv.firstChild) {
        mainDiv.removeChild(mainDiv.firstChild);
    }
    createGrid(gridSize);
    setTrailEffect();
});

const colorModeBtn = document.querySelector("#colorMode");

colorModeBtn.addEventListener("click", (event) => {
    if (event.target.innerText.toLowerCase() === "single") {
        event.target.innerText = "Random";
        colorMode = randomRGB;
        return;
    }
    if (event.target.innerText.toLowerCase() === "random") {
        event.target.innerText = "Single";
        colorMode = singleColor;
        return;
    }
});

let coloredSquares = [];
let timeoutID;

function setTrailEffect() {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseenter", function (event) {
            // Clear previous timeout
            clearTimeout(timeoutID);

            // Add square to coloredSquares array
            if (coloredSquares.includes(event.target)) {
                // If the square is already in the array, decrease opacity
                square.style.opacity -= "0.12";
            } else {
                // Change square color
                event.target.style.backgroundColor = colorMode();
                // Store the square
                coloredSquares.push(event.target);
                while (coloredSquares.length >= 1000) {
                    let removedSquare = coloredSquares.shift();
                    removedSquare.style.backgroundColor = "";
                    removedSquare.style.opacity = "1.0";
                }
            }
            // set timeout
            timeoutID = setTimeout(() => {
                tempArray = [...coloredSquares];
                coloredSquares = [];
                for (let i = 0; i < tempArray.length; i++) {
                    setTimeout(() => {
                        console.log(`setting reset delay for ${i}`);
                        tempArray[i].style.backgroundColor = "";
                        tempArray[i].style.opacity = "1.0";
                    }, i * 2);
                }
            }, 1500);
        });
    });
}
