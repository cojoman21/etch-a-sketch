let mainDiv = document.createElement("div");

document.body.appendChild(mainDiv);

mainDiv.setAttribute("class", "main");

for (let i = 0; i < 16; i++) {
    let biggerDiv = document.createElement("div");
    biggerDiv.style.display = "flex";
    for (let x = 0; x < 16; x++) {
        let smallerDiv = document.createElement("div");
        smallerDiv.classList.add("square");
        biggerDiv.appendChild(smallerDiv);
    }
    mainDiv.appendChild(biggerDiv);
}

const squares = document.querySelectorAll(".square");

function randomRGB() {
    let min = 0;
    let max = 255;

    let rValue = Math.floor(Math.random() * (max - min + 1)) + min;
    let gValue = Math.floor(Math.random() * (max - min + 1)) + min;
    let bValue = Math.floor(Math.random() * (max - min + 1)) + min;
    return `rgb(${rValue}, ${gValue}, ${bValue})`;
}

// Trail
squares.forEach((square) => {
    square.addEventListener("mouseenter", function (event) {
        event.target.style.backgroundColor = randomRGB();
        console.log("touched");
        setTimeout(() => {
            event.target.style.backgroundColor = "";
        }, 1000);
    });
});
