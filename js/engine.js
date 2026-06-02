//imports
import { printOnScreen } from "./renderer.js";
// Takes input : also the trigger of actions

const inputCmd = document.getElementById("input");
const resultSet = document.getElementById("result");

inputCmd.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    console.log("cmdLine : " + inputCmd.value);
    const cmdLine = inputCmd.value;
    inputCmd.value = "";
    execute(cmdLine);
  }
});
//execution
const execute = (cmdLine) => {
  const parsedToken = parseCmd(cmdLine);
  console.log(parsedToken);
  handleCommands(parsedToken);
};

//parse input:
const parseCmd = (cmdLine) => {
  const token = cmdLine.split(":");
  const command = token[0];
  const outstream = token[1];

  return { command, outstream };
};

//handle parsed commands
const handleCommands = (parsedToken) => {
  const { command, outstream } = parsedToken;
  console.log(command, outstream);
  if (command == undefined) {
    printOnScreen(null, outstream);
  } else if (command == "log") {
    printOnScreen(command, outstream);
  }
};
