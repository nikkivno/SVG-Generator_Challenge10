// code to connect to shapes.js file
const {Circle, Square, Triangle} = require('./shapes.js');


// Circle Test

test('circle renders correctly', () => {
const circle = new Circle();
circle.setColor("blue");
circle.setText("SVG");
circle.setTextColor("white");
expect(circle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" width="300px" height="200px">
<circle cx="75" cy="75" r="70" fill="blue" stroke-width="5"/>
<text x="75" y="85" text-anchor="middle" fill="white" font-size="30">SVG</text>
</svg>`);
});


// Square Test

test('square renders correctly', () => {
const square = new Square();
square.setColor("#486CE3");
square.setText("NMV");
square.setTextColor("pink");
expect(square.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" width="300px" height="200px">
<rect x="10" y="10" width="100" height="100" fill="#486CE3" stroke-width="5"/>
<text x="30" y="70" fill="pink" font-size="30">NMV</text>
</svg>`);
});

// Triangle Test

test('triangle renders correctly', () => {
const triangle = new Triangle();
triangle.setColor("black");
triangle.setText("UNB");
triangle.setTextColor("#CA8E0E");
expect(triangle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" width="300px" height="200px">
<polygon points="150, 18 244, 182 56, 182" fill="black"/>
<text x="150" y="120" text-anchor="middle" fill="#CA8E0E" font-size="30">UNB</text>
</svg>`);
});