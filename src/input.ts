// Get the button element by its ID
const btn = document.getElementById("btn") as HTMLButtonElement;

// Add a click event listener to the button
btn.addEventListener("click", () => {
    // Get the input value
    const input = document.getElementById("input") as HTMLInputElement;
    const inputValue = input.value;

    // Store the input value in local storage
    localStorage.setItem("inputValue", inputValue);

    // List the local storage items on the webpage
    const localStorageItems = Object.entries(localStorage);
    localStorageItems.forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
    });
});


