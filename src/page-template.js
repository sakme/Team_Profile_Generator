const generateManagers = data => {
    if (!data) {
        return '';
    }

    const manager = data.employees[0];

    return `<section class="row" id="managers">
                <div class="card col">
                    <div class="card-header">
                        <p>${manager.name}</p>
                        <p><i class="fas fa-coffee"></i> ${manager.role}</p>
                    </div>
                    <div class="card-body">
                        <div class="id">
                            <p>ID: ${manager.id}</p>
                        </div>
                        <div class="email">
                            <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                        </div>
                        <div class="other">
                            <p>Office Number: ${manager.office}</p>
                        </div>
                    </div>
                </div>
            </section>`;
};

const generateEngineers = data => {
    if (!data) {
        return '';
    }

    const engineers = data.employees.filter(element => element.role === 'Engineer');
    
    return `<section class="row" id="engineers">
        ${engineers.map(({ name, id, email, role, github }) => {
            return `<div class="card col">
                        <div class="card-header">
                            <p>${name}</p>
                            <p><i class="fas fa-glasses"></i> ${role}</p>
                        </div>
                        <div class="card-body">
                            <div class="id">
                                <p>ID: ${id}</p>
                            </div>
                            <div class="email">
                                <p>Email: <a href="mailto:${email}">${email}</a></p>
                            </div>
                            <div class="other">
                                <p>GitHub: <a href="https://github.com/${github}" target="_blank">${github}</a></p>
                            </div>
                        </div>
                    </div>
                `;
            }
        )}  
    </section>`;
};

const generateInterns = data => {
    if (!data) {
        return '';
    }

    const interns = data.employees.filter(element => element.role === 'Intern');
    
    return `<section class="row" id="interns">
        ${interns.map(({ name, id, email, role, school }) => {
            return `<div class="card col">
                        <div class="card-header">
                            <p>${name}</p>
                            <p><i class="fas fa-user-graduate"></i> ${role}</p>
                        </div>
                        <div class="card-body">
                            <div class="id">
                                <p>ID: ${id}</p>
                            </div>
                            <div class="email">
                                <p>Email: <a href="mailto:${email}">${email}</a></p>
                            </div>
                            <div class="other">
                                <p>School: ${school}</p>
                            </div>
                        </div>
                    </div>
                `;
            }
        )}  
        </section>`;
};

module.exports = templateData => {

    return `
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Portfolio</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
            <link rel="stylesheet" href="style.css">
        </head>

        <body>
            <header>
            <div>
                <h1>My Team</h1>
            </div>
            </header>
            <main class="container">
                ${generateManagers(templateData)}
                ${generateEngineers(templateData).replace(/,</g, '<')}
                ${generateInterns(templateData).replace(/,</g, '<')}
            </main>
        </body>
        </html>
  `;
};