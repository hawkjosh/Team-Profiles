// Imported Employee class info
const Employee = require('./Employee.js');

// Created class extension for Engineer and added unique property
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  };

  // Created function to return the github property from Engineer
  returnGithub() {
    return this.github;
  };

  // Created function to return the Engineer title
  returnTitle() {
    return 'Engineer';
  };
};

module.exports = Engineer;