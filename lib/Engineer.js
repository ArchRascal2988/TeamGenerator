const Employee = require("./Employee")

class Engineer extends Employee{
    constructor(name, email, id, username){
        super(name, email, id);
        this.username= username;
    }
}

module.exports= Engineer;