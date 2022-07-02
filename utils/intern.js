
const Employee = require('./utils/employee.js');
class Intern extends Employee{
    constructor(school) {
        this.school = school}
    getRole() {
        return "Intern";
      }
    getSchool() {
        return school
      }
  }
  module.exports = Intern;