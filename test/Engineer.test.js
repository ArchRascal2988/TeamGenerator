const Employee= require("../lib/Employee.js");
const Engineer = require("../lib/Engineer.js");

describe("Engineer",()=>{
    it("Should add a username property when new Engineer() is invoked with a passed github username",()=>{
        const en=new Engineer("Jimmy", "jimmy@gmail.com", 4, "jimmyjim11");
        expect(en.username).toBe("jimmyjim11");
    });
});

describe("Engineer.getRole()", ()=>{
    it("Should return the proper employee subtype",()=>{
        const en=new Engineer("Jimmy", "jimmy@gmail.com", 4, "jimmyjim11");
        expect(en.getRole()).toBe("Engineer");
    });
})