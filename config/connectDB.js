const mongoose=require('mongoose')

const connectDB=async()=>{
    try {
        mongoose.connect(process.env.MONGO_URL,
            { useNewUrlParser: true, useUnifiedTopology: true }, err => {
            if (err) {
                console.log(err)
            } else {
                console.log('db is connected...')
            }
        });  
    } catch (error) {
        
    }
}

module.exports=connectDB