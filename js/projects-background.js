
const sectionProjects = document.querySelector('#projects');
const formatsProjects = document.querySelectorAll('.formats');

const circleProjects = document.querySelector('#circle');
const squareProjects = document.querySelector('#square');
const rectangleProjects = document.querySelector('#rectangle');
const starProjects = document.querySelector('#star');
const triangleProjects = document.querySelector('#triangle');
const diamondProjects = document.querySelector('#diamond');
const elipseProjects = document.querySelector('#elipse');

// Circle
let xMoving = 0;
let yMoving = 0;
let xSpeed = 1;
let ySpeed = 1;
const fps = 90;

function update(element, xPosition, yPosition) {
    if(40 + xPosition + xMoving + element.clientWidth >= window.innerWidth || xPosition + xMoving <= 0) {
        xSpeed = -xSpeed;
    }
    if(40 + yPosition + yMoving + element.clientHeight >= window.innerHeight || yPosition + yMoving <= 0) {
        ySpeed = -ySpeed;
    }

    element.style.left = xPosition + xMoving + "px";
    element.style.top = yPosition + yMoving + "px";
}

update(circleProjects, 34, 254);

setInterval(() => {
    xMoving += xSpeed;
    yMoving += ySpeed;


    update(circleProjects, 34, 454);

}, 1000/fps);

// Square
let xMoving2 = 0;
let yMoving2 = 0;
let xSpeed2 = 1;
let ySpeed2 = 1;

function update2(element, xPosition2, yPosition2) {
    if(40 + xPosition2 + xMoving2 + element.clientWidth >= window.innerWidth || xPosition2 + xMoving2 <= 0) {
        xSpeed2 = -xSpeed2;
    }
    if(40 + yPosition2 + yMoving2 + element.clientHeight >= window.innerHeight || yPosition2 + yMoving2 <= 0) {
        ySpeed2 = -ySpeed2;
    }

    element.style.left = xPosition2 + xMoving2 + "px";
    element.style.top = yPosition2 + yMoving2 + "px";
}

setInterval(() => {
    xMoving2 += xSpeed2;
    yMoving2 += ySpeed2;


    update2(squareProjects, 324, 54);

}, 1000/fps);

// Rectangle
let xMoving3 = 0;
let yMoving3 = 0;
let xSpeed3 = 1;
let ySpeed3 = 1;

function update3(element, xPosition3, yPosition3) {
    if(40 + xPosition3 + xMoving3 + element.clientWidth >= window.innerWidth || xPosition3 + xMoving3 <= 0) {
        xSpeed3 = -xSpeed3;
    }
    if(40 + yPosition3 + yMoving3 + element.clientHeight >= window.innerHeight || yPosition3 + yMoving3 <= 0) {
        ySpeed3 = -ySpeed3;
    }

    element.style.left = xPosition3 + xMoving3 + "px";
    element.style.top = yPosition3 + yMoving3 + "px";
}

setInterval(() => {
    xMoving3 += xSpeed3;
    yMoving3 += ySpeed3;


    update3(rectangleProjects, 24, 354);

}, 1000/fps);

// Star
let xMoving4 = 0;
let yMoving4 = 0;
let xSpeed4 = 1;
let ySpeed4 = 1;

function update4(element, xPosition4, yPosition4) {
    if(40 + xPosition4 + xMoving4 + element.clientWidth >= window.innerWidth || xPosition4 + xMoving4 <= 0) {
        xSpeed4 = -xSpeed4;
    }
    if(40 + yPosition4 + yMoving4 + element.clientHeight >= window.innerHeight || yPosition4 + yMoving4 <= 0) {
        ySpeed4 = -ySpeed4;
    }

    element.style.left = xPosition4 + xMoving4 + "px";
    element.style.top = yPosition4 + yMoving4 + "px";
}

setInterval(() => {
    xMoving4 += xSpeed4;
    yMoving4 += ySpeed4;


    update4(starProjects, 300, 400);

}, 1000/fps);

// Elipse
let xMoving5 = 0;
let yMoving5 = 0;
let xSpeed5 = 1;
let ySpeed5 = 1;

function update5(element, xPosition5, yPosition5) {
    if(40 + xPosition5 + xMoving5 + element.clientWidth >= window.innerWidth || xPosition5 + xMoving5 <= 0) {
        xSpeed5 = -xSpeed5;
    }
    if(40 + yPosition5 + yMoving5 + element.clientHeight >= window.innerHeight || yPosition5 + yMoving5 <= 0) {
        ySpeed5 = -ySpeed5;
    }

    element.style.left = xPosition5 + xMoving5 + "px";
    element.style.top = yPosition5 + yMoving5 + "px";
}

setInterval(() => {
    xMoving5 += xSpeed5;
    yMoving5 += ySpeed5;


    update5(elipseProjects, 10, 400);

}, 1000/fps);
