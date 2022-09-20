
// add eventListener for reset button %
    // make it reload the page whenever pressed %
// add color picker %
// add canvas %
    // add a function that sets display: grid and column/row amounts %
// add eraser % 
    // make it set paint color to white %
    // add ability for user to use eraser by right clicking
// add input slider %
    // add eventListener that listens for slider
        // if input changed, remove existing grid and replace it with a new one
            // add a text that shows current grid size
            // add eventListener to it
// create a function that creates one div inside of the canvas %
    // remove margins and borders %
    // make its size equal to (canvas' width / grid size) %
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
let canvasWidth = canvas.clientWidth;
let tiles = [];

// slider
let slider = document.querySelector('.grid-size-input');

//this function just creates one tile of the grid
function addTile(canvasWidth, canvasGridSize) {
    let tile = document.createElement('div');
    let tileSize = canvasWidth/canvasGridSize;
    tile.style.cssText = `border: none;
    margin: 0;
    padding: 0;
    width: ${tileSize}px;
    height: ${tileSize}px;
    background-color: black;`;
    return tile;
}

// this function gets input from the slider and sets canvas'
// grid column and row amount to it
function setCanvasGridSize(canvasSize) {
    canvas.style.cssText = `
    grid-template-columns: ${canvasSize}fr;
    grid-template-rows: ${canvasSize}fr;`;
}

// this function creates a list of tiles
function createAllTiles(canvasWidth, canvasGridSize) {
    let tiles = [];
    for(let i = 0; i<canvasGridSize**2; i++) {
        tiles.push(addTile(canvasWidth, canvasGridSize));
    }
    return tiles;
}

// this function setups eventListeners for each tile
function setupTileEvents(tiles) {
    tiles.forEach()
}

// this function appends all tiles to the canvas
function makeGrid(tiles) {
    tiles.forEach(elem => {
        canvas.appendChild(elem);
    });
}

// this function creates all tiles, styles them, puts into a list and
// appends each tile to the canvas
function gridSetup(canvasWidth, canvasGridSize) {
    setCanvasGridSize(canvasGridSize);
    tiles = createAllTiles(canvasWidth, canvasGridSize);
    setupTileEvents(tiles);
    makeGrid(tiles);
}

gridSetup(canvasWidth, 10);