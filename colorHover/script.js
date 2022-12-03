const red = document.querySelector(".red");
const green = document.querySelector(".green");
const violet = document.querySelector(".violet");
const purple = document.querySelector(".purple");

const center = document.querySelector(".center");

function getColorCode(element){
    return window.getComputedStyle(element).backgroundColor;
}

function makeColorCircle(element,color){
    return element.addEventListener("mouseenter",()=>{
        center.style.backgroundColor = color;
    });
}
function makeColor(element){
    return element.addEventListener("mouseleave",()=>{
        center.style.backgroundColor = "#000000";
    });
}

makeColorCircle(red,getColorCode(red));
makeColorCircle(green,getColorCode(green));
makeColorCircle(violet,getColorCode(violet));
makeColorCircle(purple,getColorCode(purple));

makeColor(red);
makeColor(green);
makeColor(violet);
makeColor(purple);