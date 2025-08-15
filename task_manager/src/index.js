const express = require('express');
require('./db/mongoose');

const User = require('./models/user');
const Task = require('./models/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Users APIs
app.post('/users', async (req, res) => {
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

app.get('/users', async (req, res) => {

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

app.get('/users/:id', async (req, res) => {
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

app.patch('/users/:id', async (req, res) => {
    const _id = req.params.id;
    const allowed_updates = ['name', 'email', 'password'];

    try {
        const user = await User.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true});

        if(!user) {
            return res.status(404).send();
        }

        res.send(user);
    } catch {
        res.status(500).send(e);
    }

})

// Task APIs
app.post('/tasks', async (req, res) => {
    const task = new Task(req.body);
    
    try {
        await task.save();
        res.status(201).send(task);
    } catch (e) {
        res.status(400).send(e);
    }

    // task.save().then(() => {
    //     res.status(201).send("Task Saved")
    // }).catch((error) => {
    //     res.status(400).send("Error:", error);
    // })
})

app.get('/tasks', async (req, res) => {

    try {
        const task = await Task.find({});
        res.send(task);
    } catch (e) {
        res.status(500).send(e);
    }

    // Task.find({}).then((task) => {
    //     res.status(201).send(task)
    // }).catch((error) => {
    //     res.status(500).send();
    // })
})

app.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const task = await Task.findById(_id);
        if(!task) {
            return res.status(404).send();
        }
        res.send(task);
    } catch (e) {
        res.status(500).send(e);
    }

    // Task.findById(_id).then((task) => {
    //     res.send(task)
    // }).catch((error) => {
    //     res.status(500).send();
    // })
})


app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
})