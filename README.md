# SVG-Generator_Challenge10
This project is working in node.js with OOP to create a SVG Generator with simple shapes and text.




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


1. Import necessary modules:
   - file system module (fs) for file operations
   - readline module for reading user input

2. Define a function to generate the SVG logo:
   a. Prompt the user for the text (up to three characters)
   b. Prompt the user for the text color
   c. Prompt the user to select a shape from a list (circle, triangle, square)
   d. Prompt the user for the shape's color
   e. Generate an SVG string based on the user's inputs
   f. Create an SVG file named "logo.svg" and write the SVG string into it
   g. Print "Generated logo.svg" to the command line

3. Use the readline module to create an interface for reading user input:
   a. Prompt the user with a message and receive input from them
   b. Use async/await or promises to handle the asynchronous nature of user input

4. Call the function to generate the SVG logo.

5. Handle any errors that may occur during the process.

6. Run the script and test the logo generation functionality.