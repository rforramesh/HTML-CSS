"use strict"

function cardSlide(str) {
    let box = document.getElementsByClassName("trending")[0];
    if (str === "next") box.scrollBy({left: box.scrollWidth, behavior: "smooth"});
    if (str === "back") box.scrollBy({left: -box.scrollWidth, behavior: "smooth"});
}

function hello() {
    console.log("hello world");
    
}
function bye() {
    console.log("bye");

}
