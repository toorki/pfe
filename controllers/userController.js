var users = require('../models/userSchema')
var bcrypt = require('bcrypt');
var saltRounds = 10;

var addNewUser=async(req,res)=>{
    try {
        var {email, password, fullName} = req.body
        var user = await users.findOne({email, fullName})
        if (user){
            return res.json({message:'user alredy exists'})
        } else{
            var hashed=await bcrypt.hash(password, saltRounds)
            var newUser=new users({...req.body,password:hashed})
            await newUser.save()
            return res.json({message:'user added successfully',newUser})
        }
    } catch (error) {
        return res.json({message:error})
    }
}

var getUsers=async(req,res)=>{
    console.log("here")
    try {
        var allUsers=await users.find()   
        return res.json({message:'all users list', allUsers})
    } catch (error) {
        return res.json({message:error})
    }
}

var getUser=async(req,res)=>{
    try {
        var users=await users.findOne(req.params.id)   
        return res.json({message:'the user you seek', users})
    } catch (error) {
        return res.json({message:error})
    }
}

var updateUser=async(req,res)=>{
    try {
        var theUser=await images.findByIdAndUpdate(req.params.id,{$set:{...req.body}},{new:true})
        return res.json({message:'the user updated seccessfully', theUser})
    } catch (error) {
        return res.json({message:error})
    }
}

var deleteUser=async(req,res)=>{
    try {
        await users.findByIdAndDelete(req.params.id)
        return res.json({message:'the user deleted seccessfully'})
    } catch (error) {
        return res.json({message:error})
    }
}

var login=async(req,res)=>{
    try {
        var{email,password}=req.body
        var user=await users.findOne({email,FullName})
        if(!user){
            return res.json({message:'password or email are incorrect! please try again'})
        } else{
            var match= await bcrypt.compare(password, hash,)
        } if (!match){
            return res.json({message:'password or email are incorrect! please try again'})
        }else{
            var token = jwt.sign({ id: user._id }, process.env.privateKey);
            return res.json({message:'you are logged in', userId:user._id,token})
        }

    } catch (error) {
        return res.json({message:error})
    }
}

module.exports={addNewUser,getUsers,getUser,updateUser,deleteUser,login}