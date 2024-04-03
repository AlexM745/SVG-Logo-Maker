# SVG-Logo-Maker

![badge](https://img.shields.io/badge/LICENSE-MIT-green)

  ## Description
  This is an application that takes user input from inquirer to create a SVG file for a logo in the [examples folder](https://github.com/AlexM745/SVG-Logo-Maker/tree/main/examples)for the user.

  [![youtube video thumbnail](https://img.youtube.com/vi/r62QdkmFXzg/0.jpg)](https://www.youtube.com/watch?v=r62QdkmFXzg)
    
  
  ## Table of Contents
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

  ## Installation
  In order to use this application you will need clone this project repository to your computer. Then write on your terminal the the following commands:

  `npm init`

  `npm i inquirer`

  You will also need to install Jest in order to check the test on the file, use the following command:

  `npm i --save-dev jest`
  
  ## Usage
  Write the following command on your the root folder of your project and answer the questions that are prompted.

  `node index.js` or `npm start`

  There will be series of questions about the text, text color, shape and shape color. If you add more than 3 characters for your text you will get prompted to only add 1 to 3 characters.
  
  ## Credits
  [Alexis Merino](https://github.com/AlexM745)

  ## Contribution
  If you would like to contribute to the code or improve it you can fork the repository.
  
  ## License 
  
  ![badge](https://img.shields.io/badge/LICENSE-MIT-green)

  ## Tests
  There is a shape.test.js file that contains all the shape classes.Each shape ( Square, Circle, Triangle) is tested for a render() method that returns a string for the corresponding SVG file with the color and text answers. 
  
  To see the test pass use the follwing command:

  `npm test`


