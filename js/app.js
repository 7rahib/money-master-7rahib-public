// Buttons
const calculateBtn = document.getElementById('calculate-btn');
const saveBtn = document.getElementById('save-button');

// Expenses
const salaryAmount = document.getElementById('salary-amount');
const foodAmount = document.getElementById('food-amount');
const rentAmount = document.getElementById('rent-amount');
const clothesAmount = document.getElementById('clothes-amount');
const totalExpenses = document.getElementById('total-expenses');
const balance = document.getElementById('balance');


// Savings
const savingPercentage = document.getElementById('saving-percentage');
const totalSaving = document.getElementById('total-saving');
const remainingBalance = document.getElementById('remaining-balance');


// Expenses Error
function expensesError() {
    Swal.fire('Error!!! You can not spend more than you have');
    foodAmount.value = '';
    rentAmount.value = '';
    clothesAmount.value = '';
}

// Saving Error
function savingError() {
    Swal.fire('Error!!! You can not save more than you have in your Balance');
    savingPercentage.value = '';
}

// Handling Expenses
function getBalance() {

    if (isNaN(salaryAmount.value) || isNaN(foodAmount.value) || isNaN(rentAmount.value) || isNaN(clothesAmount.value)) {
        Swal.fire('Error!!! Please Enter Number');
    }
    else {
        if (salaryAmount.value < 0 || foodAmount.value < 0 || rentAmount.value < 0 || clothesAmount.value < 0) {
            Swal.fire('Error!!! Please Enter Positive Number');
        }
        else {
            let totalSpent = parseFloat(foodAmount.value) + parseFloat(rentAmount.value) + parseFloat(clothesAmount.value);
            if (totalSpent > salaryAmount.value) {
                expensesError();
            }
            else {
                totalExpenses.innerText = totalSpent;
                balance.innerText = parseFloat(salaryAmount.value) - parseFloat(totalSpent);
            }
        }
    }
}

// Handling Savings
function getSavedAmount() {
    getBalance();
    if (isNaN(savingPercentage.value)) {
        Swal.fire('Error!! Please Enter Number')
    }
    else {
        if (savingPercentage.value < 0) {
            Swal.fire('Error!!! Please Enter Positive Number');
        }
        else {
            let totalSaved = (parseFloat(salaryAmount.value / 100)) * parseFloat(savingPercentage.value);
            if (totalSaved > balance.innerText) {
                savingError();
            }
            else {
                totalSaving.innerText = totalSaved;
                remainingBalance.innerText = parseFloat(balance.innerText) - parseFloat(totalSaving.innerText);
            }
        }
    }
}

// Calculating Expenses
calculateBtn.addEventListener('click', function () {
    getBalance();
})

// Calculating Savings
saveBtn.addEventListener('click', function () {
    getSavedAmount();
})