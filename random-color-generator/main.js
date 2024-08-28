// Hex Color Generator :

const hexButton = document.querySelector(".hex-button");
const hexColorValue = document.querySelector(".hex-value");
const hexContainer = document.querySelector(".hex-container");
const hexCopy = document.querySelector(".hex-copy");

const createRandHexColor = () => {
  let charSet = "0123456789ABCDEF";
  let hexOutput = "";

  for (let i = 0; i < 6; i++) {
    hexOutput += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }

  hexColorValue.textContent = `#${hexOutput}`;
  hexContainer.style.backgroundColor = `#${hexOutput}`;
  hexButton.style.color = `#${hexOutput}`;
};

hexButton.addEventListener("click", createRandHexColor);

// RGB Color Generator :

const rgbButton = document.querySelector(".rgb-button");
const redInputRange = document.querySelector("#red");
const greenInputRange = document.querySelector("#green");
const blueInputRange = document.querySelector("#blue");
const rgbContainer = document.querySelector(".rgb-container");
const rgbCopy = document.querySelector(".rgb-copy");
const rgbValue = document.querySelector(".rgb-value");

const createRandRgbColor = () => {
  let redValue = redInputRange.value;
  let greenValue = greenInputRange.value;
  let blueValue = blueInputRange.value;

  rgbContainer.style.backgroundColor = `rgb(${redValue}, ${greenValue},${blueValue})`;

  rgbValue.textContent = `rgb(${redValue}, ${greenValue},${blueValue})`;
};

rgbButton.addEventListener("click", createRandRgbColor);

// Copy to clipboard :
const copyHexToClipboard = () => {
  navigator.clipboard.writeText(hexColorValue.textContent);
  alert(`${hexColorValue.textContent} Hex is copied`);
};

hexCopy.addEventListener("click", copyHexToClipboard);

const copyRgbToClipboard = () => {
  navigator.clipboard.writeText(rgbContainer.style.backgroundColor);
  alert(`${rgbContainer.style.backgroundColor} RGB is copied`);
};

rgbCopy.addEventListener("click", copyRgbToClipboard);
