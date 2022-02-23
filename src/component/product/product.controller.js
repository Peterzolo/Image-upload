const multer = require("multer"); 
const Aws = require("aws-sdk");
const Product = require("./product.model");

const storage = multer.memoryStorage({
  destination: function (req, file, cb) {
    cb(null, "");
  },
});

const filefilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/jpg") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage: storage, fileFilter: filefilter });

const s3 = new Aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET,
});

exports.createProduct = async (req, res) => {

  
  

  

}

