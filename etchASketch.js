// Initial variables and constants
const initialDivsPerSide = 50;
const gridSize = 960 // Width and length of the grid container

// createGrid function - Creates a new etch-a-sketch grid
function createGrid(gridSize, divsPerSide) {
    // Calculate div width
    const divWidth = gridSize / divsPerSide;

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

// isValidDivsPerSide function - validates that user input for divsPerSide is between 1 and 100 and is a valid number
function isValidDivsPerSide(divsPerSide) {
    return (typeof(divsPerSide) === 'number' && 
            (divsPerSide >= 1 && divsPerSide <= 100)
    );
}

// Event handler functions

// Etch function - Adds the .hovered class to a div to "etch" it with a different color
function etch(e) {
    e.target.classList.add('hovered');
}

// resetPad function - Prompts the user for a new # of squares per side and clears the current grid
function resetPad() {
    // Prompt the user for a new divsPerSide value
    let userDivsPerSide;

    do {
        userDivsPerSide = parseInt(prompt("Enter the number of squares per side (must be between 1 and 100)"));
    } while (!isValidDivsPerSide(userDivsPerSide));

    const divsPerSide = userDivsPerSide;

    // Remove previous grid divs
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.textContent = '';

    // Draw the new grid
    createGrid(gridSize, divsPerSide);
}

// Add event listener to "Clear Sketch Pad" button
const clearBtn = document.querySelector('.clear-btn');
clearBtn.addEventListener('click', resetPad);

// Initial execution of createGrid function on page load
createGrid(gridSize, initialDivsPerSide);