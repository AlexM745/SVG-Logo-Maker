//imports shapes.js classes
const shapes = require('./shapes');

// square class
const Square = shapes.Square;
//circle class
const Circle = shapes.Circle;
//triangle class
const Triangle = shapes.Triangle;


// function to create the svg logo.
function generateLog(answers) {
  // if the user picks square
  if (answers.shapeChoice === 'Square'){
    let shape = new Square (answers.text,answers.textColor, answers.shapeColor);
    return shape.render();
  }
  // if the user picks circle
  if (answers.shapeChoice === 'Circle'){
    let shape = new Circle (answers.text,answers.textColor, answers.shapeColor);
    return shape.render();
  }
// if the user picks triangle
  if (answers.shapeChoice === 'Triangle'){
    let shape = new Triangle (answers.text,answers.textColor, answers.shapeColor);
    return shape.render();
  }


}
// exports the function so that index.js can user input to create logo
module.exports = generateLog;