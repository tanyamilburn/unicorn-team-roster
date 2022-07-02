const Employee = require('./utils/employee.js');
class Engineer extends Employee{
    constructor(github) {
        this.github = github}
    getRole() {
        return "Engineer";
      }
    getGithub() {
        return github
      }
  }
  module.exports = Engineer;