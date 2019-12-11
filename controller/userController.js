const productService = require('./../service/product');

const createProduct = async (req, res, next) => {
    const product = req.body;
    if(product.productName && product.category && product.price) {
        const result = await productService.create(product);
        res.status(201).send({
            message: 'Product added successfully.'
        });
    } else {
        res.status(400).send({
            message: 'Invalid product payload.'
        });
    }
}