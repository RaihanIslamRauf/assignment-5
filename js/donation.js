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
        const remainingAccountBalance = accountBalance - newBalance;
        document.getElementById('current-balance').innerText = newBalance;
        document.getElementById('account-balance').innerText = remainingAccountBalance;
    }
});