const inputValue = document.querySelector('.inputValue');
const displayConvertedValue = document.querySelector('.displayConvertedValue');
const displayEnteredValue = document.querySelector('.displayEnteredValue');
const button = document.querySelector('.button');
const errorMessage = document.querySelector('.error')

inputValue.addEventListener('input', inputHandleChange );

const numbersAccepted = /^[0-9]+$/;

// Validate Input Value

function inputHandleChange(e) {
    valueToConvert = e.target.value;
    
    if ( !valueToConvert || valueToConvert == '' ) {
        errorMessage.innerHTML = 'CANT BE EMPTY !'
    } else {
        if ( valueToConvert.match(numbersAccepted)) {
            errorMessage.innerHTML = '';
            button.addEventListener('click', checkInputValueLength);
            button.style.cursor = 'pointer';
            button.classList.add('customHover');
            checkInputValueLength(valueToConvert);
        } else {
            errorMessage.innerHTML = 'ONLY NUMBERS !';
            button.removeEventListener('click', checkInputValueLength);
            button.style.cursor = 'auto';
            button.classList.remove('customHover');
        }
    } 
};

// Declare Roman Numbers

const symbols = [
    [ 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'],
    [ 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', 'C'],
    [ 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', 'M'],
    [ 'M', 'MM', 'MMM', 'MCD', 'MD', 'MDC', 'MDCC', 'MDCCC', 'MCM'],
];

function checkInputValueLength(valueToConvert) {
    const number = valueToConvert;
    const numberToString = number.toString();

    switch ( numberToString.length ) {
        case 1:
            valueLength = 1;
            convertToSymbol(valueLength);
            return a;
        case 2:
            valueLength = 2;
            convertToSymbol(valueLength);
            return a + b;
        case 3:
            valueLength = 3;
            convertToSymbol(valueLength);
            return a + b + c;
        case 4:
            valueLength = 4;
            convertToSymbol();
            return a + b + c + d;
    }
 
    function convertToSymbol() {
        
        numberToString[0] === undefined ? firstDigit = -1 : firstDigit = numberToString[0].valueOf() - (1);
        numberToString[1] === undefined ? secondDigit = -1 : secondDigit = numberToString[1].valueOf() - (1);
        numberToString[2] === undefined ? thirdDigit = -1 : thirdDigit = numberToString[2].valueOf() - (1);
        numberToString[3] === undefined ? fourthDigit = -1 : fourthDigit = numberToString[3].valueOf() - (1);
         
        firstDigit === -1 ? a = '' : a = symbols[valueLength - (1)][firstDigit];
        secondDigit === -1 ? b = '' : b = symbols[valueLength - (2)][secondDigit];
        thirdDigit === -1 ? c = '' : c = symbols[valueLength - (3)][thirdDigit];
        fourthDigit === -1 ? d = '' : d = symbols[valueLength - (4)][fourthDigit];

        return a, b, c, d;
    };

    // Print Result / Reset Values / Remove Button Listener

    displayEnteredValue.innerHTML = inputValue.value;
    displayConvertedValue.innerHTML = a + b + c + d ;
    inputValue.value = '';
    button.classList.remove('customHover');
    button.removeEventListener('click', checkInputValueLength );
};