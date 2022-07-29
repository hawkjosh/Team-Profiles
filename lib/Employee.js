// Created class for Employee with common properties
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  };

  // Created function to return the name property from Employee
  getName() {
    return this.name;
  };

  // Created function to return the ID property from Employee
  getId() {
    return this.id;
  };

  // Created function to return the email property from Employee
  getEmail() {
    return this.email;
  };

  // Created function to return the Employee role
  getRole() {
    return 'Employee';
  };
};

module.exports = Employee;