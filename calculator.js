const result = document.getElementById("result");
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      currentInput = "";
      result.textContent = "";
    }
    else if (value == "X") {
      currentInput = currentInput.slice(0, -1);
      result.textContent = currentInput;
    }
    else if (value === "=") {
        try {
          currentInput = eval(currentInput).toString();
          result.textContent = currentInput;
        } catch {
          result.textContent = "Error";
          currentInput = "";
        }
    }
    else {
      currentInput += value;
      result.textContent = currentInput;
    }
  });
});