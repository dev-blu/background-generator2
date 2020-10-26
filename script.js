var css = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.getElementsByTagName("body")[0];
var gradient = "linear-gradient(to right, "+ color1.value + " , " + color2.value + ")";

css.textContent = gradient;

color1.addEventListener("input", createCssGradient);

color2.addEventListener("input", createCssGradient);

function createCssGradient(){
    gradient = "linear-gradient(to right, "+ color1.value + " , " + color2.value + ")";
    css.textContent = gradient;    
    body.style.background = gradient;
}