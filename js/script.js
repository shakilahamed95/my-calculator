function updateBalance(income, cost) {
    const remainingBalance = income - cost;
    const expences = document.getElementById("total-expenses");
    expences.innerText = cost;
    const newBalance = document.getElementById("rest-money")
    newBalance.innerText = remainingBalance;
}
document.getElementById("calculate-btn").addEventListener("click", function () {
    const totalIncome = parseFloat(document.getElementById("income-field").value);
    const foodCost = parseFloat(document.getElementById("food-cost").value);
    const rentCost = parseFloat(document.getElementById("rent-cost").value);
    const clothCost = parseFloat(document.getElementById("cloth-cost").value);
    const totalCost = foodCost + rentCost + clothCost;
    updateBalance(totalIncome, totalCost);
})