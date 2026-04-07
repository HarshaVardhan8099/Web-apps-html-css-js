const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const income = document.querySelector("#income");
    const amount = parseInt(income.value);

    const result = document.querySelector("h2");
    let totalTax = 0;

    if (isNaN(amount)) {
        result.textContent = "Please enter a valid income";
        return;
    }

    if (amount <= 400000) {
        totalTax = 0;
    } 
    else if (amount <= 800000) {
        totalTax = amount * 0.05;
    } 
    else if (amount <= 1200000) {
        totalTax = amount * 0.10;
    } 
    else if (amount <= 1600000) {
        totalTax = amount * 0.15;
    } 
    else {
        totalTax = amount * 0.20;
    }

    result.textContent = `Total Tax: ₹${totalTax}`;

    e.reset();
});