/*
step-1: add event listener to the withdraw button
step-2: get the withdraw amount from the withdraw input field
for input field use .value to the value inside the input field
convert string to number using parseFloat
step-3: get the current withdraw total amount
for non-input(element other than input, textarea) use innerText to get the text
convert string to number using parseFloat
step-4: add numbers to set the total withdraw
set the withdraw total amount
step-5: get balance current total
convert string to number using parseFloat
step-6: calculate current total balance
set the balance total
step-7: clear the deposit field
*/ 

// step-1:
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-2:
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    // convert string to number using parseFloat
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step-7:
    withdrawField.value = '';

    // validation or alert message
    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid number');
        return;
    }


    // step-3:
    const withdrawTotalElement = document.getElementById("withdraw-total");
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    // convert string to number using parseFloat
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    // step-4:
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step-5:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    // convert string to number using parseFloat
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    
    // validation or alert message
    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Baap er bank e eto taka nai');
        return;
    }

    // step-6:
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;
})