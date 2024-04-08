function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, operator, num2) {
    num1 = Number(num1);
    num2 = Number(num2);

    switch(operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return -1;
    }
}

let val1 = val2 = operator = '';

let buttons = document.querySelector('#buttons');
let display = document.querySelector('.display');

buttons.addEventListener('click', event => {
    let target = event.target;

    /*
    if(
        target.id !== 'digits' 
        && target.id !== 'operators' 
        && Number(target.textContent) >= 0 
        && Number(target.textContent) < 10
        && operatorSelected === false
    ) {
        displayValue += target.textContent;
    }else if(
        target.id !== 'digits' 
        && target.id !== 'operators' 
        && Number(target.textContent) >= 0 
        && Number(target.textContent) < 10
        && operatorSelected === true
    ) {
        operandValue += target.textContent;
    }else if(target.textContent === 'Clear') {
        displayValue = '';
    }else if(target.parentElement.id === 'operators') {
        displayValue = '';
        operatorSelected = true;
    }
    */

    if(target.parentElement.id === 'digits') {
        if(val1 === '') {
            display.textContent = '';
        }
        if(operator === '') {
            val1 += target.textContent;
        } else {
            display.textContent = '';
            val2 += target.textContent;
        }
        display.textContent += target.textContent;
    }else if(target.parentElement.id === 'operators') {
        if(target.textContent !== 'Clear' && target.textContent !== '=') {
            operator = target.textContent;
        }else if(target.textContent === 'Clear') {
            display.textContent = '';
            val1 = val2 = operator = '';
        }else if(target.textContent === '=') {
            console.log(val1 + operator + val2);
            display.textContent = operate(val1, operator, val2);
            val1 = val2 = operator = '';
        }
    }
});