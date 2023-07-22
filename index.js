//Used async to properly run node .index.js
async function run() {
  const inquirer = (await import("inquirer")).default;
  const { Svg } = await import("./lib/shapes.js");

  //function to prompt questions
  function prompts() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "brandInitials",
          message: "What initials would you like in your logo?",
          validate: (input) => {
            if (input.length > 3) {
              return "Please enter up to three characters.";
            }
            return true;
          },
        },
        {
          type: "input",
          name: "textColor",
          message: "What color would you like the initials to be?",
        },
        {
          type: "list",
          name: "shape",
          message: "What shape would you like your logo to be?",
          choices: ["Square", "Circle", "Triangle"],
        },
        {
          type: "input",
          name: "shapeColor",
          message: "What color would you like your shape to be?",
        },
      ])
      .then((answers) => {
        const svg = new Svg(
          answers.brandInitials,
          answers.textColor,
          answers.shape,
          answers.shapeColor
        );
        const svgContent = svg.generateSvgContent();
        saveSvgToFile(svgContent); 
      });
  }

  //function to have logo saved into "examples" folder
  function saveSvgToFile(svgContent) {
    const fs = require("fs");
    const path = require("path");
    const outputFolderPath = path.join(__dirname, "examples");
    const outputPath = path.join(outputFolderPath, "logo.svg");

    if (!fs.existsSync(outputFolderPath)) {
      fs.mkdirSync(outputFolderPath);
    }

    fs.writeFile(outputPath, svgContent, (err) => {
      if (err) {
        console.error("Error generating SVG file:", err);
      } else {
        console.log("Generated logo.svg");
      }
    });
  }

  //function to start questions
  function init() {
    prompts();
  }

  init();
}
//Will not work without this Timeout
setTimeout(run, 0);