//output target text should be "You clicked on the <text of section> section"
// output target is the output-target element
//get output-target div from HTML
let outputTarget = document.getElementById("output-target");
//set click event that bubbles anywhere on the body
outputTarget.addEventListener("click", printToOutputTarget);
console.log("here");

//function that will change output target text
function printToOutputTarget () {
    outputTarget.innerHTML = `<p>You clicked on the {} section </p>`
    console.log("here");
};