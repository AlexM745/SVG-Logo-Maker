
// imports inquirer
const inquirer = require('inquire');
//imports filesystem to use writeFile
const fs = require('fs');
// imports the generate logo function 
const generateLogo = require('./lib/genereateLogo');

// questions prompts that will be presented to the user
const questions = [

    //the text for the logo
        {
            type:"input", 
            name:"text", 
            message:"Input three chracters for your logo:",
            maxLength:3 // sets the limit of the user input to 3 characters
        },
    // the color for the three characters the user used
        {
            type:"input", 
            name:"textColor", 
            message:"For the logo text, enter a color or hexadecimal number:"
        },
    // the list of shapes for the user to pick 
        {
            type:"list", 
            name:"shapes", 
            choices:[
                "Circle",
                "Triangle",
                "Square",
            ]
        }, 
    // the color of the shape for the user to pick
        {
            type:"input", 
            name:"shapeColor", 
            message:"For the shape, enter a color or hexadecimal number:"
        },
    ]


// function to initialize the application  
    function init (){

// pass the questions array to inquirer
     inquirer (questions); 

// the promise for the answers
    .then ((answers) => {
        const logoContent = generateLogo(answers); 
        
        // writes the svg file and sends out to the example folder 
        fs.writeFile('./example/logo.svg', logoContent, (err) =>{
            // ternary conditional statement 
            err ? console.log(err) : console.log("Generated logo.svg")
        })
    })
}
// calls the init fucntion to start the application.
init();