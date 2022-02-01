"use strict";

let box = document.querySelector(".box");
let btn = document.querySelector(".btn");
console.log(box.clientHeight);
console.log(box.clientWidth);
btn.addEventListener("click",() => {
    window.scrollTo(0,20);
});


