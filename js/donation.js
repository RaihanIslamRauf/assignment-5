// card 1 : noakhali donation
document.getElementById('btn-donation').addEventListener('click',function(event){
       event.preventDefault();
       const addAmount = getInputFieldById('input-donation-amount');

       // validation for donated amount
       if(isNaN(addAmount) || addAmount <= 0){
        alert('Failed to Donate. Try it correctly');
        return;
    }
    else{
        const balance = getTextFieldValueById('current-balance');
        const newBalance = balance + addAmount;
        const accountBalance = getTextFieldValueById('account-balance');
        const remainingAccountBalance = accountBalance - addAmount;
        document.getElementById('current-balance').innerText = newBalance;
        document.getElementById('account-balance').innerText = remainingAccountBalance;
    }
});

// card 2 : feni donation
document.getElementById('btn-donation2').addEventListener('click',function(event){
       event.preventDefault();
       const addAmount2 = getInputFieldById('input-donation-amount2');

       // validation for donated amount
       if(isNaN(addAmount2) || addAmount2 <= 0){
        alert('Failed to Donate. Try it correctly');
        return;
    }
    else{
        const balance2 = getTextFieldValueById('current-balance2');
        const newBalance2 = balance2 + addAmount2;
        const accountBalance = getTextFieldValueById('account-balance');
        const remainingAccountBalance = accountBalance - addAmount2;
        document.getElementById('current-balance2').innerText = newBalance2;
        document.getElementById('account-balance').innerText = remainingAccountBalance;
    }
});


// card 3 : quota movement donation
document.getElementById('btn-donation3').addEventListener('click',function(event){
       event.preventDefault();
       const addAmount3 = getInputFieldById('input-donation-amount3');

       // validation for donated amount
       if(isNaN(addAmount3) || addAmount3 <= 0){
        alert('Failed to Donate. Try it correctly');
        return;
    }
    else{
        const balance3 = getTextFieldValueById('current-balance3');
        const newBalance3 = balance3 + addAmount3;
        const accountBalance = getTextFieldValueById('account-balance');
        const remainingAccountBalance = accountBalance - addAmount3;
        document.getElementById('current-balance3').innerText = newBalance3;
        document.getElementById('account-balance').innerText = remainingAccountBalance;
    }
});