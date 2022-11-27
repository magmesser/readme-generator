// Function to render license badge
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case "ISC":
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
      break;
    case "MPL":
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
      break;
    case "GPL":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case "AGPL":
      return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
      break;
    case "None":
      return "";
      break;
  }
}

// Function to render license link
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://choosealicense.com/licenses/mit/";
      break;
    case "ISC":
      return "https://choosealicense.com/licenses/isc/";
      break;
    case "MPL":
      return "https://choosealicense.com/licenses/mpl-2.0/";
      break;
    case "GPL":
      return "https://choosealicense.com/licenses/gpl-3.0/";
      break;
    case "AGPL":
      return "https://choosealicense.com/licenses/agpl-3.0/";
      break;
    case "None":
      return "";
      break;
  }
}

// Function to render license section of readme.md file
function renderLicenseSection(license) {
  switch (license) {
    case "MIT":
    case "ISC":
    case "MPL":
    case "GPL":
    case "AGPL":
      return `This application is covered under the ${license} license.  <br> 
      Find out more here: ${renderLicenseLink(license)} <br>
      ${renderLicenseBadge(license)}`;
      break;
    case "None":
      return `This application is not covered under a license.`;
      break;
  }
}

// Function to generate readme.md file
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Badges
  ${renderLicenseBadge(data.license)}

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
  🚧 [Contributor Covenant](https://www.contributor-covenant.org/) <br> 
  ${data.contribution}

  ## Tests
  📝 ${data.tests}

  ## License
  🔑 ${renderLicenseSection(data.license)}

  ## Questions
  ❓ Have questions? Please contact ${data.author} at: <br>
  * ${data.github}'s GitHub: https://github.com/${data.github} <br> 
  * ${data.author}'s Email: ${data.email} <br>
  
  ❗ Repository Link: https://github.com/${data.github}/${data.repo}
`;
}

// Exporting generateMarkdown to index.js file
module.exports = generateMarkdown;
