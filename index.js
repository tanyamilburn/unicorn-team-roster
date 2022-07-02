const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./generateHTML.js')
const Manager = require('./utils/manager.js')
// const Engineer = require('./utils/engineer.js')
// const Intern = require('./utils/intern.js')

const teamArray =[]
// Write const questions to run through
const managerQs = [
    {
        type: 'input',
        name: 'name',
        message: "Manager name?",
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is his/her/their email address?',
    }, 
    {
        type: 'input',
        name: 'office',
        message: 'What is his/her/their office number?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is his/her/their id number?',
    },
   
]
const employeeQs =[
    {
        type: 'list',
        name: 'role',
        message: "Please choose your employee's position",
        choices: ['Engineer', 'Intern']
    },
    {
        type: 'input',
        name: 'name',
        message: 'Engineer name?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is his/her/their email address?',
    }, 
    {   
        type: 'input',
        name: 'github',
        message: 'What is his/her/their github username?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is his/her/their id number?',
    },
    {   
        type: 'input',
        name: 'school',
        message: 'What school did they attend?',
    },
    {
        type: 'confirm',
        name: 'newEmployee',
        message: 'Do you want to add another employee?',
    },
]
     

// write to file
const getManagerInfo = () => {
// let teamArray = []
// function getManager(){
    //    make manager/get object info
   return inquirer.prompt(managerQs)
   .then(managerInfo => {
    const  { name, id, email, office } = managerInfo; 
    const manager = new Manager (name, id, email, office);

    teamArray.push(manager); 
    console.log(manager); 
})
    // new function for adding employee
const addEmployee = ()=> {
    return inquirer.prompt(employeeQs)
    .then(employeeInfo => {
        const  { name, id, email, office } = employeeInfo; 
        const employee = new Employee (name, id, email,)

    })
}
    

  };
  
  getManagerInfo();
// use answers to construct 
// const write = async () => {
//     await fs.appendFile("file.txt", 'abc')
//   }
//   write()