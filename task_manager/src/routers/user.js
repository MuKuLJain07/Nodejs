const express = require('express');
const { model } = require('mongoose');
const User = require('../models/user');
const auth = require('../middleware/auth'); 
const multer = require('multer');

const router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// Users APIs
router.post('/users', async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({ user, token});
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
        res.send({ user , token });
    } catch (e) {
        console.error(e);
        res.status(400).send({error: 'Login failed! Check authentication credentials.'});
    }
})

router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token;   // remove only current token
        });

        await req.user.save();
        res.send({ message: 'Logout successful!' });
    } catch (e) {
        res.status(500).send({ error: 'Logout failed!' });
    }
});

router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = [];
        await req.user.save();
        res.send({ message: 'Logged out from all devices!' });
    } catch (e) {
        res.status(500).send({ error: 'Logout failed!' });
    }
});

router.get('/users/me', auth, async (req, res) => {
    res.send(req.user);
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

router.patch('/users/me', auth, async (req, res) => {
    const _id = req.user._id;
    const allowed_updates = ['name', 'email', 'password', 'age'];
    const updates = Object.keys(req.body);
    const isValidOperation = updates.every((update) => allowed_updates.includes(update));

    if(!isValidOperation) {
        return res.status(400).send({error: 'Invalid updates!'});
    }

    try {
        const user = await User.findById(_id);
        updates.forEach((update) => {
            req.user[update] = req.body[update];
        });
        await req.user.save();
        // const user = await User.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true});

        // if(!user) {
        //     return res.status(404).send();
        // }

        res.send(user);
    } catch (e) {
        res.status(500).send(e);
    }
})

router.delete('/users/me', auth, async (req, res) => {
    const _id = req.user._id;

    try {
        const user = await User.findByIdAndDelete(_id);
        // if(!user) {
        //     return res.status(404).send();
        // }

        // await req.user.remove(_id);
        res.send(req.user);
    } catch (e) {
        res.status(500).send(e);
    }
})


// Multer module
const upload = multer({
    dest: 'avatar',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        
        // cb(new Error('Only image is expected'));
        // cb(undefined, true);
        // cb(undefined, false);
    }
})
router.post('/users/me/avatar', upload.single('avatar'), (req, res) => {
    res.send();
});

module.exports = router;


const bcrypt = require('bcryptjs');
const myfunc = async () => {
    const password = 'Red12345!';
    const hashedPassword = await bcrypt.hash(password, 8);
    console.log(hashedPassword)  
}

myfunc()