// Imported class info from Employee
const Employee = require('../lib/Employee.js');

// Created test suite for the Employee class
describe('Employee', () => {
  // Created test for returning the name property
  describe('nameReturnTest', () => {
    it('Should return name from object with name, id, and email properties.', () => {
      const obj = new Employee('Employee Name', 12345, 'employee.name@mail.com');

      expect(obj.returnName()).toEqual('Employee Name');
    });
  });

  // Created test for returning the id property
  describe('idReturnTest', () => {
    it('Should return id from object with name, id, and email properties.', () => {
      const obj = new Employee('Employee Name', 12345, 'employee.name@mail.com');

      expect(obj.returnID()).toEqual(12345);
    });
  });

  // Created test for returning the email property
  describe('emailReturnTest', () => {
    it('Should return email from object with name, id, and email properties.', () => {
      const obj = new Employee('Employee Name', 12345, 'employee.name@mail.com');

      expect(obj.returnEmail()).toEqual('employee.name@mail.com');
    });
  });

  // Created test for returning the employee title
  describe('titleReturnTest', () => {
    it('Should return title of employee from object with name, id, and email properties.', () => {
      const obj = new Employee('Employee Name', 12345, 'employee.name@mail.com');

      expect(obj.returnTitle()).toEqual('Employee');
    });
  });
});