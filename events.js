//output target text should be "You clicked on the <text of section> section"
// output target is the output-target element
//get a reference to every section on the index.html 
let section = document.getElementsByClassName("article-section");
console.log(section);
let sectionArray = Array.from (section);
console.log(sectionArray);

let introduction = section[0].innerHTML;
console.log(introduction);
let body = section[1].innerHTML;
let section1 = section[2].innerHTML;
let section2 = section[3].innerHTML;
let section3 = section[4].innerHTML;
let conclusion = section[5].innerHTML;
console.log(body,section1,section2,section3,conclusion);




//get output-target div from HTML
let clickAnywhere = document.getElementById("anywhere-on-body-cick-event");
let outputTarget = document.getElementById("output-target");
console.log(outputTarget);
//set click event that bubbles anywhere on the body
clickAnywhere.addEventListener("click", printToOutputTarget);


console.log("here");

//function that will change output target text
function printToOutputTarget () {
    // var pForOutput = document.createElement("")
    
    outputTarget.innerHTML = `<p>You clicked on the ${sectionArray.innerHTML} section </p>`
    console.log("here");
};

let guineaPigText = document.getElementById("guinea-pig");