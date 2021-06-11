const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title?',
    },

    
  ])
  .then((data) => {
    console.log(data);
    let README = `#Title: ${data.title}`;
    fs.writeFileSync('Output.md', README);
  });

