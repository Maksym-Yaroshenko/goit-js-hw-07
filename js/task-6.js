const input = document.querySelector("#controls input");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector(".boxes");

input.addEventListener("input", userNumber);
buttonCreate.addEventListener("click", createBoxes);
buttonDestroy.addEventListener("click", destroyBoxes);

function userNumber(event) {
  //   event.preventDefault();
  //   console.log(event.currentTarget.value);
  return event.currentTarget.value;
}

function createBoxes(amount) {
    
}

function destroyBoxes() {}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
