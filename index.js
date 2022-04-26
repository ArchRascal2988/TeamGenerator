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
    choices: ["Manager", "Engineer", "Intern"]
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
    let cardTemp;
    for(const employee of team){
        if(employee.getRole()==="Manager"){
            cardTemp=`
            <div class="card employee col-3">
            <div class="card-header">
                <h2 class="card-title">${employee.name}</h2>
                <h3 class="card-title"><i class="fa-solid fa-mug-hot"></i> Manager </h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">Id: ${employee.id}</li>
                    <li class="list-group-item"><a href="${employee.email}">Email: ${employee.email}</a></li>
                    <li class="list-group-item">Office:  ${employee.officeNo}</li>
                </ul>
            </div>
          </div>`;
        }
        else if(employee.getRole()==="Engineer"){
            cardTemp=`
            <div class="card employee col-3">
            <div class="card-header">
                <h2 class="card-title">${employee.name}</h2>
                <h3 class="card-title"><i class="fa-solid fa-glasses"></i> Engineer </h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">Id: ${employee.id}</li>
                    <li class="list-group-item"><a href="${employee.email}">Email: ${employee.email}</a></li>
                    <li class="list-group-item"><a href="https://github.com/${employee.username}">Github: ${employee.username}</a></li>
                </ul>
            </div>
          </div>`;
        }
        else{
            cardTemp=`
            <div class="card employee col-3">
            <div class="card-header">
                <h2 class="card-title">${employee.name}</h2>
                <h3 class="card-title"><i class="fa-solid fa-user-graduate"></i> Manager </h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">Id: ${employee.id}</li>
                    <li class="list-group-item"><a href="${employee.email}">Email: ${employee.email}</a></li>
                    <li class="list-group-item">School: ${employee.school}</li>
                </ul>
            </div>
          </div>`;
        }
        cArr.push(cardTemp);
    }
    let temp=`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
    <link rel="stylesheet" href="./style.css">
    <title>Team Generator</title>
</head>
<body>
    <header class="jumbotron jumbotron-fluid">
        <h1>Team Generator</h1>
    </header>
    <main class="container container-fluid row">`; 
    for(const card of cArr){
        temp+=card;
    }
    temp+=`
    </main>
</body>
</html>`;
    fs.writeFile("./dist/myTeam.html", temp, (err) =>{
     if(err) console.err(err);
     else console.log("All finished! Check the dist folder for your html")
    })
}

async function init(){
    let obj= await inq.prompt(landing)
    .then((res)=> {return gatherData(res.land)});
    team.push(obj);
    addAnother();
}

async function gatherData(type){
    switch(type){
        case "Manager":
            return await inq.prompt(mQ).then((res)=> {return new Manager(res.name, res.email, res.id, res.office)});
        case "Engineer":
            return await inq.prompt(eQ).then((res)=> {return new Engineer(res.name, res.email, res.id, res.github)});
        case "Intern":
            return await inq.prompt(iQ).then((res)=> {return new Intern(res.name, res.email, res.id, res.school)});
    }
}

function addAnother(){
    inq.prompt(cont).then((res)=>{
        if(res.continue==false) generateHTML();
        else init();
    })
}


init();