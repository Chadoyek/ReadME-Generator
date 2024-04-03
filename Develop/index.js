// TODO: Include packages needed for this application
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
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
    

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
