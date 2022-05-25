'use strict'

const container = document.getElementsByClassName('container');
let layoutSize;

const button = document.getElementsByClassName('size');
button[0].addEventListener('click', function() {
    layoutSize = prompt('Enter Layout size! Example 16')
    if (layoutSize > 100) {
        const size = alert('Numbers greater than 100 are not allowed!');
        return size;
    }
    layout();
})

function layout() {
for(let i = 0; i < layoutSize; i++) {
    const column = document.createElement('div');
    column.className = 'column';
    container[0].appendChild(column);
    column.style.display = 'flex';
    for (let i = 0; i < layoutSize; i++ ) {
        const row = document.createElement('div');
        row.className = 'row';
        column.appendChild(row);
    }
}
}


const row = document.getElementsByClassName('row');

// paint red color
const red = document.getElementsByClassName('colorRed');
red[0].addEventListener('click', function() {
    for(let i = 0; i < row.length; i++) {
        row[i].addEventListener('mouseenter', function() {
            row[i].style.backgroundColor = 'red';
        })
    }
})

// paint random color, every 10 field guaranteed black 
const randomColor = document.getElementsByClassName('randomColor') 
randomColor[0].addEventListener('click', function() {
    for (let i = 0; i < row.length; i++) {
        row[i].addEventListener('mouseenter', function() {
                let color = Math.floor(Math.random()*16777215).toString(16);
                row[i].style.backgroundColor = `#${color}`;
        })
    }
})

// clear painting 
const clear = document.getElementsByClassName('clear');
clear[0].addEventListener('click', function() {
    for(let i = row.length - 1; i >= 0; i--) {
        row[i].classList.remove('row');
    }
})













