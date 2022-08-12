const inputNumber = document.querySelector('.inputNumber');
const result = document.querySelector('.result');
const inputResult = document.querySelector('.inputResult');
const button = document.querySelector('.button');
const error = document.querySelector('.error')

inputNumber.addEventListener('input', inputHandleChange );

const regNumbers = /^[0-9]+$/

// Input Value Validation

function inputHandleChange(e) {
    inputValue = e.target.value;
    if ( !inputValue || inputValue == '' ) {
        error.innerHTML = 'CANT BE EMPTY !'
    } else {
        if ( inputValue.match(regNumbers) ) {
            error.innerHTML = '';
            button.addEventListener('click', change);
            button.style.cursor = 'pointer';
            button.classList.add('myCustomHover');
            change(inputValue);
        } else {
            error.innerHTML = 'ONLY NUMBERS !';
            button.removeEventListener('click', change );
            button.style.cursor = 'auto';
            button.classList.remove('myCustomHover');
        }
    } 
};

// Declare Roman Numbers

const symbols = [
    [ 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'],
    [ 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', 'C'],
    [ 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', 'M'],
    [ 'M', 'MM', 'MMM', 'MCD', 'MD', 'MDC', 'MDCC', 'MDCCC', 'MCM', 'M'],
 ];
 
 function change(inputValue) {
     const number = inputValue;

     const numString = number.toString();
 
     if ( numString.length === 1 ) {
         size = 1;
         changeNum(size);
         return a;
     };
 
     if ( numString.length === 2 ) {
         size = 2;
         changeNum(size);
         return a + b;
     };
 
     if ( numString.length === 3 ) {
         size = 3;
         changeNum(size);
         return a + b + c;
     };
 
     if ( numString.length === 4 ) {
         size = 4;
         changeNum();
         return a + b + c + d;
     };
 
     function changeNum() {
        
         numString[0] === undefined ? first = -1 : first = numString[0].valueOf() - (1);
         numString[1] === undefined ? second = -1 : second = numString[1].valueOf() - (1);
         numString[2] === undefined ? third = -1 : third = numString[2].valueOf() - (1);
         numString[3] === undefined ? fourth = -1 : fourth = numString[3].valueOf() - (1);
         
         first === -1 ? a = '' : a = symbols[size - (1)][first];
         second === -1 ? b = '' : b = symbols[size - (2)][second];
         third === -1 ? c = '' : c = symbols[size - (3)][third];
         fourth === -1 ? d = '' : d = symbols[size - (4)][fourth];
         return a, b, c, d;
     };
     // Print Result / Reset Values / Remove Button Listener

     inputResult.innerHTML = inputNumber.value;
     result.innerHTML = a + b + c + d ;
     inputNumber.value = '';
     button.classList.remove('myCustomHover');
     button.removeEventListener('click', change );
 };