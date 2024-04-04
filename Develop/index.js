// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user 
inquirer.prompt([
    {
        type:"input",
        message:"Enter your README title: ",
        name: "title",
        },
        {
        type:"input",
        message:"What is the description?",
        name: "description",
        },
        {
        type:"input",
        message:"What is the installation instructions?",
        name: "installation",
        },
        {
        type:"input",
        message:"How will we use this project?",
        name: "usage",
        },
        {
        type:"input",
        message:"Enter the contribution guidelines",
        name: "contributing",
        },
        {
        type:"input",
        message:"Enter the test instructions",
        name: "tests",
        },
        {
        type:"list",
        choices: ["MIT", "GPL", "MPL"],
        message:"Which license does your project use?",
        name:"license"
        },
        {
        type:"input",
        message:"What is your github username?",
        name: "github",
        },
        {
        type:"input",
        message:"What is your email address?",
        name: "email",
        },
])
.then((data) => {
console.log(data);

const readMe = `
    
# ${data.title}



## Description
${data.description}
## Installation
${data.installation}
## Usage
 ${data.usage}
## Contributing 
${data.contributing}
 ## Tests 
${data.tests}
## License
${data.license} 
    
## Questions
    
For questions contact me at : ${data.github} or ${data.email} 
    
    `
    console.log(readMe);

    fs.writeFile('generated_README.md', readMe,  function(err) {
        if (err) {
          console.error('Error generating file:', err);
        } else {
          console.log('File generated successfully!');
        }
      });
});




// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
