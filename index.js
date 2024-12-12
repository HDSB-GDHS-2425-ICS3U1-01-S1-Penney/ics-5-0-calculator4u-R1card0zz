let num0 = 0;
let num1 = 0;

function calculationLoop() {
    // Prompt the user for the first number
    num0 = prompt("Enter the first number:");
    num0 = Number(num0);

    // Validate the first number
    if (isNaN(num0)) {
        alert("Invalid input. Please enter a valid number.");
        return calculationLoop();
    }

    // Prompt the user for the second number
    num1 = prompt("Enter the second number:");
    num1 = Number(num1);

    // Validate the second number
    if (isNaN(num1)) {
        alert("Invalid input. Please enter a valid number.");
        return calculationLoop();
    }

    // Prompt the user to choose an operation
    const operation = prompt(
        "Choose an operation: \n1: Add \n2: Subtract \n3: Multiply \n4: Divide"
    );

    let result;

    // Perform the chosen operation
    switch (operation) {
        case "1":
            result = num0 + num1;
            alert(`${num0} + ${num1} = ${result}`);
            break;
        case "2":
            result = num0 - num1;
            alert(`${num0} - ${num1} = ${result}`);
            break;
        case "3":
            result = num0 * num1;
            alert(`${num0} * ${num1} = ${result}`);
            break;
        case "4":
            if (num1 === 0) {
                alert("Error: Division by zero is not allowed.");
                break;
            }
            result = num0 / num1;
            alert(`${num0} / ${num1} = ${result}`);
            break;
        default:
            alert("Invalid operation. Please select a valid option.");
            return calculationLoop();
    }

    // Ask the user if they want to perform another calculation
    const anotherCalculation = prompt("Do you want to perform another calculation? (yes/no)");
    if (anotherCalculation.toLowerCase() === "yes") {
        calculationLoop();
    } else {
        alert("Goodbye!");
    }
}

// Start the calculator loop
calculationLoop();
