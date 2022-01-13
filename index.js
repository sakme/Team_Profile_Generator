const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');

function Team() {
    this.employees = [];
    this.currentEmployee;
    this.counter = 0;
}

Team.prototype.addTeam = function() {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter employee name',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter employee name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the employee ID',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter employee email address',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter employee email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: 'Enter employee office number',
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log('Please enter an office number!')
                    return false;
                }
            }
        }
    ])
    .then(({ name, id, email, office }) => {
        var role = 'Manager';
        this.employees.push(new Manager(name, id, email, role, office));
        this.addEmployee();
    });
}

Team.prototype.addEngineer = function() {

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter employee name',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter employee name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'Enter the employee ID',
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log('Please enter employee ID!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter employee email address',
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('Please enter employee email address!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: 'Enter employee github username',
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log('Please enter a github username')
                        return false;
                    }
                }
            }
        ])
        .then(({ name, id, email, github }) => {
            var role = 'Engineer';
            this.employees.push(new Engineer(name, id, email, role, github));
            this.addEmployee();
        });
};

Team.prototype.addIntern = function() {

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter employee name',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter employee name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'Enter the employee ID',
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log('Please enter employee ID!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter employee email address',
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('Please enter employee email address!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: 'Enter employee school name',
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log('Please enter a school name')
                        return false;
                    }
                }
            }
        ])
        .then(({ name, id, email, school }) => {
            var role = 'Intern';
            this.employees.push(new Intern(name, id, email, role, school));
            this.addEmployee();
        });
};

Team.prototype.addEmployee = function() {
    return inquirer.prompt(
        {
            type: 'list',
            name: 'add',
            message: 'Would you like to add an Engineer, an Intern, or Quit',
            choices: ['Finish', 'Engineer', 'Intern'],
            default: 0,
            validate: addInput => {
                if (addInput) {
                    return true;
                } else {
                    console.log('Please make a selection!');
                    return false;
                }
            }
        }
    )
    .then(({ add }) => {
        
        if (add === 'Engineer') {
            this.addEngineer();
        } else if (add === 'Intern') {
            this.addIntern();
        } else {
            this.getHTML(this);
        }
    });
};

Team.prototype.getHTML = function(data) {
    var html = generatePage(data);
    this.createFiles(html);
};

Team.prototype.createFiles = function(html) {
    writeFile(html);
    copyFile();
};

new Team().addTeam();