const pastedContent = document.getElementById("pasted-content");
const submitButton = document.getElementById("input-btn");
const clearButton = document.getElementById("clear-btn");
const output1 = document.getElementById("output1");
const outputHeader = document.getElementById("output-header");
const wordCheckOutput = document.getElementById("word-check-output");
const punctuationCheckOutput = document.getElementById("punctuation-check-output");
const textWithErrors = document.getElementById("text-with-errors");

// create array of words to check for:
let wordsToCheckFor = ['the', 'a', 'an', 'ensure', 'in order to'];

let phrasesToCheckFor = ['due to the fact', 'in order to', 'in regards to'];

let punctuationToCheckFor = [', and', ', or', ',,', '..', '//', 'and / or'];

let wordCheckArray = [];

let punctuationCheckArray = [];

textWithErrors.classList.add("hidden");

// create function to keep formatting of text when pasted into box:
/*
function copyText() { 
    let textarea1 = document.getElementById("pasted-content"); 
    textarea1.select(); 
    if (document.queryCommanSupported("copy")) { 
      document.execCommand("copy"); 
      let textarea2 = document.getElementById("textarea2"); 
      textarea2.focus(); 
      document.execCommand("paste"); 
    } 
  } 
  */

// call appropriate functions when submit button is clicked or Enter is pressed while in text area:
submitButton.addEventListener("click", provideOutput);
pastedContent.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
    submitButton.click();
    }
  });

// call clearOutput function when clear button is clicked:
clearButton.addEventListener("click", clearOutput);

// create function to clear text field, output header, and output content:
function clearOutput() {
    outputHeader.textContent = "";
    wordCheckOutput.innerText = "";
    punctuationCheckOutput.innerText = "";
    pastedContent.value = "";
    textWithErrors.innerText = "";
    textWithErrors.classList.add("hidden");
    wordCheckArray = [];
    punctuationCheckArray = [];
}

// create function to check for specific words within the pasted text:
function wordCheck() {
    for (let arr = pastedContent.value.split(' '), i = 0; i < wordsToCheckFor.length; i++) {
        for (let j = 0; j < arr.length; j++)
        if (wordsToCheckFor[i] === arr[j]) {
            wordCheckArray.push(wordsToCheckFor[i]);
        }
    }
    for (let k = 0; k < phrasesToCheckFor.length; k++)
    if (pastedContent.value.includes(phrasesToCheckFor[k])) {
        wordCheckArray.push(phrasesToCheckFor[k]);
        console.log(wordCheckArray);
    }
    wordCheckOutput.innerText = `${wordCheckArray.join(' | ')}`;
}

// create function to check for punctuation errors within the pasted text:
function punctuationCheck() {
    for (let i = 0; i < punctuationToCheckFor.length; i++) {
        if (pastedContent.value.includes(punctuationToCheckFor[i])) {
            punctuationCheckArray.push(punctuationToCheckFor[i]);
            console.log(punctuationCheckArray);
        }
    // create way to make sure there's even number of quotation marks and parenthesis
    let quotationMarkCounter = [];
    for (let arr = pastedContent.value.split(''), j = 0; j < arr.length; j++) {
        if (arr[j].includes('"')) {
            quotationMarkCounter.push(arr[j]);
        } if (quotationMarkCounter.length % 2 == 0) {
            quotationErrorMessage = "";
        } else {
            quotationErrorMessage = "| Uneven number of quotation marks: " + quotationMarkCounter.length;
        }
    }
     // create way to make sure there's opening and closing parenthesis
    let openingParenthesisCounter = 0;
     if (pastedContent.value.includes('(')) {
        openingParenthesisCounter++;
    }
    let closingParenthesisCounter = 0;
    if (pastedContent.value.includes(')')) {
        closingParenthesisCounter++;
    }
    if (openingParenthesisCounter === closingParenthesisCounter) {
        parenthesisErrorMessage = "";
    } else {
        parenthesisErrorMessage = "| Missing opening or closing parenthesis";
        console.log(openingParenthesisCounter);
    }
    }
    // create way to check for double spacing
    if (pastedContent.value.includes("  ")) {
        doubleSpacingErrorMessage = "| Double spacing exists";
    } else {
        doubleSpacingErrorMessage = "";
    }
    // create way to check for forward slash issues

    punctuationCheckOutput.innerText = `${punctuationCheckArray.join(' | ')} ${parenthesisErrorMessage} ${quotationErrorMessage} ${doubleSpacingErrorMessage}`;
}

// create function to display output header, and output content:
function provideOutput() {
    outputHeader.textContent = "Output:";
    wordCheck();
    punctuationCheck();
    textWithErrors.classList.remove("hidden");
    textWithErrors.innerText = pastedContent.value;
}