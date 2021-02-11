  // QUESTIONS
  const questions = [
    {
        type: "input",
        message: "What is the employees name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the employees id?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the employees email?",
        name: "email"
    },
    {
        type: "list",
        message: "What is the employees role?",
        name: "employeeRole",
        choices: ["Manager","Engineer","Intern"]
    },
    {
        type: "input",
        message: "What is your office number?",
        name: "officeNumber",
        when: (answers) => answers.employeeRole === "Manager"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "userName",
        when: (answers) => answers.employeeRole === "Engineer"
    },
    {
        type: "input",
        message: "What school did you attend?",
        name: "school",
        when: (answers) => answers.employeeRole === "Intern"
    },
    {
        type: "confirm",
        message: "Would you like to add another employee?",
        name: "continue",
    }
];

module.exports = questions;