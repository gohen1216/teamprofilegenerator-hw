const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, GitHub) {
        super(name, id, email);
        this.github = GitHub;
    }
    getRole() 
      {
        return "Engineer";
    }
    getGithub() 
      {
        return this.GitHub;
    }
}

module.exports = Engineer;
