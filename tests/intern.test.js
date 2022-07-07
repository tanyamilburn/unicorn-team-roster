
const Intern = require('../utils/Intern')

// test that we can actually create an Employee object

test('creates Intern object', () => {
   const intern = new Intern('Tanya', 1, 'tanyamilburn@hotmail.com', "University of Utah") 
    
    expect(intern.school).toEqual(expect.any(String));

})
test('gets intern school', () => {
    const intern = new Intern('Tanya', 1, 'tanyamilburn@hotmail.com', "University of Utah"); 

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role from getRole() 
test('returns intern as employee role', () => {
    const intern = new Intern('Tanya', 1, 'tanyamilburn@hotmail.com', "University of Utah"); 

    expect(intern.getRole()).toEqual("Intern");
});