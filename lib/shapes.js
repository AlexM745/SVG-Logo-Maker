//shape parent class
class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;

    }
}
// circle child class
class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    // renders the circle svg with the text, text color and shape color
    render() {
        return `
        '<svg width="300" height="200">
         <circle cx ="150" cy="100" r="100" fill="${this.shapeColor}"/>
         <text fill="${this.textColor}" font-size="70" font-family="Verdana" x="150" y="125" text-anchor="middle">${this.text}</text>
        </svg>
        `
    }
}
//triangle child class
class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
}
// square child class
class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
}
// exports all of the functions
module.exports = {
    Shape,
    Circle,
    Triangle,
    Square
};