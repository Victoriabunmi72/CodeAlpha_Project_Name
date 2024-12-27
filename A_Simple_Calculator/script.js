// Append values to the display
function appendValue(value) {
    const resultField = document.getElementById("result");
    resultField.value += value;
}

// Clear the display
function clearResult() {
    document.getElementById("result").value = "";
}

// Calculate the result of the expression
function calculateResult() {
    const resultField = document.getElementById("result");
    try {
        resultField.value = eval(resultField.value);
    } catch (error) {
        resultField.value = "Error";
    }
}

// Advanced Features
function calculateSquareRoot() {
    const resultField = document.getElementById("result");
    resultField.value = Math.sqrt(parseFloat(resultField.value));
}

function calculatePercentage() {
    const resultField = document.getElementById("result");
    resultField.value = parseFloat(resultField.value) / 100;
}

function calculatePower() {
    const resultField = document.getElementById("result");
    resultField.value = Math.pow(parseFloat(resultField.value), 2);
}

function calculateExponent() {
    const base = parseFloat(prompt("Enter base:"));
    const exponent = parseFloat(prompt("Enter exponent:"));
    if (!isNaN(base) && !isNaN(exponent)) {
        document.getElementById("result").value = Math.pow(base, exponent);
    }
}

function calculateSine() {
    const resultField = document.getElementById("result");
    resultField.value = Math.sin(parseFloat(resultField.value) * (Math.PI / 180));
}

function calculateCosine() {
    const resultField = document.getElementById("result");
    resultField.value = Math.cos(parseFloat(resultField.value) * (Math.PI / 180));
}

function calculateTangent() {
    const resultField = document.getElementById("result");
    resultField.value = Math.tan(parseFloat(resultField.value) * (Math.PI / 180));
}

function calculateLog() {
    const resultField = document.getElementById("result");
    resultField.value = Math.log10(parseFloat(resultField.value));
}

function calculateLn() {
    const resultField = document.getElementById("result");
    resultField.value = Math.log(parseFloat(resultField.value));
}