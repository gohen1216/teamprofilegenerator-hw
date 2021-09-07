const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, OfficeNumber) {
        super(name, id, email);
        this.OfficeNumber = OfficeNumber;
    }
    getRole() 
      {
        return "Manager";
    }
    getOfficeNumber() 
      {
        return this.OfficeNumber;
    }
}

module.exports = Manager;
