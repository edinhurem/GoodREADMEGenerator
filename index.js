// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fileSystems = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');




// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What it the title of your project?',
    name: 'title'
  },
  {
    type: 'input',
    message: 'What is your Github user name?',
    name: 'github',
  },

  {
    type: 'list',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    message: 'What is the licesne of Project?',
    name: 'license',
  },

  {
    type: 'input',
    message: 'What is your e-mail address?',
    name: 'email',
  },

  {
    type: 'input',
    message: 'Who contributed to the project?',
    name: 'contributor'
  },

  {
    type: 'input',
    message: 'What command should be run to install dependecies?',
    name: 'installation',
    default: 'npm i'
  },

  {
    type: 'input',
    message: 'What does the user need to know about using the repo?',
    name: 'usage',
  },

  {
    type: 'input',
    message: 'What command should be used to run test?',
    name: 'test',
    default: 'npm test',
  },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fileSystems.writeFileSync(path.join(process.cwd(), fileName), data)  // so any time we invoke method we must put prentacies after it. ()
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    writeToFile('readme.md', generateMarkdown({ ...response }))
  })
}

// Function call to initialize app
init();

// inquirer
  //.prompt([
    //{
      //type: 'input',
      //message: 'What is your user name?',
      //name: 'username',
    //},
    //{
    //  type: 'password',
      //message: 'What is your password?',
      //name: 'password',
    //},
    //{
      //type: 'password',
      //message: 'Re-enter password to confirm:',
      //name: 'confirm',
    //},
  //])
  //.then((response) =>
    //response.confirm === response.password
      //? console.log('Success!')
      //: console.log('You forgot your password already?!')

