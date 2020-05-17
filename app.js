const container = document.querySelector('.container');
const resetBtn = document.querySelector('button');

const createGrid = function() {
    let startGrid = 16;
    let startCount = startGrid * startGrid
    container.setAttribute('style', `display: inline-grid; grid-template-columns: repeat(${startGrid}, auto); width:900px; height: 900px; grid-template-rows: repeat(${startGrid}, auto)`)
    for(let i = 0; i < startCount; i++){
        let square = document.createElement('div');
        square.setAttribute('style', 'background: white; border: 1px solid black;');
        square.addEventListener('mouseover', () => {
            square.setAttribute('style', 'background: black;')
        });
        
        container.appendChild(square);  
    }
}

createGrid()

    //reset button
    resetBtn.addEventListener('click', () => {
        let gridSize = prompt('How many squares would you like on each side?');
        let squareCount = gridSize * gridSize;
        
        for(let i = 0; i < squareCount; i++){
            square = document.createElement('div');
            square.setAttribute('style', 'background: white; width: 60px; height: 60px; border: 1px solid black;');
            square.addEventListener('mouseover', () => {
                square.setAttribute('style', 'background: black;')
            });
            container.appendChild(square);
        }
        container.setAttribute('style', `display: inline-grid; grid-template-columns: repeat(${gridSize}, 1fr); grid-template-rows: repeat(${gridSize}, 1fr);`);
    })



