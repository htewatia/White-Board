"use strict";

const zoomInBtn = document.querySelector(".zoomin.tool");
const zoomOutBtn = document.querySelector(".zoomout.tool");
let zoomLevel = 1;
zoomInBtn.addEventListener("click", function () {
    if (zoomLevel < 3) {
        zoomLevel += 0.2;
        canvas.style.transform = `scale(${zoomLevel})`
    }
})

zoomOutBtn.addEventListener("click", function () {
    if (zoomLevel > 0.5) {
        zoomLevel -= 0.2;
        canvas.style.transform = `scale(${zoomLevel})`
    }
})