// não trata divs individualmente
// rgb(255,255,255)

"use strict"

// get random naumber between 0 and 255 inclusively
function getRandomNumber(num) {
    return Math.floor(Math.random() * (num + 1));
}

let rgbNumber = 255;

// Problems:
// Colors are not becoming darker in the right way
// Colors were supposed to be individual (right now when one div turns black for example, all the other divs become black too)

function addColorEvent(div) {
    div.addEventListener('mouseenter', () => {
        if (rgbNumber > 90) {
            div.style.backgroundColor = `rgb(${getRandomNumber(rgbNumber)}, ${getRandomNumber(rgbNumber)}, ${getRandomNumber(rgbNumber)})`;
            console.log(rgbNumber = rgbNumber - rgbNumber * 0.1);
        } else if (rgbNumber < 90) {
            div.style.backgroundColor = `rgb(60,60,60)`;
        }
    })
}

function createNewGrid(num) {
    const maxSpace = 30;
    const container = document.createElement('div');
    container.id = 'container';
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${num},${maxSpace / num}rem)`;
    container.style.gridTemplateRows = `repeat(${num},${maxSpace / num}rem)`;
    document.body.append(container);

    for (let i = 0; i < num ** 2; i++) {
        const div = document.createElement('div');
        div.className = 'div';
        div.style.backgroundColor = '#ddd';
        addColorEvent(div);
        container.style.gridTemplateColumns = `repeat(${num},${maxSpace / num}rem)`;
        container.style.gridTemplateRows = `repeat(${num},${maxSpace / num}rem)`;
        container.append(div);
    }

    return num;
}

let actualResolution = createNewGrid(50);

const resolutionButton = document.querySelector('#resolution-button');
resolutionButton.addEventListener('click', () => {
    const squaresNumber = window.prompt('Insert how many squares per side between 1 and 100:');
    if (squaresNumber > 0 && squaresNumber <= 100) {
        const oldGrid = document.querySelector('#container');
        oldGrid.remove();
        createNewGrid(squaresNumber);
        actualResolution = squaresNumber;
    } else {
        window.alert('Amount out of range');
    }
});

const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', () => {
    const oldGrid = document.querySelector('#container');
    oldGrid.remove();
    createNewGrid(actualResolution);
});