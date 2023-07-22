class Svg {
  constructor(brandInitials, textColor, shape, shapeColor) {
    this.brandInitials = brandInitials;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
  }

  generateSvgContent() {
    let svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">`;

    if (this.shape === "Circle") {
      svgContent += `<circle cx="150" cy="100" r="50" fill="${this.shapeColor}" />`;
      svgContent += `<text x="50%" y="50%" fill="${this.textColor}" font-size="20px" text-anchor="middle" alignment-baseline="middle">${this.brandInitials}</text>`;
    } else if (this.shape === "Triangle") {
      svgContent += `<polygon points="150, 50 100, 150 200, 150" fill="${this.shapeColor}" />`;
      svgContent += `<text x="50%" y="50%" fill="${this.textColor}" font-size="20px" text-anchor="middle" alignment-baseline="middle">${this.brandInitials}</text>`;
    } else if (this.shape === "Square") {
      svgContent += `<rect x="100" y="50" width="100" height="100" fill="${this.shapeColor}" />`;
      svgContent += `<text x="50%" y="50%" fill="${this.textColor}" font-size="20px" text-anchor="middle" alignment-baseline="middle">${this.brandInitials}</text>`;
    }

    svgContent += `</svg>`;

    return svgContent;
  }
  
    saveSvgToFile() {
      const fs = require("fs");
  
      const svgContent = this.generateSvgContent();
  
      fs.writeFile("logo.svg", svgContent, (err) => {
        if (err) {
          console.error("Error generating SVG file:", err);
        } else {
          console.log("Generated logo.svg");
        }
      });
    }
  }
  
  class Triangle {
    constructor() {
      this.color = "black"; // Default color
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      const points = "150, 18 244, 182 56, 182";
      return `<polygon points="${points}" fill="${this.color}" />`;
    }
  }
  
  class Circle {
    constructor() {
      this.color = "black"; // Default color
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
    }
  }
  
  class Square {
    constructor() {
      this.color = "black"; // Default color
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Svg, Triangle, Circle, Square };