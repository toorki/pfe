const mongoose=require('mongoose')
const {Schema}=mongoose

var userSchema= new Schema({
    fullName:String,
    email:String,
    password:String,
    //listOfImages:[{type:Schema.type.ObjectId, ref:'images'}]
})

module.exports = mongoose.model('users', userSchema);