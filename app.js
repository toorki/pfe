var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var dotenv = require('dotenv');
var cors=require('cors')
dotenv.config();

mongoose.set('strictQuery', true);
 
var fs = require('fs');
var path = require('path');
require('dotenv/config');



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
 
app.set("view engine", "ejs");

//var multer = require('multer');
 
//var storage = multer.diskStorage({
   // destination: (_req, _file, cb) => {
     //   cb(null, './public/uploads')
    //},
    //filename: (_req, file, cb) => {
      //  cb(null, file.fieldname + '-' + Date.now())
    //}
//});


//var upload = multer({ storage: storage });

app.use(express.json())
app.use(cors())

app.use('/imageAPI',require('./Routes/imageRouter'))
app.use('/userAPI',require('./Routes/userRouter'))

var imgModel = require('./models/imageSchema');
var connectDB = require('./config/connectDB');
connectDB()
app.get('/', (_req, res) => {
    imgModel.find({}, (err, items) => {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred', err);
        }
        else {
            res.render('imagesPage', { items: items });
        }
    });
});

app.post('/', (req, res, next) => {
 

    var obj = {
        name: req.body.name,
        desc: req.body.desc,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
    imgModel.create(obj, (err, _item) => {
        if (err) {
            console.log(err);
        }
        else {
            res.redirect('/');
        }
    });
});

var port = process.env.PORT || '6000'
app.listen(port, err => {
    if (err)
        throw err
    console.log('Server is running on port', port)
})