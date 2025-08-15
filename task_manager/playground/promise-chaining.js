// promise chaining aiming for:
// 1. Delete task by id
// 2. display all the tasks if incompleted

require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndDelete('6899d79790276dd9d6476344').then((task) => {
    console.log('Deleted Task:', task);
    return Task.countDocuments({ completed: false });
}).then((result) => {
    console.log('Incomplete Tasks Count:', result);
}).catch((e) => {
    console.log('Error:', e);
})