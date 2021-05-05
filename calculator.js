const buttonsContainer = document.querySelector(".base-container");

function performAction(value) {
  const output = document.querySelector(".display");
  if (value === "←") {
    removeCharacter(output);
  } else if (value === "C") {
    clearScreen(output);
  } else if (value === "=") {
    // todo: do something here
  } else if (value === "+") {
    const number = parseInt(output.innerText);
    output.innerText = 0;
  } else if (value === "-") {
    output.innerText = 0;
  } else if (value === "×") {
    output.innerText = 0;
  } else if (value === "÷") {
    output.innerText = 0;
  } else {
    addInput(value, output);
  }
}

buttonsContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    performAction(e.target.innerText);
  }
  e.stopPropagation();
});

function clearScreen(output) {
  output.innerText = "";
}

function removeCharacter(output) {
  let value = output.innerText;
  if (value === "") return;
  else {
    output.innerText = value.substring(0, value.length - 1);
  }
}

function addInput(value, output) {
  output.innerText += value;
}
