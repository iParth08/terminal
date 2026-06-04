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

export const printQuestWindow = (questsArrObj) => {
  console.log("Into printQuestWindow");
  console.log(questsArrObj);
  resultSet.innerHTML +=
    "<p>===================== Quest Window ======================</p>";
  questsArrObj.forEach((questObj, index) => {
    console.log("index: ", index);
    resultSet.innerHTML += `<p> ~~~~~~~~~~~~~~~~~~~~ >>> Quest - ${index} <<<~~~~~~~~~~~~~~~~~~~~ </p>`;
    for (const [key, value] of Object.entries(questObj)) {
      console.log(`${key}: ${value}`);

      const newLine = document.createElement("p");
      newLine.classList.add("textOnTerminal");
      newLine.innerHTML = `${key} : ${value}`;
      resultSet.appendChild(newLine);
    }
  });

  resultSet.innerHTML +=
    "<p>----------------------------------------------------------------------------------------------</p>";
};

export const printQuest = (questsArrObj, index) => {
  console.log("Into printQuest");
  const quest = questsArrObj[index];
  if (quest == null || quest == undefined) {
    printOnScreen("ERROR", "No quest found for that index");
    return;
  }

  resultSet.innerHTML += `<p> ~~~~~~~~~~~~~~~~~~~~ >>> Quest - ${index} <<<~~~~~~~~~~~~~~~~~~~~ </p>`;

  for (const [key, value] of Object.entries(quest)) {
    console.log(`${key}: ${value}`);

    const newLine = document.createElement("p");
    newLine.classList.add("textOnTerminal");
    newLine.innerHTML = `${key} : ${value}`;
    resultSet.appendChild(newLine);
  }

  resultSet.innerHTML +=
    "<p>----------------------------------------------------------------------------------------------</p>";
};
