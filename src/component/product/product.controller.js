const multer = require('multer')              // multer will be used to handle the form data.
const Aws = require('aws-sdk')   
const Product = require('./product.model');


const storage = multer.memoryStorage({
    destination: function (req, file, cb) {
        cb(null, '')
    }
})


const filefilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}




exports.createProduct = async (req, res) =>{
    res.send('request works')
}