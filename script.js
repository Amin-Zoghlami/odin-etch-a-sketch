function createGrid (num) {
    
    body.removeChild(document.querySelector(".container"));
    const container = document.createElement("div");
    container.classList.add("container");
    body.appendChild(container);
    
    const size = "width: " + (800 / num) + "px; " + "height: " + (800 / num) + "px;";
    for (let i = 0; i < num * num; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.setAttribute("style", size);
        container.appendChild(square);
    }
    const squares = document.querySelectorAll(".square");
    addHovering(squares);
}

function addHovering(squares) {
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            const r = Math.floor(Math.random() * 256); 
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            square.style.backgroundColor = `rgb(${r}, ${g}, ${b}`;
        });
    });
}

const body = document.querySelector("body");
createGrid(16);

const button = document.querySelector(".grid-size");
button.addEventListener("click", () => {
    const num = prompt("Choose a size between 1 - 100");
    if (!(0 < num && num <= 100)) {
        alert("That number is not between 1 - 100");
        return;
    }
    createGrid(num);
});