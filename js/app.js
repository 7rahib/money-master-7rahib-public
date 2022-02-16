const calculateBtn = document.getElementById('calculate-btn');
const saveBtn = document.getElementById('save-button');
const salaryAmount = document.getElementById('salary-amount');
const foodAmount = document.getElementById('food-amount');
const rentAmount = document.getElementById('rent-amount');
const clothesAmount = document.getElementById('clothes-amount');
const balance = document.getElementById('balance');
const totalExpenses = document.getElementById('total-expenses')
const remainingBalance = document.getElementById('remaining-balance');
const totalSaving = document.getElementById('total-saving');
const savingPercentage = document.getElementById('saving-amount');

function getBalance() {
    let totalSpent = parseFloat(foodAmount.value) + parseFloat(rentAmount.value) + parseFloat(clothesAmount.value);
    totalExpenses.innerText = totalSpent;
    balance.innerText = parseFloat(salaryAmount.value) - parseFloat(totalSpent);

}
function getSaved() {
    getBalance();
    totalSaving.innerText = (parseFloat(balance.innerText / 100)) * parseFloat(savingPercentage.value);
    remainingBalance.innerText = parseFloat(balance.innerText) - parseFloat(totalSaving.innerText);

}

calculateBtn.addEventListener('click', function () {
    getBalance();
})

saveBtn.addEventListener('click', function () {
    getSaved();
})