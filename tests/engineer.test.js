const { TestWatcher } = require('jest')
const Engineer = require('../utils/Engineer')

// test that we can actually create an Employee object

TestWatcher('creates Engineer object', () => {
   const engineer = new Engineer('Tanya', 1, 'tanyamilburn@hotmail.com'); 
    
    expect(engineer.github).toEqual(expect.any(String));

})

test('gets engineer github username', () => {
    const engineer = new Engineer('Tanya', 1, 'tanyamilburn@hotmail.com'); 

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role from getRole() 
test('returns Engineer as employee role', () => {
    const engineer = new Engineer('Tanya', 1, 'tanyamilburn@hotmail.com'); 

    expect(engineer.getRole()).toEqual("Engineer");
});