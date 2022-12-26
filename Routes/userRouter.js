const express=require('express')
const router=express.Router()
const userMiddleware = require('../middlewares/userMiddelwares');
const { addNewUser, getUsers, getUser, updateUser, deleteUser, login } = require('../controllers/userController');

router.post('/newUser', addNewUser)

router.post('/login', login)

router.get('/getUsers', getUsers)

router.get('/:id', getUser)

router.put('/updateUser', userMiddleware, updateUser)

router.delete('/deleteUser', userMiddleware, deleteUser)

module.exports=router