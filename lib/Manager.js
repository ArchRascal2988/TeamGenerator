const Employee = require("./Employee")

class Manager extends Employee{
    constructor(name, email, id, officeNo){
        super(name, email, id)
        this.officeNo= officeNo;
    }

    getRole(){
        return "Manager";
    }
}

module.exports= Manager;