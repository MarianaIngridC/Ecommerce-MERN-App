const Product = require('../models/product')
const slugify = require('slugify')

exports.createProduct = (req, res) =>{
    // res.status(200).json({ file: req.files, body: req.body})
    // create a new product in DB with the data which comes from the request
    const { name, price, quantity, description, category, createdBy } = req.body;
    // ensure that there are pictures to add each one in the array and then pass it to the DB
    let productPictures = [];
    if(req.files.length > 0){
        productPictures = req.files.map(file => {
            return { img: file.filename}
        })
    }

    const product = new Product({
        name: name,
        slug: slugify(name),
        price,
        quantity,
        description,
        productPictures,
        category,
        createdBy: req.user._id 
    });
    product.save((error, product) => {
        if(error) return res.status(400).json({ error })
        if(product) return res.status(201).json({ product })
        
    })
}