// Hex Color Generator : 

const hexButton = document.querySelector(".hex-button");
const hexColorValue = document.querySelector(".hex-value")
const hexContainer = document.querySelector(".hex-container")

const createRandHexColor = () => {
  let charSet = "0123456789ABCDEF";
  let hexOutput = "";

  for (let i = 0; i < 6; i++) {
    hexOutput += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }

  hexColorValue.textContent = `#${hexOutput}`
  hexContainer.style.backgroundColor = `#${hexOutput}`
  hexButton.style.color = `#${hexOutput}`
};

hexButton.addEventListener("click", createRandHexColor);


// RGB Color Generator : 

const rgbButton = document.querySelector('.rgb-button')

const createRandRgbColor = () => {
  
}

rgbButton.addEventListener('click', createRandRgbColor)