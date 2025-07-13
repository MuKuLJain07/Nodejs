const fs = require('fs')
const chalk = require('chalk')

const addNotes = function(title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note) {
        return note.title === title
    })

    if(duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log(chalk.green("New note added!"))
    }
    else {
        console.log(chalk.red("Note title already exists!"))
    }
}

const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes = function() {
    try {
        const databuffer = fs.readFileSync('notes.json')
        const dataJSON = databuffer.toString()
        return JSON.parse(dataJSON)
    } 
    catch (e) {
        return []
    }
}

const getNotes = function() {
    const notes = loadNotes()
    console.log(notes)
}

const removeNotes = function(title) {
    const notes = loadNotes()
    let newArray = notes.filter(function(note){
        return note.title !== title
    });

    if(newArray.length === notes.length) {
        console.log(chalk.red("No note found with that title!"))
    }
    else {
        saveNotes(newArray)
        console.log(chalk.green("Note removed!"))
    }
}

const readNotes = function(title) {
    const notes = loadNotes()
    const findNote = notes.find((note) => note.title === title)

    if(!findNote) {
        console.log(chalk.red("No note found with that title!"))
    } else {
        console.log(chalk.blue.inverse(findNote.title))
        console.log(findNote.body)
    }
}

module.exports = {
    addNotes,
    getNotes,
    removeNotes,
    readNotes
}