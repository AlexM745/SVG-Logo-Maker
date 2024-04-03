//imports shapes.js classes
const shapes = require('../shapes');

// square class
const Square = shapes.Square;
//circle class
const Circle = shapes.Circle;
//triangle class
const Triangle = shapes.Triangle;

//square shape test
describe('Square', () => {
     // what is being tested
    it('should return the Square shape, shape color, text, and text color', () => {
        // possible user input to be tested
        const square = new Square('AJM', 'white', 'green');
        // what should be rendered when user input is added.
        expect(square.render()).toEqual(`
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
         <rect width="200" height="175" x="50" y="10" fill="green"/>
         <text fill="white" font-size="70" font-family="Verdana" x="150" y="125" text-anchor="middle">AJM</text>
        </svg>
        `
        );
    })
});



//circle shape test
describe('Circle', () => {
     // what is being tested
    it('should return the circle shape, shape color, text, and text color', () => {
        // possible user input to be tested
        const circle = new Circle('AJM', 'white', 'red');
        // what should be rendered when user input is added.
        expect(circle.render()).toEqual(`
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
         <circle cx ="150" cy="100" r="100" fill="red"/>
         <text fill="white" font-size="70" font-family="Verdana" x="150" y="125" text-anchor="middle">AJM</text>
        </svg>
        `
        );
    })
});

//triangle shape test
describe('Triangle', () => {
    // what is being tested
    it('should return the Triangle shape, shape color, text, and text color', () => {
        // possible user input to be tested
        const triangle = new Triangle('AJM', 'white', 'blue');
        // what should be rendered when user input is added.
        expect(triangle.render()).toEqual(`
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
         <polygon points= "100, 15 200, 200 0, 200" fill="blue"/>
         <text fill="white" font-size="55" font-family="Verdana" x="100" y="165" text-anchor="middle">AJM</text>
        </svg>
        `
        );
    })
});

