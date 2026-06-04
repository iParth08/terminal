//imports
import {
  clearScreen,
  printOnScreen,
  printPlayerInfo,
  printQuestWindow,
  printStatusWindow,
  printQuest,
} from "./renderer.js";

import { player, player_status } from "./data/player.js";
import { tasks } from "./data/quests.js";
import { splitFirst } from "./utils.js";

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
  const [command, outstream] = splitFirst(cmdLine, " ");
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
  } else if (command == "status") {
    clearScreen();
    printPlayerInfo(player);
    printStatusWindow(player_status);
  } else if (command == "quests") {
    clearScreen();
    printQuestWindow(tasks);
  } else if (command == "add-quest") {
    printOnScreen(command, "Adding new quest in progress");
    addQuest(outstream);
  } else if (command == "choose-task") {
    printOnScreen(command, "Quest has been marked activated");
    pickTask(outstream);
    printQuest(tasks, outstream);
  } else if (command == "mark-done") {
    printOnScreen(command, "Quest has been marked done");
    markDone(outstream);
    printQuest(tasks, outstream);
  }
};

//add-quest helper
const addQuest = (questData) => {
  const tokens = questData.split(";");
  const quest = {};
  tokens.forEach((token) => {
    const entry = token.split(":");
    const key = entry[0].trim(),
      value = entry[1].trim();

    quest[key] = value;
  });

  tasks[tasks.length] = quest;
};

const pickTask = (index) => {
  const picked = tasks[index];
  picked.status = "Active";
};

const markDone = (index) => {
  const picked = tasks[index];
  if (picked.status == "Active") {
    picked.isDone = true;

    addExperience(picked.expReward);
  }
};

const addExperience = (exp) => {
  player.xp = parseInt(player.xp) + parseInt(exp);
  printOnScreen("LOG", `${exp} experience point has been added.`);
};
