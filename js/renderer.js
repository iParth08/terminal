const cmdInput = document.getElementById("input");
const result = document.getElementById("result");
const character = document.getElementById("character");

cmdInput.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    const inputValue = cmdInput.value;
    cmdInput.value = "";
    printOnScreen(inputValue);
  }
});

const printOnScreen = (inputValue) => {
  const line = document.createElement("p");
  line.innerHTML = "[<b>CMD</b>] : " + inputValue;
  result.appendChild(line);
};
