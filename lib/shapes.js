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
  // how the shape chosen will render with the user input
    render() {
        return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
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

    // how the shape chosen will render with the user input
    render() {
        return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
         <polygon points= "100, 15 200, 200 0, 200" fill="${this.shapeColor}"/>
         <text fill="${this.textColor}" font-size="55" font-family="Verdana" x="100" y="165" text-anchor="middle">${this.text}</text>
        </svg>
        `
    }
}
// square child class
class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
// how the shape chosen will render with the user input
    render(){
        return`
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
         <rect width="200" height="175" x="50" y="10" fill="${this.shapeColor}"/>
         <text fill="${this.textColor}" font-size="70" font-family="Verdana" x="150" y="125" text-anchor="middle">${this.text}</text>
        </svg>
        `
    }
}
// exports all of the functions in the file
module.exports = {
    Shape,
    Circle,
    Triangle,
    Square
};