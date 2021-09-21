// Starter file provided by Instructor (03/09/2021) AC

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
let employees =[]
function askManagerQuestions(){
    return inquirer.prompt([
        {
            name: 'name',   
            message: 'What is the name of the manager?',
          },
          
          {
              name: 'email',
              message: 'what is the managers email?',
            },
          
            {
              name: 'ID',
              message: 'what is the managers employees ID?',
            },
          
            {
              name: 'officenumber',
              message: 'what is the managers officenumbers?',
            },
          
        
    ])
}
function askEngineerQuestions(){
    return inquirer.prompt([
        {
            name: 'name',   
            message: 'What is the name of the engineer?',
          },
          
          {
              name: 'email',
              message: 'what is the engineers email?',
            },
          
            {
              name: 'ID',
              message: 'what is the engineers employees ID?',
            },
          
            {
              name: 'Github',
              message: 'what is the engineers Github ID?',
            },
          
        
    ]).then(answers=>{
        employees.push(new Engineer(answers.name,answers.ID,answers.email,answers.Github))
        return askChoiceQuestions()
    })
}
function askInternQuestions(){
    return inquirer.prompt([
        {
            name: 'name',   
            message: 'What is the name of the intern?',
          },
          
          {
              name: 'email',
              message: 'what is the interns email?',
            },
          
            {
              name: 'ID',
              message: 'what is the intern employees ID?',
            },
          
            {
              name: 'school',
              message: 'what is the interns school?',
            },
          
        
    ]).then(answers=>{
        employees.push(new Intern(answers.name,answers.ID,answers.email,answers.school))
        return askChoiceQuestions()
    })
}
function askChoiceQuestions(){
    return inquirer.prompt([{
        name: 'empchoice',   
        message: 'What type of employee would you like to add?',
        type:"list",
        choices:["engineer","intern","finished adding employees"]
    }
]).then(answers=>{
    switch(answers.empchoice){
        case "engineer":
          return  askEngineerQuestions()
            break;
            case "intern":
            console.log ("asking intern questions")
            return askInternQuestions()
            break;
            default: 
            console.log (employees)
           const html = render(employees)
           console.log(html)

    }
})
}
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready   to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
askManagerQuestions().then(answers=>{
employees.push(new Manager(answers.name,answers.ID,answers.email,answers.officenumber))
return askChoiceQuestions()

   
})
