const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)
const fs = require('fs');

const Shapes = require('./lib/shapes');


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
    }
])


.then((answers) => {
    const { logo, logoColor, logoText } = answers;
    const shape = createShape(logo, logoColor, logoText);
  
    shape.setColor(logoColor);
  
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
  
  function createShape(logo, logoColor, logoText) {
    switch (logo) {
      case 'circle':
        return new Shapes.Circle(logoColor, logoText);
      case 'square':
        return new Shapes.Square(logoColor, logoText);
      case 'triangle':
        return new Shapes.Triangle(logoColor, logoText);
    }
  };
