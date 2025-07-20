// modules
const notes = require('./notes')
const yargs = require('yargs')
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
        notes.addNotes(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    description: 'remove a new note',
        builder: {
        title: {
            describe: "Notes title",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNotes(argv.title)
    }
})

yargs.command({
    command: 'read',
    description: 'Read your notes',
    handler: function (argv) {
        notes.readNotes(argv.title)
    }
})

yargs.command({
    command: 'list',
    description: 'List your notes',
    handler: function () {
        notes.getNotes()
    }
})

yargs.parse();




// run app
// node "m:\Node.js\notes-app\app.js" --action=add
