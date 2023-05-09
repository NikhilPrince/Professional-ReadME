const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');


const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please name your project? (Required)',
        validate: projectInput => {
            if (projectInput) {
                return true;
            } else {
                console.log('Please name your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'githubname',
        message: 'Please provide your GitHub username? (Required)',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please provide your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'repo name',
        message: 'Please provide the name of your repo? (Required)',
        validate: repoInput => {
            if (repoInput) {
                return true;
            } else {
                console.log('Please provide the name of your repo!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Please provide a small description of your project? (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please provide a small description of your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Reason',
        message: 'What is your reason for making this project? (Required)',
        validate: reasonInput => {
            if (reasonInput) {
                return true;
            } else {
                console.log('What is your reason for making this project!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'steps',
        message: 'Please provide the necessary steps to install your project. (Required)',
        validate: stepsInput => {
            if (stepsInput) {
                return true;
            } else {
                console.log('Please provide the necessary steps to install your project!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license will you use for your project?',
        choices: ['agpl', 'apache', 'mit', 'no license']
    },
 
    {
        type: 'input',
        name: 'instructions',
        message: 'Instructions on testing this application. (Required)',
        validate: instructionsInput => {
            if (instructionsInput) {
                return true;
            } else {
                console.log('Instructions on testing this application!');
                return false;
            }
        }
    }
];


const storeFile = contents => {
    return new Promise((resolve, reject) => {
        fs.storeFile('./dist/generated-README.md', contents, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};


const init = () => {

    return inquirer.prompt(questions)
    .then(contentOfREADME => {
        return contentOfREADME;
    })
}

// Function call to initialize app
init()
.then(contentOfREADME => {
    console.log(contentOfREADME);
    return generateMarkdown(contentOfREADME);
})
.then(pageMD => {
    return storeFile(pageMD);
})
.then(storeRes => {
    console.log(storeRes.message);
})
.catch(err => {
    console.log(err);
})