
let question = prompt('At what temperature on the Celsius scale does water freeze?');
let response = '';

if (question == '0') {
  response = ('Correct!');
}
else {
  response = ('Sorry, that\'s not the correct answer.');
}

let result = document.getElementById('result');
result.innerHTML = response;

console.log(result);
