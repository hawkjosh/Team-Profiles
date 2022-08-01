// Listed packages needed for this app
const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');

// Declared empty array variable to store employee info
const employeeInfo = [];

// Created function to start app with command line prompt for manager info
function start() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'Please enter the name of your project manager:',
      name: 'managerName'
    },
    {
      type: 'number',
      message: 'Please enter your project manager\'s ID number:',
      name: 'managerId'
    },
    {
      type: 'input',
      message: 'Please enter your poject manager\'s email address:',
      name: 'managerEmail'
    },
    {
      type: 'number',
      message: 'Please enter your project manager\'s office number:',
      name: 'managerOffice'
    }
  ]).then(answers => {
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice);
    employeeInfo.push(manager);
    newEmployee();
  })
}

// Created function for command line prompt to add employees
function newEmployee() {
  inquirer.prompt([
    {
      type: 'list',
      message: 'Do you want to add another employee?',
      choices: ['Add Engineer', 'Add Intern', 'No'],
      name: 'newEmployee'
    },
    {
      type: 'input',
      message: 'Please enter the name of your employee:',
      name: 'employeeName',
      when: (answer) => answer.newEmployee !== 'No'
    },
    {
      type: 'number',
      message: 'Please enter your employee\'s ID number:',
      name: 'employeeId',
      when: (answer) => answer.newEmployee !== 'No'
    },
    {
      type: 'input',
      message: 'Please enter your employee\'s email address:',
      name: 'employeeEmail',
      when: (answer) => answer.newEmployee !== 'No'
    },
    {
      type: 'input',
      message: 'Please enter your employee\'s GitHub username:',
      name: 'employeeGithub',
      when: (answer) => answer.newEmployee !== 'No' && answer.newEmployee === 'Add Engineer'
    },
    {
      type: 'input',
      message: 'Please enter the name of your employee\'s college/university:',
      name: 'employeeSchool',
      when: (answer) => answer.newEmployee !== 'No' && answer.newEmployee === 'Add Intern'
    }
  ]).then(answers => {
    if (answers.newEmployee === 'Add Engineer') {
      const engineer = new Engineer(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.employeeGithub);
      employeeInfo.push(engineer);
      newEmployee();
    } else if (answers.newEmployee === 'Add Intern') {
      const intern = new Intern(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.employeeSchool);
      employeeInfo.push(intern);
      newEmployee();
      } else {
          writeHTML();
        }
  })
}

// Created function to render HTML content for employee card display
function renderEmployeeCard(employee) {
  switch (employee.getRole()) {
    case 'Engineer':
      return `<div class="card m-5 shadow-lg" style="width: 18rem;">
          <div class="text-white" style="background-color: #0077f7;">
            <h5 class="card-title m-3" style="font-size: 2rem">${employee.name}</h5>
            <h5 class="card-text m-3 ps-2" style="font-size: 1.5rem"><i class="fi fi-rr-glasses"></i> Engineer</h5>
          </div>
          <ul class="list-group list-group-flush mb-2 mx-3">
            <li class="list-group-item mt-5 mb-1">ID: ${employee.id}</li>
            <li class="list-group-item mb-2 border-bottom-0">Email: <a href="mailto: ${employee.email}" target="_blank">${employee.email}</a></li>
            <li class="list-group-item mt-2 mb-5">GitHub: <a href="https://www.github.com/${employee.github}" target="_blank">${employee.github}</a></li>
          </ul>
        </div>`;

    case 'Intern':
      return `<div class="card m-5 shadow-lg" style="width: 18rem;">
          <div class="text-white" style="background-color: #0077f7;">
            <h5 class="card-title m-3" style="font-size: 2rem">${employee.name}</h5>
            <h5 class="card-text m-3 ps-2" style="font-size: 1.5rem"><i class="fi fi-rr-graduation-cap"></i> Intern</h5>
          </div>
          <ul class="list-group list-group-flush mb-2 mx-3">
            <li class="list-group-item mt-5 mb-1">ID: ${employee.id}</li>
            <li class="list-group-item mb-2 border-bottom-0">Email: <a href="mailto: ${employee.email}" target="_blank">${employee.email}</a></li>
            <li class="list-group-item mt-2 mb-5">School: ${employee.school}</li>
          </ul>
        </div>`;
  }
}

// Created function to consolidate all employee card HTML content for display
function displayEmployeeCard() {
  if (employeeInfo.length > 1) {
    let employeeCard = renderEmployeeCard(employeeInfo[1]);
    for (let i = 2; i < employeeInfo.length; i++) {
      employeeCard += renderEmployeeCard(employeeInfo[i]);
    }
    return employeeCard;
  } else {
      return '';
  }
}

// Created function to render/display HTML content of manager card
function displayManagerCard() {
  return `<div class="card m-5 shadow-lg" style="width: 18rem;">
      <div class="text-white" style="background-color: #0077f7;">
        <h5 class="card-title m-3" style="font-size: 2rem">${employeeInfo[0].name}</h5>
        <h5 class="card-text m-3 ps-2" style="font-size: 1.5rem"><i class="fi fi-rr-mug-hot"></i> Manager</h5>
      </div>
      <ul class="list-group list-group-flush mb-2 mx-3">
        <li class="list-group-item mt-5 mb-1">ID: ${employeeInfo[0].id}</li>
        <li class="list-group-item mb-2 border-bottom-0">Email: <a href="mailto: ${employeeInfo[0].email}" target="_blank">${employeeInfo[0].email}</a></li>
        <li class="list-group-item mt-2 mb-5">Office Number: ${employeeInfo[0].officeNumber}</li>
      </ul>
    </div>

    ${displayEmployeeCard()}`
}

// Created function to render/display base HTML content for page and inserted the manager/employee cards content
function renderHTML() {
  return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
  <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css'>
  <title>Info Cards</title>
</head>

<body>
  <div class="jumbotron p-5 text-white" style="background-color: #e84756;">
    <div class="container">
      <h1 class="display-7 text-center">My Team</h1>
    </div>
  </div>

  <div class="d-flex flex-wrap justify-content-center mt-3">
    ${displayManagerCard()}
  </div>
</body>

</html>`
}

// Created function to write code into the HTML file
function writeHTML() {
  return fs.writeFile('./dist/index.html', renderHTML(), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Your contact information has been successfully written to the HTML file! You can now check out the webpage with your team contact cards displayed by opening .dis/index.html in your browser.');
    }
  })
}

// Calling function to start the app
start();