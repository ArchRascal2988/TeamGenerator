const Employee= require("../lib/Employee.js");

describe("Employee",()=>{
    it("Should create an object when new Employee is invoked", ()=>{
        const e= new Employee;
        expect(typeof(e)).toBe("object");
    });
    it("Should add a name property when new Employee is invoked with a passed in name", ()=>{
        const e= new Employee("John");
        expect(e.name).toBe("John");
    })
    it("Should add an email property when new Employee is invoked with a passed in email", ()=>{
        const e= new Employee("John", "johnman@gmail.com");
        expect(e.email).toBe("johnman@gmail.com");
    })
    it("Should add an id property when new Employee is invoked with a passed in id", ()=>{
        const e= new Employee("John", "johnman@gmail.com", 1);
        expect(e.id).toBe(1);
    })
});