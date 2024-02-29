
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

function evaluate(firstNum,Operator,secondNum) {
  //evalaute line

}

let firstNum = null;
let operator = null;
let secondNum = null;

let screenBottom = document.querySelector('.screen-bottom');
let screenTop = document.querySelector('.screen-top');

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
})
clearBtn.addEventListener('click', () => {
  screenBottom.textContent = '';
})
zeroBtn.addEventListener('click', () => {
  screenBottom.textContent += 0;
})
oneBtn.addEventListener('click', () => {
  screenBottom.textContent += 1;
})
twoBtn.addEventListener('click', () => {
  screenBottom.textContent += 2;
})
threeBtn.addEventListener('click', () => {
  screenBottom.textContent += 3;
})
fourBtn.addEventListener('click', () => {
  screenBottom.textContent += 4;
})
fiveBtn.addEventListener('click', () => {
  screenBottom.textContent += 5;
})
sixBtn.addEventListener('click', () => {
  screenBottom.textContent += 6;
})
sevenBtn.addEventListener('click', () => {
  screenBottom.textContent += 7;
})
eightBtn.addEventListener('click', () => {
  screenBottom.textContent += 8;
})
nineBtn.addEventListener('click', () => {
  screenBottom.textContent += 9;
})
addBtn.addEventListener('click', () => {
  screenTop.textContent += screenBottom.textContent;
  screenTop.textContent += ' + ';
  screenBottom.textContent = '';
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
  screenTop.textContent += screenBottom.textContent;
  screenBottom.textContent = 'placeholderAnswer'
  console.log(screenTop.textContent)
})

