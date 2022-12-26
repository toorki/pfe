const express=require('express')
const { addNewImage,getImages,getImage,updateImage,deleteImage,uploadFiles } = require('../controllers/imageController');
const userMiddleware = require('../middlewares/userMiddelwares');
const router=express.Router()


router.post("/newImage", userMiddleware, uploadFiles, addNewImage);

router.get('/getImages', getImages)

router.get('/:id',getImage)

router.put('/updateImage',userMiddleware, updateImage)

router.delete('/deleteImage',userMiddleware, deleteImage)

module.exports=router