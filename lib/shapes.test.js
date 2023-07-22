const { Triangle, Circle, Square } = require("./shapes.js");

test("Triangle class should render correct SVG with given shape color", () => {
  const shape = new Triangle();
  shape.setColor("blue");
  expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

test("Circle class should render correct SVG with given shape color", () => {
  const shape = new Circle();
  shape.setColor("green");
  expect(shape.render()).toEqual('<circle cx="150" cy="100" r="50" fill="green" />');
});

test("Square class should render correct SVG with given shape color", () => {
  const shape = new Square();
  shape.setColor("red");
  expect(shape.render()).toEqual('<rect x="100" y="50" width="100" height="100" fill="red" />');
});
