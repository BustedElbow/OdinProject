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
  } else if(globalOperator != ''){
    screenTop.textContent = `${numOne} ${sign} ${numTwo}`
    previousNum = evalaute(numOne, globalOperator, numTwo)
    screenBottom.textContent = `${previousNum}`;
    currentNum = 0;
  } else {
    screenBottom.textContent = currentNum;
  }

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
  if(isOperator) {
    globalSign = sign;
    let result = evalaute(previousNum, globalOperator, currentNum);
    globalOperator = operation;
    previousNum = result;
    screenTop.textContent = `${result}`;
    screenTop.textContent += ` ${sign} `;
    screenBottom.textContent = ''
    currentNum = 0;
  } 
 
  isOperator = false;
}

function buttonClick(value) {

  if(isEqual) {
    previousNum = 0;
    screenTop.textContent = '';
    screenBottom.textContent = '';
    screenBottom.textContent += value;
    currentNum = parseInt(screenBottom.textContent)
    isEqual = false;
  } else {
    isOperator = true;
    screenBottom.textContent += value;
    currentNum = parseInt(screenBottom.textContent);
  }

  }

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
})

//Buttons
let backSpcBtn = document.querySelector('#backspace');
let clearAllBtn = document.querySelector('#clearAllBtn');
let clearBtn = document.querySelector('#clearBtn')
let zeroBtn = document.querySelector('#zeroBtn');
let oneBtn = document.querySelector('#oneBtn');
let twoBtn = document.querySelector('#twoBtn');
let threeBtn = document.querySelector('#threeBtn');
let fourBtn = document.querySelector('#fourBtn');
let fiveBtn = document.querySelector('#fiveBtn');
let sixBtn = document.querySelector('#sixBtn');
let sevenBtn = document.querySelector('#sevenBtn');
let eightBtn = document.querySelector('#eightBtn');
let nineBtn = document.querySelector('#nineBtn');
//Operation Button
let negativeBtn = document.querySelector('#negativeBtn');
let addBtn = document.querySelector('#addBtn');
let subBtn = document.querySelector('#subBtn');
let multiplyBtn = document.querySelector('#multiplyBtn');
let divideBtn = document.querySelector('#divideBtn');
let equalBtn = document.querySelector('#equalBtn');

clearAllBtn.addEventListener('click', () => {
  screenTop.textContent = '';
  screenBottom.textContent = '';
  previousNum = 0;
  currentNum = 0;
  globalSign = '';
  operator = '';
  isOperator = false;
})

clearBtn.addEventListener('click', () => {
  screenBottom.textContent = '';
  currentNum = 0;
})

backSpcBtn.addEventListener('click', () => {
  if(screenBottom.textContent.length > 0) {
    screenBottom.textContent = screenBottom.textContent.substring(0, screenBottom.textContent.length - 1)
    currentNum = parseInt(screenBottom.textContent);
    if(Number.isNaN(currentNum)){
      currentNum = 0;
      isOperator = false;
    }
  }
})

let isNegative = false;

negativeBtn.addEventListener('click', () => {
  isNegative = !isNegative;

  if(isNegative) {
    const negative = '-';
    screenBottom.textContent = negative.concat('', screenBottom.textContent);
  } else {
    const positive = '';
    screenBottom.textContent = positive.concat('', screenBottom.textContent);
  }
  // currentNum = parseInt(screenBottom.textContent);
})

oneBtn.addEventListener('click', () => {buttonClick(1)})
twoBtn.addEventListener('click', () => {buttonClick(2)})
threeBtn.addEventListener('click', () => {buttonClick(3)})
fourBtn.addEventListener('click', () => {buttonClick(4)})
fiveBtn.addEventListener('click', () => {buttonClick(5)})
sixBtn.addEventListener('click', () => {buttonClick(6)})
sevenBtn.addEventListener('click', () => {buttonClick(7)})
eightBtn.addEventListener('click', () => {buttonClick(8)})
nineBtn.addEventListener('click', () => {buttonClick(9)})
zeroBtn.addEventListener('click', () => {buttonClick(0)})

addBtn.addEventListener('click', () => {operate('addition', '+')})
subBtn.addEventListener('click', () => {operate('subtraction', '-')})
multiplyBtn.addEventListener('click', () => {operate('multiplication', '*')})
divideBtn.addEventListener('click', () => {operate('division', '÷')})
equalBtn.addEventListener('click', () => {equal(previousNum, globalSign, currentNum)})
