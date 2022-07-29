// Imported class info from Engineer
const Engineer = require('../lib/Engineer.js');

// Created test suite for the Engineer class
describe('Engineer', () => {
  // Created test for returning the name property
  describe('nameReturnTest', () => {
    it('Should return name from object with name, id, email, and github properties.', () => {
      const obj = new Engineer('Engineer Name', 23456, 'engineer.name@mail.com', 'gitEngine1');

      expect(obj.getName()).toEqual('Engineer Name');
    });
  });

  // Created test for returning the id property
  describe('idReturnTest', () => {
    it('Should return id from object with name, id, email, and github properties.', () => {
      const obj = new Engineer('Engineer Name', 23456, 'engineer.name@mail.com', 'gitEngine1');

      expect(obj.getId()).toEqual(23456);
    });
  });

  // Created test for returning the email property
  describe('emailReturnTest', () => {
    it('Should return email from object with name, id, email, and github properties.', () => {
      const obj = new Engineer('Engineer Name', 23456, 'engineer.name@mail.com', 'gitEngine1');

      expect(obj.getEmail()).toEqual('engineer.name@mail.com');
    });
  });

  // Created test for returning the github property
  describe('githubReturnTest', () => {
    it('Should return github from object with name, id, email, and github properties.', () => {
      const obj = new Engineer('Engineer Name', 23456, 'engineer.name@mail.com', 'gitEngine1');

      expect(obj.getGithub()).toEqual('gitEngine1');
    });
  });

  // Created test for returning the Engineer role
  describe('roleReturnTest', () => {
    it('Should return role of Engineer from object with name, id, email, and github properties.', () => {
      const obj = new Engineer('Engineer Name', 23456, 'engineer.name@mail.com', 'gitEngine1');

      expect(obj.getRole()).toEqual('Engineer');
    });
  });
});