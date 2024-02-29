
function add(numOne,numTwo) {
  //add
  return numOne + numTwo
}

function subtract(numOne,numTwo) {
  //subtract
  return numOne - numTwo
}

function multiply(numOne,numTwo) {
  //multiply
  return numOne * numTwo
}

function divide(numOne,numTwo) {
  //divide
  return numOne / numTwo
}

function operate(firstNum,Operator,secondNum) {
  //evalaute line
  let result = 0;

  switch(Operator) {
    case 'addition':
      result = add(firstNum, secondNum);
      break;
  }

  return result;
}

function buttonClick(value) {
  screenBottom.textContent += value;
  currentNum = parseInt(screenBottom.textContent);
}

let previousNum = 0;
let currentNum = 0;
let operator = '';

let screenBottom = document.querySelector('.screen-bottom');
let screenTop = document.querySelector('.screen-top');
let testBtn = document.querySelector('#test')

testBtn.addEventListener('click', () => {
  console.log(`Current Number: ${currentNum}`);
  console.log(`Previous Number: ${previousNum}`);
  console.log(`Operator: ${operator}`);
})
//Buttons
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
let addBtn = document.querySelector('#addBtn');
let subBtn = document.querySelector('#subBtn');
let multiplyBtn = document.querySelector('#multiplyBtn');
let divideBtn = document.querySelector('#divideBtn');
let equalBtn = document.querySelector('#equalBtn');

clearAllBtn.addEventListener('click', () => {
  screenTop.textContent = '';
  previousNum = 0;
  currentNum = 0;
  operator = '';
})
clearBtn.addEventListener('click', () => {
  screenBottom.textContent = '';
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


addBtn.addEventListener('click', () => {
  operator = 'addition';
  console.log(operate(previousNum, operator, currentNum));
  previousNum = currentNum;
  screenTop.textContent += screenBottom.textContent;
  screenTop.textContent += ' + ';
  screenBottom.textContent = '';
  currentNum = 0;
})


subBtn.addEventListener('click', () => {
  screenTop.textContent += screenBottom.textContent;
  screenTop.textContent += ' - ';
  screenBottom.textContent = '';
})
multiplyBtn.addEventListener('click', () => {
  screenTop.textContent += screenBottom.textContent;
  screenTop.textContent += ' * ';
  screenBottom.textContent = '';
})
divideBtn.addEventListener('click', () => {
  screenTop.textContent += screenBottom.textContent;
  screenTop.textContent += ' ÷ ';
  screenBottom.textContent = '';
})
equalBtn.addEventListener('click', () => {
  operate(previousNum, operator, currentNum);
  screenTop.textContent += screenBottom.textContent;
  screenBottom.textContent =  operate(previousNum, operator, currentNum);
  console.log(screenTop.textContent)
})

console.log(add(2,3))