function add(numOne,numTwo) {
  return numOne + numTwo;
}

function subtract(numOne,numTwo) {
  return numOne - numTwo;
}

function multiply(numOne,numTwo) {
  return numOne * numTwo;
}

function divide(numOne,numTwo) {
  return numOne / numTwo;
}

function equal(numOne, sign, numTwo) {
  if((globalOperator === 'multiplication' || 
      globalOperator === 'division' ||
      globalOperator === 'addition' ||
      globalOperator === 'subtraction') && currentNum === 0) {
    screenBottom.textContent = previousNum;
    isOperator = true;
  } else if(globalOperator !== ''){
    previousNum = evalaute(numOne, globalOperator, numTwo)
    screenTop.textContent = `${numOne} ${sign} ${numTwo} =`
    screenBottom.textContent = `${previousNum}`;
    currentNum = 0;
  } else if(currentNum === 0 && previousNum === 0) {
    screenBottom.textContent = '';
  } 
  globalOperator = '';
  isEqual = true;
}

function evalaute(firstNum,Operator,secondNum) {
  let result = currentNum;
  switch(Operator) {
    case 'addition':
      result = add(firstNum, secondNum);
      break;
    case 'subtraction':
      result = subtract(firstNum, secondNum);
      break;
    case 'multiplication':
      result = multiply(firstNum, secondNum);
      break; 
    case 'division':
      result = divide(firstNum, secondNum);
      break;
    }
  return result;
}
  
function operate(operation, sign) {
  if(isEqual && isOperator) {
      globalSign = sign;
      globalOperator = operation;
      screenTop.textContent = `${previousNum} ${sign}`;
      screenBottom.textContent = ''
      currentNum = 0;
      isEqual = false;
    } else {
      if(isOperator) {
        globalSign = sign;
        let result = evalaute(previousNum, globalOperator, currentNum);
        globalOperator = operation;
        previousNum = result;
        screenTop.textContent = `${result} ${sign}`;
        screenBottom.textContent = ''
        currentNum = 0;
      } 
    }
  isOperator = false;
}

function buttonClick(value) {
  if(isEqual) {
    screenTop.textContent = '';
    screenBottom.textContent = '';
    screenBottom.textContent += value;
    currentNum = parseFloat(screenBottom.textContent)
    isEqual = false;
  } else {
    screenBottom.textContent += value;
    currentNum = parseFloat(screenBottom.textContent);
  }
  isOperator = true;
}

//Global
let isEqual = false;
let isOperator = false;
let globalSign = '';
let previousNum = 0;
let currentNum = 0;
let globalOperator = '';

let screenBottom = document.querySelector('.screen-bottom');
let screenTop = document.querySelector('.screen-top');
let testBtn = document.querySelector('#test')

testBtn.addEventListener('click', () => {
  console.log(`Current Number: ${currentNum}`);
  console.log(`Previous Number: ${previousNum}`);
  console.log(`Operator: ${globalOperator}`);
  console.log(`IsOperator: ${isOperator}`);
  console.log(`IsEqual: ${isEqual}`)
})

const numberBtn = document.querySelectorAll('.number');

numberBtn.forEach((button) => {
  button.addEventListener('click', () => {
    buttonClick(button.textContent)
  })
})


//Buttons
const backSpcBtn = document.querySelector('#backspace');
const clearAllBtn = document.querySelector('#clearAllBtn');
const clearBtn = document.querySelector('#clearBtn')
const zeroBtn = document.querySelector('#zeroBtn');

//Operation Button
const pointBtn = document.querySelector('#pointBtn');
const negativeBtn = document.querySelector('#negativeBtn');
const addBtn = document.querySelector('#addBtn');
const subBtn = document.querySelector('#subBtn');
const multiplyBtn = document.querySelector('#multiplyBtn');
const divideBtn = document.querySelector('#divideBtn');
const equalBtn = document.querySelector('#equalBtn');

clearAllBtn.addEventListener('click', () => {
  screenTop.textContent = '';
  screenBottom.textContent = '';
  previousNum = 0;
  currentNum = 0;
  globalSign = '';
  globalOperator = '';
  isOperator = false;
})

clearBtn.addEventListener('click', () => {
  screenBottom.textContent = '';
  currentNum = 0;
})

pointBtn.addEventListener('click', () => {
  if(isEqual) {
    screenTop.textContent = '';
    screenBottom.textContent = '';
  }
  if(!screenBottom.textContent.includes('.')){
    screenBottom.textContent += '.';
  }
  currentNum = parseFloat(screenBottom.textContent);
})

backSpcBtn.addEventListener('click', () => {
  if(screenBottom.textContent.length > 0) {
    screenBottom.textContent = screenBottom.textContent.substring(0, screenBottom.textContent.length - 1)
    currentNum = parseFloat(screenBottom.textContent);
    if(Number.isNaN(currentNum)){
      currentNum = 0;
      isOperator = false;
    }
  }
})

negativeBtn.addEventListener('click', () => {
  let negative = screenBottom.textContent;
  if(!negative.includes('-')) {
    screenBottom.textContent = negative.replace('', '-');
  } else {
    screenBottom.textContent = negative.replace('-', '');
  }
  currentNum = parseInt(screenBottom.textContent);
})

addBtn.addEventListener('click', () => {operate('addition', '+')})
subBtn.addEventListener('click', () => {operate('subtraction', '-')})
multiplyBtn.addEventListener('click', () => {operate('multiplication', '*')})
divideBtn.addEventListener('click', () => {operate('division', '÷')})
equalBtn.addEventListener('click', () => {equal(previousNum, globalSign, currentNum)})
