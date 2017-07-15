// We want calulation to have [number, operation, number]
let calculation = [];
let currentNumber = "";

let numbuttons = document.querySelectorAll('.number');
// querySelectorAll returns an array

for (let i = 0; i < numbuttons.length; i++) {
  numbuttons[i].addEventListener("click", function() {
    // when each number button is clicked ...

    currentNumber += numbuttons[i].innerHTML;
    // Add the number that was pressed to currentNumber

    let mem = document.querySelector('#inputField');
    mem.innerHTML += `${numbuttons[i].innerHTML}`;
    // that button is 'stored' in the text box

  });
}


let opbuttons = document.querySelectorAll('.operator');
// querySelectorAll returns an array

for (let i = 0; i < opbuttons.length; i++) {
  opbuttons[i].addEventListener("click", function() {
    // when each operator button is clicked ...

    calculation.push(Number(currentNumber));
    // Push currentNumber to calculation array (as a number, not a string)
    currentNumber = "";
    // and reset currentNumber

    calculation.push(opbuttons[i].innerHTML);
    // Push operation to calculation array

    let mem = document.querySelector('#inputField');
    mem.innerHTML += `${opbuttons[i].innerHTML}`;
    // that button is 'stored' in the text box

  });
}

let equal = document.querySelector('#answer');
// querySelector returns just the single button '='

equal.addEventListener("click", function() {

  alert(`You pressed: ${equal.innerHTML}`);

  calculation.push(Number(currentNumber));
  // Push currentNumber to calculation array

  let param1 = calculation[0];
  let operator = calculation[1];
  let param2 = calculation[2];
  // Get values and operations in calculation array

  let answer = 0;
  // Create a space to store the result in order to push to indexField

  if (operator === '+'){

  } else if (operator === '-'){

  } else if (operator === '*'){

  } else if (operator === '/'){
    
  }
  // TODO: Execute operation on the two numbers
  // TODO: Display answer

  let mem = document.querySelector('#inputField');
  mem.innerHTML += `${equal.innerHTML}`;
});
