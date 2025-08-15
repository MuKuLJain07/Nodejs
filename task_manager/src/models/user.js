const mongoose = require('mongoose');
const validator = require('validator');


// const url = 'mongodb://127.0.0.1:27017/User-manager-api';
// mongoose.connect(url)

const User = mongoose.model('User', {
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid');
            }
        }
    },
    password: {
        type: String,
        trim: true,
        required: true,
        minlength: 7,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"');
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value){
            if(value < 0){
                throw new Error('Age must be a positive number');
            }
        }
    }
})

module.exports = User;


// const User1 = new User({
//     description: 'Learn SQL',
// })

// User1.save().then(() => {
//     console.log('User saved:', User1);
// }).catch((error) => {
//     console.log('Error:', error);
// })