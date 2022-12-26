const mongoose=require('mongoose')
const {Schema}=mongoose

var userSchema= new Schema({
    fullName:String,
    email:String,
    password:String,
    role:{type: Number, default:0},
    listOfFiles:{type: Schema.Types.ObjectId, ref:'Image'}
})

module.exports = mongoose.model('users', userSchema);