function updateBalance(income, cost) {
    const remainingBalance = income - cost;
    const expences = document.getElementById("total-expenses");
    expences.innerText = cost;
    const newBalance = document.getElementById("rest-money")
    newBalance.innerText = remainingBalance;
}
function totalIncome() {
    const totalIncome = parseFloat(document.getElementById("income-field").value);
    return totalIncome;
}
function totalCost() {
    const foodCost = parseFloat(document.getElementById("food-cost").value);
    const rentCost = parseFloat(document.getElementById("rent-cost").value);
    const clothCost = parseFloat(document.getElementById("cloth-cost").value);
    const totalCost = foodCost + rentCost + clothCost;
    return totalCost;
}
document.getElementById("calculate-btn").addEventListener("click", function () {
    const income = totalIncome();
    const cost = totalCost();
    const incomeError = document.getElementById('calculation-error');
    const inputError = document.getElementById('input-error');
    const notNumberError = document.getElementById('notnumber-error');
    if (income < cost) {
        incomeError.style.display = 'block';
        inputError.style.display = 'none';
        notNumberError.style.display = 'none';
    }
    else if (income < 0 || cost < 0) {
        inputError.style.display = 'block';
        incomeError.style.display = 'none';
        notNumberError.style.display = 'none';
    }
    else if (isNaN(income) || isNaN(cost)) {
        notNumberError.style.display = 'block';
        inputError.style.display = 'none';
        incomeError.style.display = 'none';
    }

    else {
        updateBalance(income, cost);
        incomeError.style.display = 'none';
        inputError.style.display = 'none';
        notNumberError.style.display = 'none';

    }

})
document.getElementById('save-btn').addEventListener('click', function () {
    const lowBalance = document.getElementById("low-balance")
    const income = totalIncome()
    const cost = totalCost();
    const balance = income - cost;
    const savingInput = document.getElementById('saving-input')
    const savingRate = parseInt(savingInput.value);
    const savingMoney = (income * (savingRate / 100));
    const remainBalance = balance - savingMoney;
    if (remainBalance < 0) {
        lowBalance.style.display = 'block'
        document.getElementById("save-amount").innerText = "";
        document.getElementById("remaining").innerText = "";
    }
    else {
        document.getElementById("save-amount").innerText = savingMoney;
        document.getElementById("remaining").innerText = remainBalance;
        lowBalance.style.display = 'none'
    }



})