
let section = document.getElementsByClassName("article-section");

let sectionArray = Array.from (section);


let introduction = section[0].innerHTML;

let body = section[1].innerHTML;
let section1 = section[2].innerHTML;
let section2 = section[3].innerHTML;
let section3 = section[4].innerHTML;
let conclusion = section[5].innerHTML;


section[0].addEventListener("click", ()=> outputTarget.innerHTML=`You clicked on the ${introduction}`);
section[1].addEventListener("click", ()=> outputTarget.innerHTML=`You clicked on the ${body}`);
section[2].addEventListener("click", ()=> outputTarget.innerHTML=`You clicked on the ${section1}`);
section[3].addEventListener("click", ()=> outputTarget.innerHTML=`You clicked on the ${section2}`);
section[4].addEventListener("click", ()=> outputTarget.innerHTML=`You clicked on the ${section3}`);
section[5].addEventListener("click", ()=> outputTarget.innerHTML=`You clicked on the ${conclusion}`);


let clickAnywhere = document.getElementById("anywhere-on-body-cick-event");

let outputTarget = document.getElementById("output-target");


let guineaPigText = document.getElementById("guinea-pig");
let header = document.getElementById("page-header");
header.addEventListener("mouseover", () => outputTarget.innerHTML = "You moved your mouse over the header" )
header.addEventListener("mouseleave", () => outputTarget.innerHTML = "You left me!" )

let inputThing = document.getElementById("keypress-input");
inputThing.onkeyup = ()=> outputTarget.innerHTML = inputThing.value;  

let addColorButton = document.getElementById("add-color");
let guineaPigElement = document.getElementById("guinea-pig");
addColorButton.addEventListener("click", ()=>guineaPigElement.style.color = "blue");


let hulkifyButton = document.getElementById("make-large");
hulkifyButton.addEventListener("click", ()=>guineaPigElement.style.fontSize = "40rem");

let captureButton = document.getElementById("add-border");
captureButton.addEventListener("click", ()=>guineaPigElement.style.border = "1px solid blue" );

let roundedButton = document.getElementById("add-rounding");
roundedButton.addEventListener("click", ()=>guineaPigElement.classList.add("myClass"));


