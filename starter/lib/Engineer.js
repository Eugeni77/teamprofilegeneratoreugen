// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// lib/Engineer.js
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    // Call the constructor of the parent class (Employee)
    super(name, id, email);
    
    // Additional property specific to Engineer
    this.github = github;
  }

  // Additional method specific to Engineer
  getGithub() {
    return this.github;
  }

  // Overriding the getRole method inherited from Employee
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
