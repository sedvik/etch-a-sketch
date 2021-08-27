// Global variables and constants
let divsPerSide = 50;
const gridSize = 960 // Width and length of the grid container
const divWidth = gridSize / divsPerSide;

// createGrid function - Creates a new etch-a-sketch grid
function createGrid() {
    // Update grid container width and height according to gridSize var
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.setAttribute('style', `height: ${gridSize}px; width: ${gridSize}px;`);

    // Append divsPerSide x divsPerSide divs to the grid-container (e.g. 16 x 16 = 256)
    for (let i = 0; i < divsPerSide ** 2; i++) {
        const div = document.createElement('div');

        // Add grid-node class to div and set the height and width
        div.classList.add('grid-node');
        div.setAttribute('style', `height: ${divWidth}px; width: ${divWidth}px;`);

        // Add hover event listener to each div
        div.addEventListener('mouseover', etch);
        
        // Append the div to the grid-container
        gridContainer.appendChild(div);
    }
}

// Event handler functions

// Etch function - Adds the .hovered class to a div to "etch" it with a different color
function etch(e) {
    e.target.classList.add('hovered');
}

// clearPad function - Prompts the user for a new # of squares per side and clears the current grid
function clearPad(e) {

}

// Add event listener to "Clear Sketch Pad" button
const clearBtn = document.querySelector('.clear-btn');

// Initial run of createGrid function on page load
createGrid();

