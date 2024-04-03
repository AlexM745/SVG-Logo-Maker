
// imports inquirer
const inquirer = require("inquirer");
//imports filesystem to use writeFile
const fs = require('fs');
// imports the generate logo js file  
const generateLogo = require('./lib/generateLogo');

// questions prompts that will be presented to the user
const questions = [

    //the text for the logo
    {
        
        type: "input",
        name: "text",
        message: "Input three chracters for your logo:",
        // checks to see if the input is only 3 characters
        validate: (text)=> {

            if (text.length > 3 || text.length <= 0 ){
               return "Must be 1 to 3 characters!";
            } else {
                return true;
            }
        }  

    
    },
    // the color for the three characters the user used
    {
        type: "input",
        name: "textColor",
        message: "For the logo text, enter a color or hexadecimal number:"
    },
    // the list of shapes for the user to pick 
    {
        type: "list",
        name: "shapeChoice",
        choices: [
            "Circle",
            "Triangle",
            "Square",
        ]
    },
    // the color of the shape for the user to pick
    {
        type: "input",
        name: "shapeColor",
        message: "For the shape, enter a color or hexadecimal number:"
    },
]


// function to initialize the application  
function init() {
    // pass the questions array to inquirer
    inquirer.prompt(questions)
    // answer promise
    .then((answers) => {
        // the logo content is the answers that pass through generatelogo
        const logoContent = generateLogo(answers);
        // writes the svg file and sends out to the example folder 
        fs.writeFile('./examples/logo.svg', logoContent, (err) => {
            // ternary conditional statement 
            err ? console.log(err) : console.log("Generated logo.svg")
        })
    });
}
// calls the init fucntion to start the application.
init();