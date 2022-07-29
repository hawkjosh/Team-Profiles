// Imported Employee class info
const Employee = require('./Employee.js');

// Created class extension for Manager and added unique property
class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email);
    this.office = office;
  };

  // Created function to return the office property from Manager
  returnOffice() {
    return this.office;
  };

  // Created function to return the Manager title
  returnTitle() {
    return 'Manager';
  };
};

module.exports = Manager;