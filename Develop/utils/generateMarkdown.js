function generateMarkdown(answers) {

const badge = renderLicenseBadge(answers.license)

const generateREADME = (`

# < ${answers.title} > ![License](${badge}) \n

## Description
${answers.description}

## Table of Contents
\n- [Installation](#installation)
\n- [Usage](#usage)
\n- [License](#license)
\n- [Credits](#credits)
\n- [Tests](#tests)
\n- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This application is covered under the ${answers.license}.

## Credits
${answers.credits}

## Tests
${answers.tests}

## Questions
Please don't hesitate to reach out to me if you have any questions, you can do so by contacting me through my GitHub profile [${answers.github}](https://github.com/${answers.github}) or by sending an email to ${answers.email}.


`);
return generateREADME;
}

function renderLicenseBadge(license) {
  if (license == 'None') {
      return '';
  }
  
  let licenseBadge = license;

  switch (license) {
      case "Apache License 2.0":
          licenseBadge = { message: "Apache-2.0", color: "brightgreen" };
          break;
      case "GNU General Public License v3.0":
          licenseBadge = { message: "GNU-GPLv3.0", color: "green" };
          break; 
      case "MIT License":
          licenseBadge = { message: "MIT", color: "yellowgreen" };
          break; 
      case "BSD 2-Clause Simplified License":
          licenseBadge = { message: "BDS-2Clause-Simplified", color: "yellow" };
          break;
      case "BSD 3-Clause New or Revised License":
          licenseBadge = { message: "BSD-3ClauseNew/Revised", color: "orange" };
          break; 
      case "Boost Software License 1.0":
          licenseBadge = { message: "Boost-Software-1.0", color: "red" };
          break; 
      case "Creative Commons Zero v1.0 Universal":
          licenseBadge = { message: "Creative-Commons-Zerov1.0-Universal", color: "blue" };
          break;
      case "Eclipse Public License 2.0":
          licenseBadge = { message: "Eclipse-Public-2.0", color: "lightgrey" };
          break; 
      case "GNU Affero General Public License v3.0":
          licenseBadge = { message: "GNU-Affero-GPLv3.0", color: "success" };
          break; 
      case "GNU General Public License v2.0":
          licenseBadge = { message: "GNU-GPLv2.0", color: "important" };
          break;
      case "GNU Lesser General Public License v2.1":
          licenseBadge = { message: "GNU-Lesser-GPLv2.1", color: "9cf" };
          break; 
      case "Mozilla Public License 2.0":
          licenseBadge = { message: "Mozilla-Public-2.0", color: "blueviolet" };
          break; 
      case "The Unlicense":
          licenseBadge = { message: "The-Unilicense", color: "ff69b4" };
          break; 
  }
  return `https://img.shields.io/static/v1?label=license&message=${licenseBadge.message}&color=${licenseBadge.color}`;
} 

module.exports = generateMarkdown;
