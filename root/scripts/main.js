"use strict"

function getRandomNumber(num) {
    return Math.floor(Math.random() * (num + 1));
}

function createNewGrid(num) {
    const maxSpace = 24;

    const display = document.createElement('div');
    display.id = 'display';
    display.style.display = 'grid';
    display.style.gridTemplateColumns = `repeat(${num},${maxSpace / num}rem)`;
    display.style.gridTemplateRows = `repeat(${num},${maxSpace / num}rem)`;
    document.body.append(display);

    for (let i = 0; i < num ** 2; i++) {
        const div = document.createElement('div');
        div.className = 'div';
        div.style.backgroundColor = 'rgb(221, 221, 221)';
        display.append(div);
    }

    return num;
}

let actualResolution = createNewGrid(50);

function addColorBehavior() {
    let a, b, c;
    let tenPercentOfA, tenPercentOfB, tenPercentOfC;
    let divs = Array.from(document.querySelectorAll('.div'));
    divs.forEach(div => {
        div.addEventListener('mouseenter', () => {
            if (div.style.backgroundColor != 'rgb(221, 221, 221)' && div.style.backgroundColor != 'rgb(0,0,0)') {
                a = a - tenPercentOfA;
                b = b - tenPercentOfB;
                c = c - tenPercentOfC;
                div.style.backgroundColor = `rgb(${a},${b},${c})`;
            } else {
                a = getRandomNumber(255);
                b = getRandomNumber(255);
                c = getRandomNumber(255);
                div.style.backgroundColor = `rgb(${a},${b},${c})`;

                tenPercentOfA = a / 9;
                tenPercentOfB = b / 9;
                tenPercentOfC = c / 9;
            }
        })
    })
}

addColorBehavior();

const resolutionButton = document.querySelector('#resolution-button');
resolutionButton.addEventListener('click', () => {
    const squaresNumber = Number(window.prompt('Insert how many squares per side between 1 and 100:', '50'));

    if (squaresNumber > 0 && squaresNumber <= 100) {
        const oldGrid = document.querySelector('#display');
        oldGrid.remove();
        createNewGrid(squaresNumber);
        addColorBehavior();
        actualResolution = squaresNumber;
    } else {
        window.alert('Amount out of range');
    }
});

const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', () => {
    const oldGrid = document.querySelector('#display');
    oldGrid.remove();
    createNewGrid(actualResolution);
    addColorBehavior();
});