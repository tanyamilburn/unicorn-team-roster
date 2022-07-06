const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./generateHTML.js')
const Manager = require('./utils/manager.js')
const Engineer = require('./utils/engineer.js')
const Intern = require('./utils/intern.js')
const Employee = require('./utils/employee.js')

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
        message: 'Employee name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is his/her/their id number?',
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
        when: (input) => input.role === "Engineer",
    },
    {   
        type: 'input',
        name: 'school',
        message: 'What school did they attend?',
        when: (input) => input.role === "Intern",
    },
    {
        type: 'confirm',
        name: 'addNewEmployee',
        message: 'Do you want to add another employee?',
        default: false,
    },
]
     


const getManager = () => {

// function getManager(){
   return inquirer.prompt(managerQs)
   .then(managerInfo => {
    const  { name, id, email, office } = managerInfo; 
    const manager = new Manager (name, id, email, office);

    teamArray.push(manager); 
    console.log(manager); 
})
    

};


    // Add employee function
const addEmployee = ()=> {
    return inquirer.prompt(employeeQs)
    .then(employeeInfo => {
        // data for employee types 

        let { name, id, email, role, github, school, addNewEmployee } = employeeInfo; 
        let employee; 
        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        teamArray.push(employee); 

        if (addNewEmployee) {
            return addEmployee(teamArray); 
        } else {
            return teamArray;
        }
    })
   
}
  // write to file
  // function to generate HTML page file using file system 
const writeFile = data => {
    fs.writeFile('./index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the profile has been created 
        } else {
            console.log("Your team roster is created!")
        }
    })
}; 
  
  getManager()
  .then(addEmployee)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(HTMLpage => {
    return writeFile(HTMLpage);
  })
  .catch(err => {
 console.log(err);
  });
