"use strict";
let expandBtn = document.querySelector(".fullscreen");
expandBtn.addEventListener("click", function () {

    expandFlag = !expandFlag;
    if (expandFlag) {
        document.documentElement.requestFullscreen();
    }
    else {
        document.exitFullscreen();
    }

});

document.addEventListener("fullscreenchange", function () {

    let expandicon = document.querySelector(".expand-btn");
    if (document.fullscreenElement) {                          
        console.log("Entered full screen");
    }
    else {
        console.log("Exited full screen");
    }


})