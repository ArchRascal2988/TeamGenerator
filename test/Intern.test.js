const Employee= require("../lib/Employee.js");
const Intern = require("../lib/Intern.js");

describe("Intern",()=>{
    it("Should add a school property when new Manager() is invoked with a passed school name",()=>{
        const i=new Intern("Kati", "kkti@gmail.com", 3, "University Of Central Florida");
        expect(i.school).toBe("University Of Central Florida");
    });
});

describe("Intern.getRole()", ()=>{
    it("Should return the proper employee subtype",()=>{
        const i=new Intern("Kati", "kkti@gmail.com", 3, "University Of Central Florida");
        expect(i.getRole()).toBe("Intern");
    });
})