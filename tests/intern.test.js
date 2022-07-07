const { TestWatcher } = require('jest')
const Intern = require('../utils/Intern')

// test that we can actually create an Employee object

TestWatcher('creates Intern object', () => {
   const intern = new Intern('Tanya', 1, 'tanyamilburn@hotmail.com') 
    
    expect(intern.school).toEqual(expect.any(String));

})
test('gets intern school', () => {
    const intern = new Intern('Tanya', 1, 'tanyamilburn@hotmail.com'); 

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role from getRole() 
test('returns intern as employee role', () => {
    const intern = new Intern('Tanya', 1, 'tanyamilburn@hotmail.com'); 

    expect(intern.getRole()).toEqual("Intern");
});