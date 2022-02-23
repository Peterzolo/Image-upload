const express = require("express");
const productRouter = express.Router();

const productController = require("./product.controller");

productRouter.route("/create").post(productController.createProduct);

module.exports = productRouter;
