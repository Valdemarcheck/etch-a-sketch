
// add eventListener for reset button %
    // make it reload the page whenever pressed %
// add color picker %
// add canvas %
// add eraser % 
    // make it set paint color to white %
    // add ability for user to use eraser by right clicking
// add input slider %
    // add eventListener that listens for slider
        // if input changed, remove existing grid and replace it
        // with a new one
            // add a text that shows current grid size
            // add eventListener to it
// create a function that creates one div inside of the canvas
    // remove margins and borders
    // make its size equal to (canvas' width / grid size)
    // add click and hold eventListeners
        // make a function that sets div's bg to color picker's color
// make a function that repeats it for N times
// align divs by using grid
// make a function that deletes an entire grid

// reset button functionality
let resetBtn = document.querySelector('.reset-button');
resetBtn.addEventListener('click', () => {
    location.reload();
})

// color picker functionality
let colorPicker = document.querySelector('.color-picker');
let currentColor = '';
colorPicker.addEventListener('change', () => {
    currentColor = colorPicker.value;
    console.log(currentColor);
})

// eraser button functionality
let eraserBtn = document.querySelector('.eraser');
eraserBtn.addEventListener('click', () => {
    currentColor = '#ffffff';
    console.log(currentColor);
})

// canvas node
let canvas = document.querySelector('.canvas');
let canvasWidth = canvas.style.width;

// slider
let slider = document.querySelector('.grid-size-input');