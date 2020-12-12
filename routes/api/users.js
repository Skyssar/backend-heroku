const router = require('express').Router();
const { User } = require('../../models');
const userController = require ('../../controllers/UserController.js');
const bcrypt = require('bcryptjs');

router.get('/', async(req, res) =>{
    const users = await User.findAll();
    res.status(200).json(users);
});

router.post('/register', async (req, res) =>{
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await User.create(req.body);
    res.status(200).json(user);
});

router.post('/login', userController.login);
// router.post('/register', userController.register);
// router.get('/list', userController.list);
module.exports = router;