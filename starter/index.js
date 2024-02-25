const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// Array to store team members
const teamMembers = [];

// Function to prompt for manager information
function promptManager() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter the manager's name:",
    },
    {
      type: "input",
      name: "id",
      message: "Enter the manager's ID:",
    },
    {
      type: "input",
      name: "email",
      message: "Enter the manager's email:",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Enter the manager's office number:",
    },
  ]);
}

// Function to prompt for engineer information
function promptEngineer() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter the engineer's name:",
    },
    {
      type: "input",
      name: "id",
      message: "Enter the engineer's ID:",
    },
    {
      type: "input",
      name: "email",
      message: "Enter the engineer's email:",
    },
    {
      type: "input",
      name: "github",
      message: "Enter the engineer's GitHub username:",
    },
  ]);
}

// Function to prompt for intern information
function promptIntern() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter the intern's name:",
    },
    {
      type: "input",
      name: "id",
      message: "Enter the intern's ID:",
    },
    {
      type: "input",
      name: "email",
      message: "Enter the intern's email:",
    },
    {
      type: "input",
      name: "school",
      message: "Enter the intern's school:",
    },
  ]);
}

// Function to prompt for additional team members
function promptAdditionalMember() {
  return inquirer.prompt([
    {
      type: "list",
      name: "role",
      message: "Select the role of the team member:",
      choices: ["Engineer", "Intern"],
    },
  ]);
}

// Function to gather information about the development team members
async function gatherTeamInformation() {
  // Prompt for manager information
  const managerInfo = await promptManager();
  const manager = new Manager(managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.officeNumber);
  teamMembers.push(manager);

  let addMoreMembers = true;

  // Prompt for additional team members
  while (addMoreMembers) {
    const additionalMemberInfo = await promptAdditionalMember();

    if (additionalMemberInfo.role === "Engineer") {
      const engineerInfo = await promptEngineer();
      const engineer = new Engineer(engineerInfo.name, engineerInfo.id, engineerInfo.email, engineerInfo.github);
      teamMembers.push(engineer);
    } else if (additionalMemberInfo.role === "Intern") {
      const internInfo = await promptIntern();
      const intern = new Intern(internInfo.name, internInfo.id, internInfo.email, internInfo.school);
      teamMembers.push(intern);
    }

    // Prompt to add more team members
    const addMoreResponse = await inquirer.prompt([
      {
        type: "confirm",
        name: "addMore",
        message: "Do you want to add more team members?",
      },
    ]);

    addMoreMembers = addMoreResponse.addMore;
  }
}

// Function to render the HTML file
function renderHTML() {
  const renderedHTML = render(teamMembers);
  fs.writeFileSync(outputPath, renderedHTML);
  console.log(`HTML file successfully generated at ${outputPath}`);
}

// Main function to execute the program
async function init() {
  try {
    // Gather information about the development team members
    await gatherTeamInformation();

    // Render the HTML file
    renderHTML();
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// Call the main function to start the program
init();
