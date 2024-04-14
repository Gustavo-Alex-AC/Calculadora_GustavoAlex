const buttonElements = document.querySelectorAll(".row-item");
const calculatorInput = document.querySelector(".calculator-input");

buttonElements.forEach((el) => {
  el.addEventListener("click", function () {
    const content = el.value;

    // Check if the button clicked is an operator
    if (el.classList.contains("operator")) {
      // Check if there is already an operator in the input display
      if (calculatorInput.value.match(/[\+\-\*\/\%]$/)) {
        return; // Exit the function if an operator is already present
      }
    }

    // Handle DEL and AC buttons
    if (content === "DEL") {
      calculatorInput.value = calculatorInput.value.slice(0, -1); // Remove last character
    } else if (content === "AC") {
      calculatorInput.value = ""; // Clear input display
    } else if (content === "=") {
      // handle undefined when the igual button is clicked and cal input is empty and eval
      calculatorInput.value =
        calculatorInput.value === "" ? "" : eval(calculatorInput.value);
    } else {
      calculatorInput.value += content; // Append the button value to the input display
    }
  });
});
