let body = document.querySelector("body");

// select parent of childs
let circles = document.querySelectorAll("ul");

console.log(circles);

// add event listener
circles.addEventListener("click", changeBackgroundColor);

// event handler
function changeBackgroundColor(event) {
    console.log(event);
    
}