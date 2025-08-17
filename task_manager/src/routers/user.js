const express = require('express');
const { model } = require('mongoose');
const User = require('../models/user');

const router = express.Router();

// Users APIs
router.post('/users', async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        res.status(201).send(user);
    } catch (e) {
        res.status(400).send(e);
    }

    // user.save().then(() => {
    //     res.status(201).send('user saved');
    // }).catch((error) => {
    //     res.status(400).send('Error:', error);
    // })
})

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthToken();
        res.send(user);
    } catch (e) {
        console.error(e);
        res.status(400).send({error: 'Login failed! Check authentication credentials.'});
    }
})

router.get('/users', async (req, res) => {

    try {
        const user = await User.find({});
        res.send(user);
    } catch (e) {
        res.status(500).send(e);
    }

    // User.find({}).then((user) => {
    //     res.status(201).send(user);
    // }).catch((error) => {
    //     res.status(500).send();
    // })
})

router.get('/users/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const user = await User.findById(_id);
        if(!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (e) {
        res.status(500).send(e);
    }

    // User.findById(_id).then((user) => {
    //     if(!user) {
    //         return res.status(404).send();
    //     }

    //     res.send(user);
    // }).catch((error) => {
    //     res.status(500).send();
    // })
})

router.patch('/users/:id', async (req, res) => {
    const _id = req.params.id;
    const allowed_updates = ['name', 'email', 'password', 'age'];
    const updates = Object.keys(req.body);
    const isValidOperation = updates.every((update) => allowed_updates.includes(update));

    if(!isValidOperation) {
        return res.status(400).send({error: 'Invalid updates!'});
    }

    try {
        const user = await User.findById(_id);
        updates.forEach((update) => {
            user[update] = req.body[update];
        });
        await user.save();
        // const user = await User.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true});

        if(!user) {
            return res.status(404).send();
        }

        res.send(user);
    } catch (e) {
        res.status(500).send(e);
    }
})

router.delete('/users/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const user = await User.findByIdAndDelete(_id);
        if(!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (e) {
        res.status(500).send(e);
    }
})



module.exports = router;



const bcrypt = require('bcryptjs');
const myfunc = async () => {
    const password = 'Red12345!';
    const hashedPassword = await bcrypt.hash(password, 8);
    console.log(hashedPassword)  
}

myfunc()