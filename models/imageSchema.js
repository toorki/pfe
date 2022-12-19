const mongoose=require('mongoose')
const {Schema}=mongoose

    var imageSchema = new Schema({
        name: String,
        description: String,
    
            files: [{type: String}],
            files1:[{type: String}],
            
        userId:[{type:Schema.Types.ObjectId, ref:'users'}],
    });
    
     
    module.exports = mongoose.model('Image', imageSchema);