
const Manager = require('../utils/Manager')

// test that we can actually create an Employee object

test('creates Manager object', () => {
   const manager = new Manager('Tanya', 1, 'tanyamilburn@hotmail.com', 25) 
    
    expect(manager.office).toEqual(expect.any(Number));

})

// gets role from getRole() 
test('returns manager as employee role', () => {
    const manager = new Manager('Tanya', 1, 'tanyamilburn@hotmail.com', 25); 

    expect(manager.getRole()).toEqual("Manager");
});