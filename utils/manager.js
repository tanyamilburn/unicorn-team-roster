
const Employee = require('./utils/employee.js');
class Manager extends Employee {
    constructor(officeNum) {
        this.officeNum = officeNum}
   getRole() {
       return "Manager";
     }

 }

 module.exports = Manager;