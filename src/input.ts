function reverseNumber() {
    // Get the input value
    const inputElement = document.getElementById("inputNumber") as HTMLInputElement;
    const inputValue = inputElement.value;

    // Reverse the number
    const reversedValue = parseInt(inputValue.toString().split('').reverse().join(''));

    // Display the result
    const resultElement = document.getElementById("result");
    if (resultElement) {
        resultElement.textContent = `Reversed Number: ${reversedValue}`;
    }
}