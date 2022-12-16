const express=require('express')
const router=express.Router()

const { addNewUser, getUsers, getUser, updateUser, deleteUser, login } = require('../controllers/userController');

router.post('/newUser', addNewUser)

router.post('/login', login)

router.get('/getUsers',getUsers)

router.get('/:id',getUser)

router.put('/updateUser',updateUser)

router.delete('/deleteUser',deleteUser)

module.exports=router