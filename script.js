const userInput = document.querySelector('input[name="size"]');
const submitBtn = document.querySelector('input[name="submit"]');
const userColor = document.querySelector('input[name="color-select"]'); // SET VALUE TO WHATEVER THE BACKGROUND COLOR'S VALUE IS AT ALL TIMES
const resetBtn = document.querySelector('#reset-btn');
const randomBtn = document.querySelector('#random-color-btn');
const sketchContainer = document.querySelector('.sketch-container');

// Store active color, default will be black
let colorType = "black";

// Create default etch-a-sketch (16 x 16)
createDivs(16);
makeGrid(16);
mouseoverSquare(colorType);

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    clickSubmit(color=colorType);
});

resetBtn.addEventListener('click', () => {
    removeColor();
    mouseoverSquare(colorType);
});

randomBtn.addEventListener('click', () => {
    colorType = "random";
    mouseoverSquare(colorType);
});

userColor.addEventListener('change', () => {
    colorType = userColor.value;
    mouseoverSquare(userColor.value);
});

// Remove color from divs in sketchContainer
function removeColor() {
    const squares = document.querySelectorAll('.sketch');
    squares.forEach(square => {
        square.style.cssText = 'background-color: white;'
    });
};

// Functions to execute after submit button is clicked
function clickSubmit(color="black") {
    let userSize = getSize();
    userInput.value = "";
    resetSketchContainer();
    createDivs(userSize);
    makeGrid(userSize);
    mouseoverSquare(color=color);
};

// Add mouseover listener event to squares
function mouseoverSquare(color) {
    const squares = document.querySelectorAll('.sketch');
    if (color === "black") {
        squares.forEach(square => square.addEventListener('mouseover',
            () => colorSquare(square)));
    } else if (color === "random") {
        squares.forEach(square => square.addEventListener('mouseover',
            () => randomizeColorSquare(square)));
    } else {
        squares.forEach(square => square.addEventListener('mouseover',
            () => colorSquare(square, color=color)));
    }
};

// Remove divs from sketchContainer
function resetSketchContainer() {
    while (sketchContainer.lastElementChild) {
        sketchContainer.removeChild(sketchContainer.lastElementChild);
    }
};

// Create divs based on user-entered size
function createDivs(size) {
    for (let i = 0; i < size ** 2; i++) {
        const sketchDiv = document.createElement('div');
        sketchDiv.classList.add('sketch');
        sketchContainer.appendChild(sketchDiv);
    }
};

// Structure divs into square grid
function makeGrid(size) {
    sketchContainer.style.cssText = `grid-template-columns: repeat(${size}, 1fr);
            grid-template-columns: repeat(${size}, 1fr);`;
};

// Add black background-color to squares
function colorSquare(square, color="black") {
    userColor.value = (color === "black") ? "#000000" : color;
    square.style.cssText = `background-color: ${color}`;
};

function randomizeColorSquare(square) {
    randomColor = generateRGB()
    userColor.value = convertRGBtoHex(getRGB(randomColor));
    square.style.cssText = `background-color: ${randomColor}`;
}

// Get user-inputed size from HTML form
function getSize() {
    if (userInput.value % 1 === 0 && userInput.value / 1 > 0 && userInput.value <= 100) {
        return userInput.value;
    } else {
        alert("Please enter a valid size!");
        return 16; // Default to 16 x 16 grid if input is invalid
    }
};

// Convert decimal # to hexadecimal
function colorToHex(color) {
    let hexadecimal = color.toString(16);
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
};

// Convert rgb value to RGB hexadecimal
function convertRGBtoHex(rgbArray) {
    let red = parseInt(rgbArray[0]);
    let green = parseInt(rgbArray[1]);
    let blue = parseInt(rgbArray[2]);
    return "#" + colorToHex(red) + colorToHex(green) + colorToHex(blue);
};

// Get rgb values from generateRGB funtion's return value
function getRGB(rgbString) {
    rgbValues = rgbString.substring(4, rgbString.length - 1).split(",");
    return rgbValues;
};

// Generate random RGB value
function generateRGB() {
    let red = getRandomInt(255, 1);
    let green = getRandomInt(255, 1);
    let blue = getRandomInt(255, 1);
    return `rgb(${red}, ${green}, ${blue})`;
};

// Return random integer between min (incluseive) and max (exclusive)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
