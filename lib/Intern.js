// Imported Employee class info
const Employee = require('./Employee.js');

// Created class extension for Intern and added unique property
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  };

  // Created function to return the school property from Intern
  getSchool() {
    return this.school;
  };

  // Created function to return the Intern role
  getRole() {
    return 'Intern';
  };
};

module.exports = Intern;