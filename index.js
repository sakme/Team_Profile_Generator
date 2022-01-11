const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

function Team() {
    this.managers = [];
    this.engineers = [];
    this.interns = [];
};

Team.prototype.addTeam = function() {

    inquirer
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
            this.managers.push(new Manager(name, id, email, office));
            console.log(this);
            this.addEmployee();
        });
};

Team.prototype.addEmployee = function() {
    inquirer.prompt(
        {
            type: 'list',
            name: 'add',
            message: 'Would you like to add an Engineer, an Intern, or Quit',
            choices: ['Quit', 'Engineer', 'Intern'],
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
            console.log('Quit');
        }
    });
};

Team.prototype.addEngineer = function() {

    inquirer
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
            this.engineers.push(new Engineer(name, id, email, github));
            console.log(this);
            this.addEmployee();
        });
};

Team.prototype.addIntern = function() {

    inquirer
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
            this.interns.push(new Intern(name, id, email, school));
            console.log(this);
            this.addEmployee();
        });
};

new Team().addTeam();