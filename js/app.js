const calculateBtn = document.getElementById('calculate-btn');
const saveBtn = document.getElementById('save-button')

function getBalance() {
    let salaryAmount = document.getElementById('salary-amount');
    let foodAmount = document.getElementById('food-amount');

    let rentAmount = document.getElementById('rent-amount');

    let clothesAmount = document.getElementById('clothes-amount');
    let totalSpent = parseFloat(foodAmount.value) + parseFloat(rentAmount.value) + parseFloat(clothesAmount.value);
    let totalExpenses = document.getElementById('total-expenses').innerText = totalSpent;

    let balance = document.getElementById('balance').innerText = salaryAmount.value - totalExpenses;

}


calculateBtn.addEventListener('click', function () {
    getBalance();
})

saveBtn.addEventListener('click', function () {


})