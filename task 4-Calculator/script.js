let screen = document.getElementById("screen");
let expression = "";

function addToScreen(value) {
  expression += value;
  screen.value = expression;
}

function clearScreen() {
  expression = "";
  screen.value = "";
}

function deleteChar() {
  expression = expression.slice(0, -1);
  screen.value = expression;
}

function calculate() {
  try {
    let result = eval(expression);
    screen.value = result;
    expression = result;
  } catch (error) {
    screen.value = "Error";
    expression = "";
  }
}
