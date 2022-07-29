// Imported class info from Manager
const Manager = require('../lib/Manager.js');

// Created test suite for the Manager class
describe('Manager', () => {
  // Created test for returning the name property
  describe('nameReturnTest', () => {
    it('Should return name from object with name, id, email, and office properties.', () => {
      const obj = new Manager('Manager Name', 45678, 'manager.name@mail.com', 100);

      expect(obj.getName()).toEqual('Manager Name');
    });
  });

  // Created test for returning the id property
  describe('idReturnTest', () => {
    it('Should return id from object with name, id, email, and office properties.', () => {
      const obj = new Manager('Manager Name', 45678, 'manager.name@mail.com', 100);

      expect(obj.getId()).toEqual(45678);
    });
  });

  // Created test for returning the email property
  describe('emailReturnTest', () => {
    it('Should return email from object with name, id, email, and office properties.', () => {
      const obj = new Manager('Manager Name', 45678, 'manager.name@mail.com', 100);

      expect(obj.getEmail()).toEqual('manager.name@mail.com');
    });
  });

  // Created test for returning the Manager role
  describe('roleReturnTest', () => {
    it('Should return role of Manager from object with name, id, email, and office properties.', () => {
      const obj = new Manager('Manager Name', 45678, 'manager.name@mail.com', 100);

      expect(obj.getRole()).toEqual('Manager');
    });
  });
});