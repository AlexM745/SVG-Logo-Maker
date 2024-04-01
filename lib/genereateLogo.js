// function to create the svg logo in html.
function generateLog(answers) {
    return `
<svg width="300" height="200">
  <${answers.shapes}fill="${answers.shapeColor}"/>
  <text fill="${answers.textColor}" font-size="70" font-family="Verdana" x="150" y="125" text-anchor = "middle">${answers.text}</text>
</svg>
    `
}