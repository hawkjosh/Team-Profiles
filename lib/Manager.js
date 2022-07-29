// Imported Employee class info
const Employee = require('./Employee.js');

// Created class extension for Manager and added unique property
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  };

  // Created function to return the Manager role
  getRole() {
    return 'Manager';
  };
};

module.exports = Manager;