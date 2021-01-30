const express = require('express')

module.exports = function (app) {


    const openApi = express.Router()
    app.use('/oapi', openApi)

    const ProductsService = require('../api/products/productsService')
    ProductsService.register(openApi, '/products')
}