// Get the button element by its ID
var btn = document.getElementById("btn");
// Add a click event listener to the button
btn.addEventListener("click", function () {
    // Get the input value
    var input = document.getElementById("input");
    var inputValue = input.value;
    // Store the input value in local storage
    localStorage.setItem("inputValue", inputValue);
    // List the local storage items on the webpage
    var localStorageItems = Object.entries(localStorage);
    localStorageItems.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        console.log("".concat(key, ": ").concat(value));
    });
});
