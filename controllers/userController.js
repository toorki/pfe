var users = require('../models/userSchema')
var images = require('../models/imageSchema')
var bcrypt = require('bcrypt');
var saltRounds = 10;
var jwt = require('jsonwebtoken')

var addNewUser=async(req,res)=>{
    try {
        var {email, password, fullName} = req.body
        var user = await users.findOne({email, fullName})
        if (user){
            return res.status(400).json({message:'user alredy exists'})
        } else{
            var hashed=await bcrypt.hash(password, saltRounds)
            var newUser=new users({...req.body,password:hashed})
            await newUser.save()
            return res.status(200).json({message:'user added successfully',newUser})
        }
    } catch (error) {
        return res.status(400).json({message:error})
    }
}

var getUsers=async(req,res)=>{
    try {
        var allUsers=await users.find().populate("listOfFiles")   
        return res.status(200).json({message:'all users list', allUsers})
    } catch (error) {
        return res.status(400).json({message:error})
    }
}

var getUser=async(req,res)=>{
    try {
        var user = await users.findById(req.params.id).select("-password")
        return res.status(200).json({message:'the user you seek', user})
    } catch (error) {
        return res.status(400).json({message:error})
    }
}

var updateUser=async(req,res)=>{
    try {
        var theUser=await images.findByIdAndUpdate(req.params.id,{$set:{...req.body}},{new:true})
        return res.status(200).json({message:'the user updated seccessfully', theUser})
    } catch (error) {
        return res.status(400).json({message:error})
    }
}

var deleteUser=async(req,res)=>{
    try {
        await users.findByIdAndDelete(req.params.id)
        return res.status(200).json({message:'the user deleted seccessfully'})
    } catch (error) {
        return res.status(400).json({message:error})
    }
}

var login=async(req,res)=>{
    try {
        var{email,password}=req.body
        var user=await users.findOne({email})
        if(!user){
            return res.status(400).json({message:'password or email are incorrect! please try again'})
        } else{
            var match= await bcrypt.compare(password, user.password)
        } if (!match){
            return res.status(400).json({message:'password or email are incorrect! please try again'})
        }else{
            var token = jwt.sign({ id: user._id }, process.env.privateKey);
            return res.status(200).json({message:'you are loged in', userId:user._id,token})
        }
        
    } catch (error) {
        return res.status(400).json({message:error})
    }
}

module.exports={addNewUser,getUsers,getUser,updateUser,deleteUser,login}