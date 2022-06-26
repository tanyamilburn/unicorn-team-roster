const generateHTML = ({ name, id, office, github, email, school }) =>
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
              <div class="cardHeader">${name}
              <div> ☕️ Manager</div> 
          </div>
              <div>ID:</div>
              <div>Email:<a href="https://mail.google.com/mail/?view=cm&source=mailto&to=tanyamilbur@hotmail.com" target="_blank">tanyamilburn@hotmail.com</a></div>
              <div>Office Number: </div>
          </div>
          <div class="column card">
              <div class="cardHeader">Name
              <div>💻 Engineer</div> 
          </div>
              <div>ID:</div>
              <div>Email:</div>
              <div>Github:<a href="https://github.com/tanyamilburn" target="_blank">GitHub</a> </div>
          </div>
          <div class="column card">
              <div class="cardHeader">Name
              <div>🎓 Intern</div> 
          </div>
              <div>ID:</div>
              <div>Email:</div>
              <div>School:</div>
          </div>
      </div> 
    </section>
    <script src="index.js"></script>
    </body>
  </html> `;

module.exports = generateHTML



