// function for getting total income 
function totalIncome() {
    const incomeInput = document.getElementById("income-field").value;
    const totalIncome = parseFloat(incomeInput);
    const error = document.getElementById('income-input-error')
    if (totalIncome < 0 || isNaN(incomeInput)) {
        error.style.display = 'block';
    }
    else {
        error.style.display = 'none';
        return totalIncome;
    }
}
// function for getting my total Expenses 
function totalCost() {
    const foodInput = document.getElementById("food-cost").value
    const foodCost = parseFloat(foodInput);
    const rentInput = document.getElementById("rent-cost").value;
    const rentCost = parseFloat(rentInput);
    const clothInput = document.getElementById("cloth-cost").value;
    const clothCost = parseFloat(clothInput);
    const inputError = document.getElementById('expenses-input-error');
    const negativeError = document.getElementById('expenses-negative-error');
    if (isNaN(foodInput) || isNaN(clothInput) || isNaN(rentInput)) {
        inputError.style.display = 'block';
        negativeError.style.display = 'none';
    }
    else if (foodCost < 0 || rentCost < 0 || clothCost < 0) {

        negativeError.style.display = 'block';
        inputError.style.display = 'none';
    }
    else {
        negativeError.style.display = 'none';
        inputError.style.display = 'none';
        const totalCost = foodCost + rentCost + clothCost;
        return totalCost;
    }
}
// calculate button operation 

document.getElementById("calculate-btn").addEventListener("click", function () {
    // function calling 
    const income = totalIncome();
    const cost = totalCost();
    const incomeError = document.getElementById('calculation-error');
    if (income < cost) {
        incomeError.style.display = 'block';
    }
    else {
        incomeError.style.display = 'none';
        const remainingBalance = income - cost;
        const expences = document.getElementById("total-expenses");
        expences.innerText = cost;
        const newBalance = document.getElementById("rest-money")
        newBalance.innerText = remainingBalance;
    }
})
// save button operation 
document.getElementById('save-btn').addEventListener('click', function () {
    const lowBalance = document.getElementById("low-balance")
    const negativeInput = document.getElementById('not-number');
    // calling function 
    const income = totalIncome()
    const cost = totalCost();
    const balance = income - cost;
    const savingInput = document.getElementById('saving-input').value;
    const savingRate = parseFloat(savingInput);
    const savingMoney = (income * (savingRate / 100));
    const remainBalance = balance - savingMoney;
    if (remainBalance < 0) {
        lowBalance.style.display = 'block'
        document.getElementById("save-amount").innerText = "";
        document.getElementById("remaining").innerText = "";
    }
    else if (isNaN(savingInput) || savingRate < 0) {
        negativeInput.style.display = 'block'
        lowBalance.style.display = 'none'
        document.getElementById("save-amount").innerText = "";
        document.getElementById("remaining").innerText = "";
    }
    else {
        negativeInput.style.display = 'none'
        lowBalance.style.display = 'none'
        document.getElementById("save-amount").innerText = savingMoney;
        document.getElementById("remaining").innerText = remainBalance;
    }
})