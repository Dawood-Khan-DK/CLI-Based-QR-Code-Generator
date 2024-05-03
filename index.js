import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";
inquirer
  .prompt([{
    message: "enter a number",
    name: "url"}
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers.url);
    
// var qr_svg = qr.image(answers.url+5);
// qr_svg.pipe(fs.createWriteStream('qr.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
