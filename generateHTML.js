const generateHTML = ({ managerName, managerID, office, managerEmail, engName,engEmail, github, engID, intName,intID, intEmail, school }) =>
  `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Team Roster</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
      <link rel="stylesheet" href = style.css>
    </head>
    <body>
    <section class="section">
      <div class="container">
        <h1 class="title">
          Hip Tech Company
        </h1>
        <p class="subtitle">
          Team Roster 2022
        </p>
        <div class="columns">
          <div class="column card">
              <div class="cardHeader">${managerName}
              <div> ☕️ Manager</div> 
          </div>
              <div>ID:${managerID}</div>
              <div>Email:<a href="https://mail.google.com/mail/?view=cm&source=mailto&to=${managerEmail}" target="_blank">${managerEmail}</a></div>
              <div>Office Number:${office} </div>
          </div>
          <div class="column card">
              <div class="cardHeader">${engName}
              <div>💻 Engineer</div> 
          </div>
              <div>ID:${engID}</div>
              <div>Email:${engEmail}</div>
              <div>Github:<a href="https://github.com/${github}" target="_blank">${github}</a> </div>
          </div>
          <div class="column card">
              <div class="cardHeader">${intName}
              <div>🎓 Intern</div> 
          </div>
              <div>ID:${intID}</div>
              <div>Email:${intEmail}</div>
              <div>School:${school}</div>
          </div>
      </div> 
    </section>
    <script src="index.js"></script>
    </body>
  </html> `;

module.exports = generateHTML



