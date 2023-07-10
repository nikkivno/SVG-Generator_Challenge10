// code to connect to shapes.js file
const {Circle} = require('./shapes.js');



const circle = new Circle();
circle.setColor("blue");
circle.setText("SVG");
circle.setTextColor("white");
expect(circle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" width="300px" height="200px">
<circle cx="75" cy="75" r="70" fill="blue" stroke-width="5"/>
<text x="75" y="85" text-anchor="middle" fill="white" font-size="30">SVG</text>
</svg>`);