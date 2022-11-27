// Packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");

// Array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your name?",
    name: "author",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your GitHub account username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "What is the description of your project?",
    name: "description",
  },
  {
    type: "input",
    message: "Please describe how to use the application:",
    name: "usage",
  },
  {
    type: "input",
    message: "Please describe the contribution guidelines:",
    name: "contribution",
  },
  {
    type: "input",
    message: "Please provide installation instructions:",
    name: "installation",
  },
  {
    type: "input",
    message: "Please provide test instructions:",
    name: "tests",
  },
  {
    type: "list",
    message: "Please select a License:",
    name: "license",
    choices: ["MIT", "ISC", "MPL", "GPL", "AGPL", "None"],
  },
];

// Function to create and write to file
function writeToFile(fileName, data) {
  inquirer.prompt(questions).then((data) => {
    fs.writeFile("READMEresults.md", generateMarkdown(data), (err) =>
      err
        ? console.error(err)
        : console.log("READMEresults.md file has been created!")
    );
  });
}

// Function to initialize app
function init() {
  writeToFile();
}

// Function call to initialize app
init();