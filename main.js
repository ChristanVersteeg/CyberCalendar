"use strict";

document.addEventListener("DOMContentLoaded", () => {
    // select the element with the id "title"
    const button = document.querySelector("#btn");

    // when button is clicked, change the background
    // to a random dark color. include many colors,
    // not just black. the important thing is that
    // it should be dark.
    button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
        // generate a random number between 0 and 63
        const r = Math.floor(Math.random() * 64);
        const g = Math.floor(Math.random() * 64);
        const b = Math.floor(Math.random() * 64);

        // set the background color
        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
});
