const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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

// userSchema.pre('save', async function (next) {
//     const user = this;

//     if (user.isModified('password')) {
//         user.password = await bcrypt.hash(user.password, 8);
//     }
    
//     next();
// })

// const User = mongoose.model('User', userSchema)
const Task = mongoose.model('Task', userSchema)


module.exports = Task;