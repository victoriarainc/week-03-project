let numbuttons = document.querySelectorAll('.number');
// querySelectorAll returns an array
for (let i = 0; i < numbuttons.length; i++) {
  numbuttons[i].addEventListener("click", function() {
    let mem = document.querySelector('#inputField');
    mem.innerHTML += `${numbuttons[i].innerHTML}`;

  });
}

let opbuttons = document.querySelectorAll('.operator');

for (let i = 0; i < opbuttons.length; i++) {
  opbuttons[i].addEventListener("click", function() {
    alert(`You pressed: ${opbuttons[i].innerHTML}`);

  });
}

let equal = document.querySelector('#answer');
equal.addEventListener("click", function() {
  alert(`You pressed: ${equal.innerHTML}`);
});
