
// add hold eventListener

// a list with all tiles on a canvas
let tiles = [];

// a variable that keeps current color chosen in the color picker
let currentColor = '#000000';

// reset button functionality
const resetBtn = document.querySelector('.reset-button');
resetBtn.addEventListener('click', () => {
    location.reload();
})

// color picker functionality
const colorPicker = document.querySelector('.color-picker');
colorPicker.addEventListener('change', () => {
    currentColor = colorPicker.value;
})

// eraser button functionality
const eraserBtn = document.querySelector('.eraser');
eraserBtn.addEventListener('click', () => {
    currentColor = '#ffffff';
})

// canvas node
const canvas = document.querySelector('.canvas');
const canvasWidth = canvas.clientWidth;

// slider and text above it functionality
const slider = document.querySelector('.grid-size-input');
let gridSizeText = document.querySelector('.range-input');

// deletes a canvas and draws a new one if slider changes
slider.addEventListener('change', () => {
    const gridSize = slider.value;
    gridSizeText.textContent = `Size: ${gridSize}`;
    gridClear(tiles);
    makeGrid(canvasWidth, gridSize);
});

//this function just creates one tile of the grid
function addTile(canvasWidth, canvasGridSize) {
    let tile = document.createElement('div');
    let tileSize = canvasWidth/canvasGridSize;
    tile.style.cssText = `border: none;
    margin: 0;
    padding: 0;
    width: ${tileSize}px;
    height: ${tileSize}px;
    background-color: rgb(${Math.random() * 210 + 20}, 0, 0);`;
    return tile;
}

// this function creates a list of tiles
function createAllTiles(canvasWidth, canvasGridSize) {
    for(let i = 0; i < canvasGridSize ** 2; i++) {
        tiles.push(addTile(canvasWidth, canvasGridSize));
    }
}

// this function setups eventListeners for each tile
function setupTileEvents(tiles) {
    tiles.forEach(tile => {
        tile.addEventListener('click', () => {
            tile.style.backgroundColor = currentColor;
        });
    });
}

// this function appends all tiles to the canvas
function appendTiles(tiles) {
    tiles.forEach(elem => {
        canvas.appendChild(elem);
    });
}

// this function removes all tiles from the grid
function gridClear(tiles) {
    tiles.forEach(elem => {
        canvas.removeChild(elem);
    });
    tiles.length = 0;
}

// this function creates all tiles, styles them, puts into a list and
// appends each tile to the canvas
function makeGrid(canvasWidth, canvasGridSize) {
    createAllTiles(canvasWidth, canvasGridSize);
    setupTileEvents(tiles);
    appendTiles(tiles);
}

// starter grid
makeGrid(canvasWidth, 10);