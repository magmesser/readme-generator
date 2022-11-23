// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

/* GitHub Contents -- 
Title: title of the project 
Description: description of the project 
Table of Contents: table of contents of ReadMe with links to sections of ReadMe file
Installation: installation instructions  
Usage: usage information 
License: license information 
Contributing: contribution guidelines
Tests: test instructions 
Questions: GitHub username and profile link; email address with instructions on how to reach me */

function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description} 

  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## Contribution 
  ${data.contribution}

  ## Tests
  ${data.testing}

  ## License
  ${data.license}

  ## Questions
  github.com/${data.github}
  ${data.email}
`;
}

module.exports = generateMarkdown;