//imports shapes.js classes
const shapes = require('../shapes');

// shapes class
const shape = shapes.Shape
// square class
const Square = shapes.Square;
//circle class
const Circle = shapes.Circle;
//triangle class
const Triangle = shapes.Triangle;


//circle shape test
describe('Circle', () => {
    it('should return the circle shape, shape color, text, and text color', () => {
        const circle = new Circle('AJM', 'white','red');
        expect(circle.render()).toEqual(`
        '<svg width="300" height="200">
         <circle cx ="150" cy="100" r="100" fill="red"/>
         <text fill="white" font-size="70" font-family="Verdana" x="150" y="125" text-anchor="middle">AJM</text>
        </svg>
        `
        );
    })
});

//triangle shape test
describe('Triangle', () => {
    it('should return the Triangle shape, shape color, text, and text color', () => {
        const triangle = new Triangle('AJM', 'white','blue');
        expect(triangle.render()).toEqual(`
        '<svg width="300" height="200">
         <polygon points= "100, 15 200, 200 0, 200" fill="blue"/>
         <text fill="white" font-size="70" font-family="Verdana" x="150" y="125" text-anchor="middle">AJM</text>
        </svg>
        `
        );
    })
});
