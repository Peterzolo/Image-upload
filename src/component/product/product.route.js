const express = require("express");
const productRouter = express.Router();

const productController = require("./product.controller");
const { upload } = require("./upload/fileUpload");

productRouter
  .route("/create")
  .post(upload.single("productimage"), productController.createProduct);

module.exports = productRouter;
