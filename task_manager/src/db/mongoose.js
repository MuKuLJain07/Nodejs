const mongoose = require('mongoose');
const validator = require('validator');


const url = 'mongodb://127.0.0.1:27017/task-manager-api';
mongoose.connect(url)

const Task = mongoose.model('Task', {
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const Task1 = new Task({
    description: 'Learn SQL',
})

Task1.save().then(() => {
    console.log('Task saved:', Task1);
}).catch((error) => {
    console.log('Error:', error);
})