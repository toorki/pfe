var images=require('../models/imageSchema')
var users=require('../models/userSchema')
var multer = require("multer"); 
var path = require('path')


var addNewImage = async(req, res)=>{
    try {
        const newFiles = [];

    for (let i = 0; i < req.files.length; i++) {
      newFiles.push(req.files[i].path);
    }
        const data={
            name:req.body.name,
            description:req.body.description,
            files:newFiles,
            userId:req.body.userId
        }
        var newImage= new images(data)
        await newImage.save()
        await users.findByIdAndUpdate(req.body.id, {$push:{listOfImages:newImage}})
        return res.json({message:'image uploaded successfully',newImage})
    } catch (error) {
        return res.json({message:error})
    }
}

var getImages = async(req,res)=>{
    console.log(req.body)      

    try {
        var allImages= await images.find()
  return res.json({message:'all images uploaded', allImages})
    } catch (error) {
        return res.json({message:error})
    }
}

var getImage= async(req,res)=>{
    try {
        var theImage=await images.findById(req.params.id)
        return res.json({message:'the image you seek', theImage})
    } catch (error) {
        return res.json({message:error})
    }
}

var updateImage=async(req,res)=>{
    try {
        var theImage=await images.findByIdAndUpdate(req.params.id,{$set:{...req.body}},{new:true})
        return res.json({message:'the image updated seccessfully', theImage})
    } catch (error) {
        return res.json({message:error})
    }
}

var deleteImage=async(req,res)=>{
    try {
        await images.findByIdAndDelete(req.params.id)
        return res.json({message:'the image deleted seccessfully'})
    } catch (error) {
        return res.json({message:error})
    }
}
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/uploads");
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
 });
  
    uploadFiles= multer({
    storage: storage,
    //limits: { fileSize: "10000" },
    fileFilter: (req, file, cb) => {
      const fileTypes = /jpeg|jpg|png|pdf|doc|txt/;
      const mimeType = fileTypes.test(file.mimetype);
      const extname = fileTypes.test(path.extname(file.originalname));
  
      if (mimeType && extname) {
        return cb(null, true);
      }
      cb("Give proper files formate to upload");
    },
  }).array("files");

module.exports={addNewImage,getImages,getImage,updateImage,deleteImage,uploadFiles}