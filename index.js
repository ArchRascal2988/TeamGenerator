const fs= require("fs");
const inq= require("inquirer");
const Intern= require("./lib/Intern");
const Manager= require("./lib/Manager");
const Engineer= require("./lib/Engineer");

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
        message: "What is your manager's office number?",
        name: "office"
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
        name: "school"
    }
]

function generateHTML(){
    console.log(team);
    let cArr=[]
    for(const employee of team){
        //push template literal into cArr
    }
    let temp= ""; //will be all of html, stopping when the div for the cards is opened
    for(const card of cArr){
        //add card to temp
    }
    temp+= ""; //close html template literal
    //fs.writeFile("myTeam.html", temp, (err) =>{
    //  if(err) console.err(err);
    //  else console.log(All finished! Check the dist folder for your html)
    // })
}

function init(){
    inq.prompt(landing).then((res)=>{
        switch(res.land){
            case 'Manager':
                inq.prompt(mQ).then((res)=>{
                    team.push(new Manager(res.name, res.email, res.id, res.office))
                    }).then(inq.prompt(cont)).then((res)=>{
                        if(res) init();
                        else generateHTML();
                    }).catch(err).then(()=> console.error(err));
                break;
            
            case 'Engineer':
                inq.prompt(eQ).then((res)=>{
                    team.push(new Engineer(res.name, res.email, res.id, res.github))
                    }).then(inq.prompt(cont)).then((res)=>{
                        if(res) init();
                        else generateHTML();                    
                    }).catch(err).then(()=> console.error(err));
                break;
            
            case 'Intern':
                inq.prompt(iQ).then((res)=>{
                    team.push(new Intern(res.name, res.email, res.id, res.school))
                    }).then(inq.prompt(cont)).then((res)=>{
                        if(res) init();
                        else generateHTML();                    
                }).catch(err).then(()=> console.error(err));
                break;
        }
    }).catch(err).then(()=> console.error(err));
}

init();