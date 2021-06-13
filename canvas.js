"use strict";

let canvas = document.querySelector(".canvas");
let canvasContaier = document.querySelector(".canvas-container");
let body = document.querySelector(".body");
let bodyStyle = getComputedStyle(body);
let bodyRectObj = body.getBoundingClientRect();
let tool = canvas.getContext("2d");
canvas.style.top = bodyRectObj.top; 
canvas.style.left = bodyRectObj.left;

let effectColor = "white";
let pencilThickness = 1;
let eraserThickness = 1;

let color = "red";
let activeTool;
let track;
let pathsry = [];
let points = [];
let redopoints=[];
let redopathsry=[];

// =================================================== Pencil Tool ===================================================
let pencilElem = document.querySelector(".pencil");

let pencilThick = document.querySelector(".slider");
// let thicksize = document.getElementById("myRange");
// ************** cursor select **************
pencilElem.addEventListener("click", function () {
    canvas.style.cursor = "crosshair";
    draw(color, pencilThickness);
})

// ************** thickness **************
pencilThick.addEventListener("input", function () {
    pencilThickness = pencilThick.value;
    tool.lineWidth = pencilThickness;
    draw(color, pencilThickness);
})

// ************** color change **************
let row = document.querySelectorAll(".box-row");

for (let i = 0; i < row.length; i++) {
    let col = document.querySelectorAll(".box-col");
    for (let j = 0; j < col.length; j++) {
        col[j].addEventListener("click", function () {
            color = col[j].classList[1];
            tool.strokeStyle = color;
            tool.lineWidth = pencilThickness;
            draw(color, pencilThickness);
            toolbar.classList.remove("active");

        })

    }
}
// =============================== eraser Tool ==========================================================
let eraser = document.querySelector(".eraser-slider");
eraserBtn.addEventListener("click", function () {
    canvas.style.cursor = "grabbing";
    draw(effectColor, eraserThickness);
    
})
let eraserThicksize = document.getElementById("eraserRange");
eraser.addEventListener("input", function () {
    eraserThickness = eraser.value;
    
    draw(effectColor, eraserThickness)
})
// ==================================== draw ==========================================================
function draw(color, width) {
    let isDown = false;
    canvas.addEventListener("mousedown", function (e) {
        isDown = true;
        let x = e.offsetX;
        let y = e.offsetY;

        tool.strokeStyle = color;
        tool.lineWidth = width;
        tool.beginPath();
        tool.moveTo(x, y);
        points=[];
        points.push({x:e.offsetX,y:e.offsetY,color})
    })

    canvas.addEventListener("mousemove", function (e) {
        if (isDown == true) {
            let x = e.offsetX;
            let y = e.offsetY;
            tool.lineTo(x, y);
            tool.stroke();

            points.push({x:e.offsetX,y:e.offsetY,color})
        }
    })
    canvas.addEventListener("mouseup", function (e) {
        isDown = false;
        pathsry.push(points);
    })
}

// ======================== effect =================================
let effectElem = document.querySelectorAll(".color");
for (let i = 0; i < effectElem.length; i++) {
    effectElem[i].addEventListener("click", function () {
        effectColor = effectElem[i].classList[2];
        tool.fillStyle = effectColor;
        tool.fillRect(0, 0, canvas.width, canvas.height);
        toolbar.classList.remove("active");
        body.style.backgroundColor = effectColor;
    })
}