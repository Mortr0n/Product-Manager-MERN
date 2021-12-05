
const Product = require('../models/product.model');


module.exports = {
// test controller
    index: (req, res) => {
        res.json({ message: "Hello World"});
    },

    createProduct: (req, res) => {
        const { title, price, description } = req.body;
        Product.create({
            title,
            price,
            description,
        })
        .then((newProduct) => {
            console.log(newProduct);
            res.json(newProduct);
        })
        .catch((err) => res.status(400).json({ errMessage: err }));
    },
    
    findAllProducts: (req, res) => {
        Product.find()
        .then((allProducts) => {
            console.log(allProducts);
            res.json(allProducts);
        })
        .catch((err) => console.log(err));
    },

}