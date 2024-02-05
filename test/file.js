function add(number) {
  return number + 7;
}

function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

function capitalize(string) {
  if (typeof string == 'string'){
    let toLower = string.toLowerCase();
    return toLower.charAt(0).toUpperCase() + toLower.slice(1);
  } else {
    return "Not a String";
  }
}

function lastLetter(string) {
  return string.charAt(string.length - 1);
}

console.log(capitalize("BRUH"))