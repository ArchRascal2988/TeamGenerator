const fs= require("fs");
const inq= require("inquirer");
const chalk= require("chalk");
const Emp= require("./lib/Employee");
const In= require("./lib/Intern");
const Mn= require("./lib/Manager");
const En= require("./lib/Engineer");

var team= [];

const landing={
    type: "list",
    message: "Welcome to the Team Generator. Pick either a manager, engineer, or intern to add to the dashboard.",
    name: "land",
    choices: "[Manager, Engineer, Intern]"
}

const cont={
    type: "confirm",
    message: "All done! Would you like to add another member (Declining will halt execution)?",
    name: "continue"
}

const mQ=[
    {
        type: "input",
        message: "What is your manager's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is your manager's ID number?",
        name: "id"
    },
    {
        type: "input",
        message: "What is your manager's email address?",
        name: "email"
    },    {
        type: "input",
        message: "What is your manager's gitHub office number?",
        name: "github"
    },
]

const eQ=[
    {
        type: "input",
        message: "What is your engineer's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is your engineer's ID number?",
        name: "id"
    },
    {
        type: "input",
        message: "What is your engineer's email address?",
        name: "email"
    },    {
        type: "input",
        message: "What is your engineer's gitHub username?",
        name: "github"
    }
]

const iQ=[
    {
        type: "input",
        message: "What is your intern's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is your intern's ID number?",
        name: "id"
    },
    {
        type: "input",
        message: "What is your intern's email address?",
        name: "email"
    },    {
        type: "input",
        message: "What is your intern's school of residence?",
        name: "github"
    }
]

function generateHTML(){
    let cArr=[]
    for(const employee of team){
        //push template literal
    }
}

function init(){
    inq.prompt(landing).then((res)=>{
        switch(res.land){
            case 'Manager':
                inq.prompt(mQ).then((res)=>{
                    //send off response data to constructor & push new object into team
                    }).then(inq.prompt(cont)).then((res)=>{
                        if(res) init();
                        else generateHTML();
                    }).catch(err).then(()=> console.error(err));
                break;
            
            case 'Engineer':
                inq.prompt(eQ).then((res)=>{
                    //send off response data to constructor & push new object into team
                    }).then(inq.prompt(cont)).then((res)=>{
                        if(res) init();
                        else generateHTML();                    
                    }).catch(err).then(()=> console.error(err));
                break;
            
            case 'Intern':
                inq.prompt(iQ).then((res)=>{
                    //send off response data to constructor & push new object into team
                    }).then(inq.prompt(cont)).then((res)=>{
                        if(res) init();
                        else generateHTML();                    
                }).catch(err).then(()=> console.error(err));
                break;
        }
    }).catch(err).then(()=> console.error(err));
}

init();