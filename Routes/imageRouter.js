const express=require('express')
const { addNewImage,getImages,getImage,updateImage,deleteImage,uploadFiles } = require('../controllers/imageController')
const router=express.Router()


router.post("/newImage", uploadFiles, addNewImage);

router.get('/getImages', getImages)

router.get('/:id',getImage)

router.put('/updateImage', updateImage)

router.delete('/deleteImage', deleteImage)

module.exports=router