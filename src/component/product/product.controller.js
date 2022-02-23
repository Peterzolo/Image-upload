
const Aws = require("aws-sdk");
const Product = require("./product.model");

const s3 = new Aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET,
});

exports.createProduct = async (req, res) => {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: req.file.originalname,
    Body: req.file.buffer,
    ACL: "public-read-write",
    ContentType: "image/jpeg",
  };

  s3.upload(params, (error, data) => {
    if (error) {
      res.status(500).send({ err: error });
    }

    const product = new Product({
      name: req.body.name,
      price: req.body.price,
      productImage: data.Location,
    });

    product
      .save()
      .then((result) => {
        res.status(200).send({
          _id: result._id,
          name: result.name,
          price: result.price,
          productImage: data.Location,
        });
      })
      .catch((err) => {
        res.send({ message: err });
      });
  });
};
