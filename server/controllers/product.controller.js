
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

    getOneProduct: (req, res) =>{
        Product.findOne({ _id: req.params.id })
            .then((oneProduct) => {
                console.log(oneProduct);
                res.json(oneProduct);
            })
            .catch((err) => res.status(400).json({ errMessage: err }));
    },

    deleteOneProduct: (req, res) => {
        Product.findOneAndDelete({ _id: req.params.id })
            .then((productToDelete) => {
                console.log(productToDelete);
                res.json(personToDelete)
            })
            .catch((err) => res.status(400).json({errMessage: err}))
    },

}