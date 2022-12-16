var users=require('../models/userSchema')


var userMiddleware=async(req,res,next)=>{
    try {
        var token=req.header['auth']
        if (!token){
        return res.json({message:'not authorized'})
        }else{
            var decoded=await jwt.verify(token, process.env.privatekey)
            var user= await users.findById(decoded.id)
            if (!user){
                return res.json({message:'not authorized'})
            } next()
        }
    } catch (error) {
        return res.json({message:error})
    }

}


module.exports=userMiddleware