const productRoute = require("./product/product.route");
const productService = require("./product/product.service");
const productModel = require("./product/product.model");

const componentModule = {
    productModule : {
        route : productRoute,
        service : productService,
        model : productModel
    }
}


module.exports = componentModule;