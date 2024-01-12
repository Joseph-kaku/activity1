function reverseNumber() {
    // Get the input value
    var inputElement = document.getElementById("inputNumber");
    var inputValue = inputElement.value;
    // Reverse the number
    var reversedValue = parseInt(inputValue.toString().split('').reverse().join(''));
    // Display the result
    var resultElement = document.getElementById("result");
    if (resultElement) {
        resultElement.textContent = "Reversed Number: ".concat(reversedValue);
    }
}
