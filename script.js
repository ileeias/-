const colors = [
    {
      title: "Красный",
      hex: "#E32636"
    },
    {
      title: "Желтый",
      hex: "#FDE910"
    },
    {
      title: "Зеленый",
      hex: "#138808"
    },
    {
      title: "Синий",
      hex: "#1560BD"
    }
  ];
const figure = document.querySelector(".figure");
const buttons = document.querySelectorAll("button");

function circle (event) {
    event.preventDefault();
    winFigure.classList.remove("hiden");
    figure.classList.remove("hiden");
    figure.style.borderRadius = "50%";
}   
buttons[0].addEventListener("click", circle);
function square (event) {
    event.preventDefault();
    winFigure.classList.remove("hiden");
    figure.classList.remove("hiden");
    figure.style.borderRadius = "0";
}   
buttons[1].addEventListener("click", square);
function red (event) {
    event.preventDefault();
    figure.style.backgroundColor = `${colors[0].hex}`;
}   
buttons[2].addEventListener("click", red);
function yellow (event) {
    event.preventDefault();
    figure.style.backgroundColor = `${colors[1].hex}`;
}   
buttons[3].addEventListener("click", yellow);
function green (event) {
    event.preventDefault();
    figure.style.backgroundColor = `${colors[2].hex}`;
}   
buttons[4].addEventListener("click", green);
function blue (event) {
    event.preventDefault();
    figure.style.backgroundColor = `${colors[3].hex}`;
}   
buttons[5].addEventListener("click", blue);

const form = document.querySelector("form");
const text = document.getElementById("text");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    figure.textContent = `${text.value}`;
});

const clearButton = document.querySelector("#clear"); 
function clearAll(event) { 
    event.preventDefault(); 
    figure.style.borderRadius = "0"; 
    figure.style.backgroundColor = ""; 
    figure.textContent = ""; 
    figure.classList.add("hiden");

} 
clearButton.addEventListener("click", clearAll);

const winFigure = document.querySelector(".winfigure");
let isMoving = false;
const display = document.querySelector(".display");
const coord = display.getBoundingClientRect();
let offsetx, offsety;
const borders = {
  top: coord.top - 50, 
  right: coord.left + coord.width - 150, 
  bottom: coord.top + 450, 
  left: coord.left - 150
};
winFigure.addEventListener("mousedown", (event) => {
  isMoving = true;
  offsetx = event.clientX - winFigure.offsetLeft;
  offsety = event.clientY - winFigure.offsetTop;
});
document.addEventListener("mousemove", (event) => {
  if (isMoving) {
    console.log(coord.width);
    let newX = event.clientX - offsetx
    let newY = event.clientY - offsety

    if (newX < borders.left) newX = borders.left;
    if (newX > borders.right) newX = borders.right;
    if (newY < borders.top) newY = borders.top;
    if (newY > borders.bottom) newY = borders.bottom;

    winFigure.style.left = `${newX}px`;
    winFigure.style.top = `${newY}px`;
  }
});
document.addEventListener("mouseup", () => {
  isMoving = false;
});

const close = document.querySelector(".close");
close.addEventListener("click", function () {
  winFigure.classList.add("hiden");
  figure.style.borderRadius = "0"; 
  figure.style.backgroundColor = ""; 
  figure.textContent = ""; 
});