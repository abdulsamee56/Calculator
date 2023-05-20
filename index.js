let buttons = document.querySelector('.buttons');
let inp = document.querySelector('.input-s');
let clearButton =document.querySelector('.clear');
let del = document.querySelector('.delete');



const buttonLabels = [
  '7', '8', '9', '/',
  '4', '5', '6', '*',
  '1', '2', '3', '-',
  '0', '.', '=', '+'
];

let firstOperand = '';
let selectedOperator = '';
let secondOperand = '';

function add(first, second) {
  return parseFloat(first) + parseFloat(second);
}

function subtract(first, second) {
  return parseFloat(first) - parseFloat(second);
}

function multiply(first, second) {
  return parseFloat(first) * parseFloat(second);
}

function division(first, second) {
  if (parseFloat(second) === 0) {
    return "Can't divide by 0";
  }
  return parseFloat(first) / parseFloat(second);
}

function performCalculation(first, op, second) {
  switch (op) {
    case '+':
      return add(first, second);
    case '-':
      return subtract(first, second);
    case '*':
      return multiply(first, second);
    case '/':
      return division(first, second);
    default:
      return NaN; // Return NaN for invalid operator
  }
}

buttonLabels.forEach(label => {
  let creator = document.createElement('button');
  creator.textContent = label;

  creator.addEventListener('click', () => {
    const clickedButton = creator.textContent;

    if (clickedButton === '=' && firstOperand && selectedOperator && secondOperand) {
      // Perform the calculation when '=' is clicked
      const result = performCalculation(firstOperand, selectedOperator, secondOperand);
      inp.textContent = result;
      // Reset the operands and operator for future calculations
      firstOperand = result;
      selectedOperator = '';
      secondOperand = '';
    } else if (clickedButton === '+' || clickedButton === '-' || clickedButton === '*' || clickedButton === '/') {
      // Set the operator when an operator button is clicked
      selectedOperator = clickedButton;
      inp.textContent += clickedButton;
    }
    else {
      // Append the digit or decimal point to the appropriate operand
      if (!selectedOperator) {
        firstOperand += clickedButton;
      } else {
        secondOperand += clickedButton;
      }
      inp.textContent += clickedButton;
    }
  });

  buttons.appendChild(creator);
});

function clearScreen() {
    inp.textContent = '';
    firstOperand = '';
    selectedOperator = '';
    secondOperand = '';
  }
  
clearButton.addEventListener('click', clearScreen);

function delItem() {
    inp.textContent = inp.textContent.slice(0, -1);
  }

del.addEventListener('click',delItem);