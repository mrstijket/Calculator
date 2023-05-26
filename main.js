let calculation = localStorage.getItem('calculation') || '';

displayCalculation(); // Display the calculation when the page first loads.

function updateCalculation(value) {
    calculation += value;
    displayCalculation();

    localStorage.setItem('calculation', calculation);
}

function displayCalculation() {
    document.querySelector('.js-calculation').innerHTML = calculation;
}