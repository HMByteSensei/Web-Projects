const userInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultField = document.getElementById("result");

const clearInput = (input) => {
    input = input.toLowerCase();
    const transformedInput = input.replace(/[^a-z0-9]/g, "");
    return transformedInput;
};

const isPalindrom = (input) => {
    const transformetText = clearInput(input);
    const size = transformetText.length;
    for(let i = 0; i<size/2; i++) {
        if(transformetText[i] !== transformetText[size - i - 1]) {
            return false;
        }
    }
    return true;
};

checkButton.addEventListener("click", () => {
    const input = userInput.value;
    if(input.length === 0) {
        alert("Please input a value");
        return;
    }

    let palindrome = `${input} is a palindrome`;
    if(isPalindrom(input) === false) {
        palindrome = `${input} is not a palindrome`;
    }
    resultField.textContent  = palindrome;
});