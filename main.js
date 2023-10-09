const body = document.querySelector("body");
const buttonContainer = document.getElementById("buttonContainer");

function loadButtons() {
  const tmp = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    .map(
      (zone) => `<div class="zone-button" id="zoneButton${zone}">${zone}</div>`
    )
    .join("");
  buttonContainer.innerHTML = tmp;
}

loadButtons();

function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  console.log(r, g, b);
  return [r, g, b];
}

function rgbToTonalValue() {
  const [r, g, b] = arguments;
  result = 0.299 * r + 0.587 * g + 0.114 * b;
  return Math.round(result);
}

const [r, g, b] = getRandomRGB();

const tonalValue = rgbToTonalValue(r, g, b);

body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

function getZone(tonalValue) {
  switch (true) {
    case tonalValue >= 0 && tonalValue <= 23:
      return 0;
      break;
    case tonalValue >= 24 && tonalValue <= 46:
      return 1;
      break;
    case tonalValue >= 47 && tonalValue <= 69:
      return 2;
      break;
    case tonalValue >= 70 && tonalValue <= 92:
      return 3;
      break;
    case tonalValue >= 93 && tonalValue <= 115:
      return 4;
      break;
    case tonalValue >= 116 && tonalValue <= 139:
      return 5;
      break;
    case tonalValue >= 140 && tonalValue <= 162:
      return 6;
      break;
    case tonalValue >= 163 && tonalValue <= 185:
      return 7;
      break;
    case tonalValue >= 186 && tonalValue <= 208:
      return 8;
      break;
    case tonalValue >= 209 && tonalValue <= 231:
      return 9;
      break;
    case tonalValue >= 232 && tonalValue <= 255:
      return 10;
      break;
    default:
      return null;
  }
}

const zone = getZone(tonalValue);

function addButtonEventListeners() {
  const zoneButtons = document.querySelectorAll(".zone-button");
  for (let zoneButton of zoneButtons) {
    zoneButton.addEventListener("click", (event) => {
      const value = +event.target.innerText.trim();
      const result = value === zone ? "YES" : "NO";
      console.log(value, result, zone);
      console.log(result);
    });
  }
}

addButtonEventListeners();
