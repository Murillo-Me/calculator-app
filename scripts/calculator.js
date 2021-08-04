let resultTipAmountPerPerson = document.querySelector('#tip-amount');
let resultTipAmountTotal = document.querySelector('#total');

document.body.addEventListener('change', calc);

function calc() {
    let tipPercentage = document.querySelector('input[name="percent-picker"]:checked');
    let bill = document.querySelector('#bill-input');
    let numberOfPeople = document.querySelector('#number-of-people-input');

// console.log(tipPercentage.value)
// console.log(bill.value)
// console.log(numberOfPeople.value)

    let resultTipAmountTotalCalculated = (parseFloat(bill.value) + (parseFloat(bill.value) * parseFloat(tipPercentage.value))) / parseFloat(numberOfPeople.value);
    let resultTipAmountPerPersonCalculated = (parseFloat(bill.value) * parseFloat(tipPercentage.value)) / parseFloat(numberOfPeople.value);

    // console.log(resultTipAmountTotalCalculated)
    // console.log(resultTipAmountPerPersonCalculated)

    if (numberOfPeople.value > 0) resultTipAmountPerPerson.innerText = '$' + resultTipAmountPerPersonCalculated.toFixed(2);
    resultTipAmountTotal.innerText = '$' + resultTipAmountTotalCalculated.toFixed(2);
}

function clearValues() {
    document.querySelector('input[name="percent-picker"]:checked').value = '0';
    document.querySelector('#bill-input').value = '0.00';
    document.querySelector('#number-of-people-input').value = '1';
    calc();
}