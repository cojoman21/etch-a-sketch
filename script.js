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
