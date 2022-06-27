const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./generateHTML.js')

// Write const questions to run through
const questions = [
    {
        type: 'input',
        name: 'managerName',
        message: "Manager name?",
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is his/her/their email address?',
    }, 
    {
        type: 'input',
        name: 'office',
        message: 'What is his/her/their office number?',
    },
    {
        type: 'input',
        name: 'managerID',
        message: 'What is his/her/their id number?',
    },
    {
        type: 'input',
        name: 'engName',
        message: 'Engineer name?',
    },
    {
        type: 'input',
        name: 'engEmail',
        message: 'What is his/her/their email address?',
    }, 
    {   
        type: 'input',
        name: 'github',
        message: 'What is his/her/their github username?',
    },
    {
        type: 'input',
        name: 'engID',
        message: 'What is his/her/their id number?',
    },
    {
        type: 'input',
        name: 'intName',
        message: 'Intern name?',
    },
    {
        type: 'input',
        name: 'intEmail',
        message: 'Intern email?',
    }, 
    {   
        type: 'input',
        name: 'school',
        message: 'What school did they attend?',
    },
    {
        type: 'input',
        name: 'intID',
        message: 'Intern id number?',
    },]

// write to file
const init = () => {
   inquirer.prompt(questions)
      // Use writeFileSync method to use promises instead of a callback function
      .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
      .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
  };
  
  init();
