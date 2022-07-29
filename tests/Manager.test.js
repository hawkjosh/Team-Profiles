// Imported class info from Manager
const Manager = require('../lib/Manager.js');

// Created test suite for the Manager class
describe('Manager', () => {
  // Created test for returning the name property
  describe('nameReturnTest', () => {
    it('Should return name from object with name, id, email, and office properties.', () => {
      const obj = new Manager('Manager Name', 45678, 'manager.name@mail.com', 100);

      expect(obj.returnName()).toEqual('Manager Name');
    });
  });

  // Created test for returning the id property
  describe('idReturnTest', () => {
    it('Should return id from object with name, id, email, and office properties.', () => {
      const obj = new Manager('Manager Name', 45678, 'manager.name@mail.com', 100);

      expect(obj.returnID()).toEqual(45678);
    });
  });

  // Created test for returning the email property
  describe('emailReturnTest', () => {
    it('Should return email from object with name, id, email, and office properties.', () => {
      const obj = new Manager('Manager Name', 45678, 'manager.name@mail.com', 100);

      expect(obj.returnEmail()).toEqual('manager.name@mail.com');
    });
  });

  // Created test for returning the office property
  describe('officeReturnTest', () => {
    it('Should return github from object with name, id, email, and office properties.', () => {
      const obj = new Manager('Manager Name', 45678, 'manager.name@mail.com', 100);

      expect(obj.returnOffice()).toEqual(100);
    });
  });

  // Created test for returning the Manager title
  describe('titleReturnTest', () => {
    it('Should return title of Manager from object with name, id, email, and office properties.', () => {
      const obj = new Manager('Manager Name', 45678, 'manager.name@mail.com', 100);

      expect(obj.returnTitle()).toEqual('Manager');
    });
  });
});