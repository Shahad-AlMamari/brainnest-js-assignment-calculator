const clikedButtons = document.querySelectorAll('.operand, .operator, .decimal');
const display = document.querySelector('.display-numbers');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');


let displayData = "";


//add an eventListener to each of the buttons
clikedButtons.forEach(button => {
    button.addEventListener('click', () => {
        // logic that run when the button is "clicked"
        const buttonValue = button.getAttribute('value');
        displayData += buttonValue;
        display.textContent = displayData;
    })
})

// add an event listener to the equals button
equalsButton.addEventListener('click', () => {

    // use the eval() function to evaluate the expression and output it to the display
    displayData = eval(displayData)
    display.textContent = displayData
})
clearButton.addEventListener('click', () => {
    displayData = "";
    display.textContent = displayData;
})
