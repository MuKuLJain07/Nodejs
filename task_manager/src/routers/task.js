const express = require('express');
const { model } = require('mongoose');
const Task = require('../models/task');


const router = express.Router();

// Task APIs
router.post('/tasks', async (req, res) => {
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

router.get('/tasks', async (req, res) => {

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

router.get('/tasks/:id', async (req, res) => {
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

router.patch('/tasks/:id', async (req, res) => {
    const _id = req.params.id;
    const allowed_updates = ['description', 'completed'];
    const updates = Object.keys(req.body);
    const isValidOperation = updates.every((update) => allowed_updates.includes(update));

    if(!isValidOperation) {
        return res.status(400).send({error: 'Invalid updates!'});
    }

    try {
        const task = await Task.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true});

        if(!task) {
            return res.status(404).send();
        }

        res.send(task);
    } catch {
        res.status(500).send(e);
    }
})

router.delete('/tasks/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const task = await Task.findByIdAndDelete(_id);
        if(!task) {
            return res.status(404).send();
        }
        res.send(task);
    } catch (e) {
        res.status(500).send(e);
    }
})


module.exports = router;