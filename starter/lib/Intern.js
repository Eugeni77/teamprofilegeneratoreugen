// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// lib/Intern.js
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    // Call the constructor of the parent class (Employee)
    super(name, id, email);
    
    // Additional property specific to Intern
    this.school = school;
  }

  // Additional method specific to Intern
  getSchool() {
    return this.school;
  }

  // Overriding the getRole method inherited from Employee
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
