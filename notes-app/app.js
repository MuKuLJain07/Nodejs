// modules
const yargs = require('yargs')
const notes = require('./notes')
const chalk = require('chalk')


// yarg command
yargs.command({
    command: 'add',
    description: 'Add a new note',
    builder: {
        title: {
            describe: "Notes title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Notes body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log("Title:", argv['title'])
        console.log("Body:", argv['body'])
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