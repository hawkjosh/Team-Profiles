// Imported class info from Intern
const Intern = require('../lib/Intern.js');

// Created test suite for the Intern class
describe('Intern', () => {
  // Created test for returning the name property
  describe('nameReturnTest', () => {
    it('Should return name from object with name, id, email, and school properties.', () => {
      const obj = new Intern('Intern Name', 34567, 'intern.name@mail.com', 'Intern College');

      expect(obj.returnName()).toEqual('Intern Name');
    });
  });

  // Created test for returning the id property
  describe('idReturnTest', () => {
    it('Should return id from object with name, id, email, and school properties.', () => {
      const obj = new Intern('Intern Name', 34567, 'intern.name@mail.com', 'Intern College');

      expect(obj.returnID()).toEqual(34567);
    });
  });

  // Created test for returning the email property
  describe('emailReturnTest', () => {
    it('Should return email from object with name, id, email, and school properties.', () => {
      const obj = new Intern('Intern Name', 34567, 'intern.name@mail.com', 'Intern College');

      expect(obj.returnEmail()).toEqual('intern.name@mail.com');
    });
  });

  // Created test for returning the school property
  describe('schoolReturnTest', () => {
    it('Should return github from object with name, id, email, and school properties.', () => {
      const obj = new Intern('Intern Name', 34567, 'intern.name@mail.com', 'Intern College');

      expect(obj.returnSchool()).toEqual('Intern College');
    });
  });

  // Created test for returning the Intern title
  describe('titleReturnTest', () => {
    it('Should return title of Intern from object with name, id, email, and school properties.', () => {
      const obj = new Intern('Intern Name', 34567, 'intern.name@mail.com', 'Intern College');

      expect(obj.returnTitle()).toEqual('Intern');
    });
  });
});