const { TestWatcher } = require('jest')
const Employee = require('../utils/Employee')

// test that we can actually create an Employee object

TestWatcher('creates Employee object', () => {
   const employee = new Employee('Tanya', 1, 'tanyamilburn@hotmail.com'); 
    
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})
// get name test
test('gets employee name', () => {
    const employee = new Employee('Tanya', 1, 'tanyamilburn@hotmail.com'); 

    expect(employee.getName()).toEqual(expect.any(String));
});
 // get id test
test('gets employee ID', () => {
    const employee = new Employee('Tanya', 1, 'tanyamilburn@hotmail.com'); 

    expect(employee.getId()).toEqual(expect.any(Number));
});
// get email test
test('gets employee email', () => {
    const employee = new Employee('Tanya', 1, 'tanyamilburn@hotmail.com'); 

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});
// get role test
test('gets role of employee', () => {
    const employee = new Employee('Tanya', 1, 'tanyamilburn@hotmail.com'); 

    expect(employee.getRole()).toEqual("Employee");
}); 

