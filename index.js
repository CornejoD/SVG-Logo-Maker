const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shape.js");


inquirer
    .prompt([
        {
            type: "list",
            message: "What shape do you want your logo",
            choices: ["Circle", "Triangle", "Rectangle"],
            name: "shape",
        },
        {
            type: "input",
            message: "What background color would you like",
            name: "color",
        },
        {
            type: "input",
            message: "Enter 3 letters to be on Logo",
            name: "text",
        },
        {
            type: "input",
            message: "Enter color for text",
            name: "textColor",
        },
    ])
    .then((responses) => {
        let shape;
        if (responses.shape === "Circle"){
            shape = new Circle(
                responses.color,
                responses.text,
                responses.textColor
                );
        } else if (responses.shape === "Square"){
            shape = new Square(
                responses.color,
                responses.text,
                responses.textColor
                );
        } else if (responses.shape === "Triangle"){
            shape = new Triangle(
                responses.color,
                responses.text,
                responses.textColor
                );
        }
        console.log(responses);
        fs.writeFile("shape.svg", responses.shape, (err) => {
            err ? console.log(err) : console.log("SVG generated!");
        });
    })

    .catch((err) => {
        console.log(err);
    });