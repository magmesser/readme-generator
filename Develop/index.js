// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    // Title: title of the project
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    // Description: description of the project 
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description',
    },
    // Table of Contents: table of contents of ReadMe with links to sections of ReadMe file
    {
        type: 'input',
        message: 'How to use it?',
        name: 'usage',
    },
    // Installation: installation instructions  
    {
        type: 'input',
        message: 'Your Name',
        name: 'author',
    },
    {
        type: 'input',
        message: 'Your Email',
        name: 'email',
    },
    // Usage: usage information 
    {
        type: 'input',
        message: 'GitHub Account',
        name: 'github',
    },
    // License: license information 
    {
        type: 'list',
        message: 'License',
        name: 'license',
        choices: ['MIT', 'ISC', 'MPL', 'GPL', 'AGPL']
    },
    // Contributing: contribution guidelines
    {
        type: ,
        message: ,
        name: ,
    },
    // Tests: test instructions 
    {
        type: ,
        message: ,
        name: ,
    },
    // Questions: GitHub username and profile link; email address with instructions on how to reach me
    {
        type: ,
        message: ,
        name: ,
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
