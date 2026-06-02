const resultSet = document.getElementById("result");

// printing function
export const printOnScreen = (msgType, msg) => {
  console.log("In print on screen", msgType, msg);

  const msgColorCoded = document.createElement("span");
  msgColorCoded.classList.add("color-log");
  msgColorCoded.innerHTML = `<b>[${msgType}]</b>` + " > ";

  const msgLine = document.createElement("span");
  msgLine.innerHTML = msg;

  const newLine = document.createElement("p");
  newLine.classList.add("textOnTerminal");
  newLine.append(msgColorCoded, msgLine);

  resultSet.appendChild(newLine);
};
