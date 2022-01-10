const inquirer = require('inquirer');
const Manager = require('./lib/manager');
// const Engineer = require('./lib/engineer');
// const Intern = require('./lib/intern');

function Team() {
    this.managers = [];
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
                        console.log('Please enter an office number1')
                        return false;
                    }
                }
            }
        ])
        .then(({ name, id, email, office }) => {
            this.managers = new Manager(name, id, email, office);
            console.log(this.managers);
        });
};

new Team().addTeam();