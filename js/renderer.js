const resultSet = document.getElementById("result");

export const clearScreen = () => {
  resultSet.innerHTML = "";
};
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

export const printPlayerInfo = (playerInfoObj) => {
  console.log("Into printPlayerInfo");
  resultSet.innerHTML +=
    "<p>====================== Player Info =========================</p>";
  for (const [key, value] of Object.entries(playerInfoObj)) {
    console.log(`${key}: ${value}`);
    const newLine = document.createElement("p");
    newLine.classList.add("textOnTerminal");
    newLine.innerHTML = `${key} : ${value}`;
    resultSet.appendChild(newLine);
  }
  resultSet.innerHTML +=
    "<p>---------------------------------------------------------------------------------------------</p>";
};

export const printStatusWindow = (statusWinObj) => {
  console.log("Into printStatusWindow");
  resultSet.innerHTML +=
    "<p>===================== Status Window ======================</p>";
  for (const [key, value] of Object.entries(statusWinObj)) {
    console.log(`${key}: ${value}`);
    const newLine = document.createElement("p");
    newLine.classList.add("textOnTerminal");
    newLine.innerHTML = `${key} : ${value}`;
    resultSet.appendChild(newLine);
  }
  resultSet.innerHTML +=
    "<p>----------------------------------------------------------------------------------------------</p>";
};
