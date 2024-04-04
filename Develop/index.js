// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
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
        message:"Enter your collaborators",
        name: "credits",
        },
        {
        type:"input",
        message:"How would you test this application?",
        name: "tests",
        },
        {
        type:"list",
        choices: ['(N/A)', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause Simplified License', 'BSD 3-Clause New or Revised License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
        message:"Which license does your project use?",
        name:"license"
        },
        {
        type:"input",
        message:"What is your Github username?",
        name: "github",
        },
        {
        type:"input",
        message:"What is your email address?",
        name: "email",
        },
];


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
    
        fs.writeFile('README.md', generateMarkdown(answers), (err) =>
            err ? console.log(err) : console.log('Successfully generated README.md')
        );


    
    
    })
}

// Function call to initialize app
init();
