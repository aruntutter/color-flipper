"use strict";

// get elements
const wrap = document.querySelector("body");
const randomHex = document.getElementById("random-hex");
const btn = document.getElementById("btn");

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Random Hex color
btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 1; i <= 6; i++) {
    hexColor = hexColor + randomHexValue();
  }
  wrap.style.backgroundColor = hexColor;
  randomHex.innerHTML = hexColor;
});

// Random Hex Number
function randomHexValue() {
  let randomIndex = Math.floor(Math.random() * 16);
  return hex[randomIndex];
}
