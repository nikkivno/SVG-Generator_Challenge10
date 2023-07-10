const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)
const fs = require('fs');

const {Circle, Square, Triangle} = require('./lib/shapes');


inquirer
.prompt ([
    {
        type: 'list',
        message: 'What shape would you like your logo?',
        choices: [
            'circle',
            'square',
            'triangle',
        ],
        name: 'logo',
    },
    {
        type: 'input',
        message: 'what color would you like your logo? (please enter a color name or hexadecimal number)',
        name: 'logoColor'
    },
    {
        type: 'maxlength-input',
        message: 'Please provide a three characters for the center of your logo.',
        name: 'logoText',
        maxLength: 3,
    },
    {
      type: 'input',
      message: 'What text color would you like?(please enter a color name or hexadecimal number)',
      name: 'textColor',
    }
])


.then((answers) => {
    const { logo, logoColor, logoText, textColor } = answers;
    const shape = createShape(logo, logoColor, logoText, textColor);
  
    shape.setColor(logoColor);
    shape.setText(logoText)
    shape.setTextColor(textColor);
  
    const svgLogo = shape.render();
    fs.writeFile('logo.svg', svgLogo, (error) => {
      if (error) {
        console.error(error);
      } else {
        console.log('Generated logo.svg');
      }
    });
  })
  .catch((error) => {
    console.error(error);
  });
  
  function createShape(logo, logoColor, logoText, textColor) {
    switch (logo) {
      case 'circle':
        return new Circle(logoColor, logoText, textColor);
      case 'square':
        return new Square(logoColor, logoText, textColor);
      case 'triangle':
        return new Triangle(logoColor, logoText, textColor);
    }
  };
