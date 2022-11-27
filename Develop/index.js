// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'author',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your GitHub account username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please describe how to use the application:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please describe the contribution guidelines:',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Please provide installation instructions:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please provide test instructions:',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Please select a License:',
        name: 'license',
        choices: ['MIT', 'ISC', 'MPL', 'GPL', 'AGPL']
    }
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    // let fileName = `${data.name.toLowerCase().split(' ').join('')}.json`;

    inquirer
    .prompt(questions)
    // .then(generateMarkdown(data))
    .then((data) =>
{
    fs.writeFile("READMEresults.md", generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log("README.md file has been created!"))
});

// fs.writeFile("READMEresults.md", generateMarkdown(data), JSON.stringify(data, null, '\t'), (err) =>
//         err ? console.error(err) : console.log("README.md file has been created!"))
    
}

// TODO: Create a function to initialize app
function init() {
    writeToFile();
};

// Function call to initialize app
init();