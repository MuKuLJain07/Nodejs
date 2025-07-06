// modules
const yargs = require('yargs')
const notes = require('./notes')
const chalk = require('chalk')

// variables
// const command = yargs.argv['action']

// if (command == "add") {
//     console.log(chalk.green("Success!!"))
// } else if (command == "remove") {
//     console.log(chalk.red("Success!!"))
// } else if (command == "read") {
//     console.log(chalk.red("Success!!"))
// } else if (command == "list") {
//     console.log(chalk.red("Success!!"))
// }
// else {
//     console.log(chalk.red("No valid action is given"))
// }


// yarg command
yargs.command({
    command: 'add',
    description: 'Add a new note',
    handler: function () {
        console.log("added")
    }
})
yargs.command({
    command: 'remove',
    description: 'remove a new note',
    handler: function () {
        console.log("removed")
    }
})
yargs.command({
    command: 'read',
    description: 'Read your notes',
    handler: function () {
        console.log("Reading....")
    }
})
yargs.command({
    command: 'list',
    description: 'List your notes',
    handler: function () {
        console.log("Listing..")
    }
})

yargs.parse();




// run app
// node "m:\Node.js\notes-app\app.js" --action=add