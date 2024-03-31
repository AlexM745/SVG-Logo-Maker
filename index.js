const inquirer = require('inquire');
const fs = require('fs');
const generateLogo = require('./lib/genereateLogo');

inquirer
    .prompt([
        {
            type:"input", 
            name:"logoText", 
            message:"Input three chracters for your logo:",
            maxLength:3
        },

        {
            type:"input", 
            name:"textColors", 
            message:"For the logo text, enter a color or hexadecimal number:"
        },

        {
            type:"list", 
            name:"shapes", 
            choices:[
                "Circle",
                "Triangle",
                "Square",
            ]
        }, 

        {
            type:"input", 
            name:"shapeColors", 
            message:"For the shape, enter a color or hexadecimal number:"
        },
    ])

    .then ((answers) => {
        const logoContent = generateLogo(answers); 

        fs.writeFile('./example/logo.svg', logoContent, (err) =>{
            err ? console.log(err) : console.log("Generated logo.svg")
        })
    })