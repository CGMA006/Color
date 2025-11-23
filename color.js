// script.js
let btnr = document.querySelector("#red");
let btng = document.querySelector("#gre");
let btnb = document.querySelector("#blu");
let btny = document.querySelector("#yel");



btnr.addEventListener("click", () => {
    document.body.style.backgroundColor = "red";
});

btng.addEventListener("click", () => {
    document.body.style.backgroundColor = "green";
});

btnb.addEventListener("click", () => {
    document.body.style.backgroundColor = "blue";
});

btny.addEventListener("click", () => {
    document.body.style.backgroundColor = "yellow";
});
