
function renderLicenseBadge(license) { 
  if (license) {
    return `
  ![badge](https://img.shields.io/badge/license-${license}-blue)
    `;
  } else {
    return '';
  }
}


function createLicenseLinkk(license) {
  if (license) {
  return `
  [${license}](https://choosealicense.com/licenses/${license})
    `;
  } else {
    return '';
  }
}


function createLicenseSec(license) {
  if (license) {
  return `
  ## [License](#Table-Of-Contents)

  ${createLicenseLinkk(license)}
    `;
  } else {
    return ' ';
  }
 }

function createLicenceContent(license) {
  if (license) {
  return `
  * [License](#license)
    `;
  } else {
    return ' ';
  }
 }


function generateMarkdown(info) {
  return `
  # ${info.title}
  
  ${renderLicenseBadge(info.license)}

  ## Table-Of-Contents

  * [Description](#description)
  * [StepsToInstall](#StepsToInstall)
  * [Usage](#usage)
  ${createLicenceContent(info.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## [Description](#Table-Of-Contents)

  ${info.repo}

  ${info.description}

  ${info.reason}

  ## [StepsToInstall](#Table-Of-Contents)

  ${info.StepsToInstall}

  ## [Usage](#Table-Of-Contents)
 
  ${createLicenseSec(info.license)}
  
  ## [Tests](#Table-Of-Contents)

  ${info.steps}

  ## [Questions](#Table-Of-Contents)

  Please contact me using the following links:

  [GitHub](https://github.com/${info.githubname})

  [Email: ${info.email}](mailto:${info.email})
`;
}

module.exports = generateMarkdown;
