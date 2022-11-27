// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  ['MIT' `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`, 
  'ISC' `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`, 
  'MPL' `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`, 
  'GPL' `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`, 
  'AGPL' `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)` ]
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  ['MIT', 
  'ISC', 
  'MPL', 
  'GPL', 
  'AGPL']
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


/* README Contents -- 
Title: title of the project 
Description: description of the project 
Table of Contents: table of contents of ReadMe with links to sections of ReadMe file
Installation: installation instructions  
Usage: usage information 
License: license information 
Contributing: contribution guidelines
Tests: test instructions 
Questions: GitHub username and profile link; email address with instructions on how to reach me */

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  🔮 ${data.description} 

  ## 📚 Table of Contents
  * [🔧 Installation](#installation)
  * [🎢 Usage](#usage)
  * [🚧 Contribution](#contribution)
  * [📝 Tests](#tests)
  * [🔑 License](#license)
  * [❓ Questions](#questions)
  
  ## Installation
  🔧 ${data.installation}

  ## Usage 
  🎢 ${data.usage}

  ## Contribution 
  🚧 ${data.contribution}

  ## Tests
  📝 ${data.tests}

  ## License
  🔑 ${data.license}

  ## Questions
  ❓ Have questions? Please contact ${data.author} at: <br>
  ${data.github}'s GitHub: https://github.com/${data.github} <br> 
  or ${data.author}'s Email: ${data.email}.
`;
}

module.exports = generateMarkdown;