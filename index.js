const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title?',
    },
    {
    type: 'input',
    name: 'description',
    message: 'What is the description?'
    },
    {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?'
    },
    {
    type: 'input',
    name: 'usage',
    message: 'What is the usage information?'
    },
    {
    type: 'input',
    name: 'contribution',
    message: 'What are the contribution guidelines?'
    },
    {
    type: 'input',
    name: 'test', 
    message: 'What are the test instructions?'
    }
    
    
  ])
  .then((data) => {
    console.log(data);
    let README = `#Title: ${data.title}
    The description is ${data.description}
    The installation instructions are ${data.installation}
    The usage information is ${data.usage}
    The contribution guidelines are ${data.contribution}
    The test instructions are ${data.test}`;
    fs.writeFileSync('Output.md', README);
  });

