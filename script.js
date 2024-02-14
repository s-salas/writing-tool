const pastedContent = document.getElementById("pasted-content");
const submitButton = document.getElementById("input-btn");
const clearButton = document.getElementById("clear-btn");
const output1 = document.getElementById("output1");
const outputHeader = document.getElementById("output-header");

// create array of words to check for:
let wordsToCheckFor = ['the', 'a', 'an', 'ensure', 'in order to'];

let string = pastedContent.value.toString();

let contentArray = string.split(' ');

// create function to keep formatting of text when pasted into box:

// call appropriate functions when submit button is clicked:
submitButton.addEventListener("click", wordCheck);
// submitButton.addEventListener("click", wordCheck);

// call clearOutput function when submit button is clicked:
clearButton.addEventListener("click", clearOutput);


// create function to clear text field, output header, and output content:
function clearOutput() {
    outputHeader.textContent = "";
    output1.innerHTML = "";
    pastedContent.value = "";
}

// create function to check for specific words within the pasted text:
function wordCheck() {
    console.log(contentArray);
    /*
    let i = [];
    for (let i = 0; i < wordsToCheckFor.length; i++) {
        let j = [];
    
    for (let j = 0; j < contentEdited.length; j++) 
    if (wordsToCheckFor[i] === contentEdited[j]) {
        console.log(wordsToCheckFor[i])
    } 
    }
    */
  //  outputHeader.textContent = "Output:";
  //  output1.innerHTML = pastedContent.value;
}


// create function to display output header, and output content:
function provideOutput() {
    outputHeader.textContent = "Output:";
    output1.innerHTML = pastedContent.value;
}