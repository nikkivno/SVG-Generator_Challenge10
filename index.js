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
        name: 'logoName',
        maxLength: 3,
    }
])

.then((answers) => {
    const svgLogo = shape(answers);
    fs.writeFile('logo.svg', svgLogo, (error) =>
    error ? console.error(error) : console.log('Generated logo.svg')
    );
});