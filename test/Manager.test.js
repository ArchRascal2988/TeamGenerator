const Employee= require("../lib/Employee.js");
const Manager = require("../lib/Manager.js");

describe("Manager",()=>{
    it("Should add an officeNo property when new Manager() is invoked with a passed office number",()=>{
        const m=new Manager("Jen", "jenstre@gmail.com", 2, 22);
        expect(m.officeNo).toBe(22);
    });
});

describe("Manager.getRole()", ()=>{
    it("Should return the proper employee subtype",()=>{
        const m=new Manager("Jen", "jenstre@gmail.com", 2, 22);
        expect(m.getRole()).toBe("Manager");
    });
})