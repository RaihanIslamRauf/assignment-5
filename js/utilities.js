// shared functions (challenged part)
function getInputFieldById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function showSectionById(id){
    document.getElementById('donation-cards').classList.add('hidden');
    document.getElementById('donation-history-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');

}