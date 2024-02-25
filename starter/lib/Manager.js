// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// lib/Manager.js
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // Call the constructor of the parent class (Employee)
    super(name, id, email);

    // Additional property specific to Manager
    this.officeNumber = officeNumber;
  }

  // Additional method specific to Manager
  getOfficeNumber() {
    return this.officeNumber;
  }

  // Overriding the getRole method inherited from Employee
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
