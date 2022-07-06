// Mangager html template function
const createManager = function (manager) {
  return `
<div class="col-4 mt-4">
<div class="card h-100">
      <div class="cardHeader card">
          <h4>${manager.name}</h4>
          <p>☕️ Manager</p>
      </div>
      <div class="card-body font">
          <p class="id">ID:${manager.id}</p>
          <p >Email:<a class = "email" href="https://mail.google.com/mail/?view=cm&source=mailto&to=${manager.email}" target="_blank">${manager.email}</a></p>
          <p class="office">Office Number: ${manager.office}</p>
      </div>
  </div>
</div>`

}
// Engineer html template function
const createEngineer = function (engineer) {
  return `
  <div class="col-4 mt-4">
      <div class="card h-100">
          <div class="cardHeader card">
            <h4>${engineer.name}</h4>
            <p>💻 Engineer</p>
          </div>
          <div class="card-body font">
            <p class="id">ID: ${engineer.id}</p>
            <p >Email:<a class = "email" href="https://mail.google.com/mail/?view=cm&source=mailto&to=${engineer.email}" target="_blank">${engineer.email}</a></p>
            <p>Github:<a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a> </p>
            </div>
        </div>
  </div>`

}
// Intern template function
const createIntern = function (intern) {
  return `
  <div class="col-4 mt-4">
      <div class="card h-100">
        <div class="cardHeader card">
            <h4>${intern.name}</h4>
            <p>🎓 Intern</p>
        </div>
        <div class="card-body font">
          <p class="id">ID:${intern.id}</p>
          <p >Email:<a class = "email" href="https://mail.google.com/mail/?view=cm&source=mailto&to=${intern.email}" target="_blank">${intern.email}</a></p>
          <p>School: ${intern.school}</p>
        </div>
      </div>
  </div>`
}
// join templates together

const generateHTML = (info) => {
  let templateArray = []

  for (let i = 0; i < info.length; i++) {
    const employee = info[i];
    const role = employee.getRole(); 
//  make manager html section
    if (role === 'Manager') {
      const managerCard = createManager(employee);

      templateArray.push(managerCard);
  }

  // make engineer section
  if (role === 'Engineer') {
      const engineerCard = createEngineer(employee);

      templateArray.push(engineerCard);
  }

  // make intern section
  if (role === 'Intern') {
      const internCard = createIntern(employee);

      templateArray.push(internCard);
  }
  
}

// combine templates
const employeeCards = templateArray.join('')

// return to generated page
const generateTeam = generateTeamPage(employeeCards); 
return generateTeam;

}

// generate html page 
const generateTeamPage = function (employeeCards) {   
return`<!DOCTYPE html>
<html >
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Roster</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <nav class="navbar" id="navbar">
            <span class="navbar-brand mb-0 h1 w-100 text-center subtitle title" id="navbar-text">Tech Company Roster 2022</span>
        </nav>
    </header>
    <main>
        <div class="container">
          <div class="row justify-content-center" id="team-cards">
            ${employeeCards}
          </div>
        </div>
    </main>
        
    </body>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </html>
`;
}



module.exports = generateHTML



