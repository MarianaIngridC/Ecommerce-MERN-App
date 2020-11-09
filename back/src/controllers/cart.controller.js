const Cart = require('../models/cart');

exports.addItemToCart = (req, res) => {
    // search in the DB if the user has a cart created
    Cart.findOne({ user: req.user._id})
    .exec((error, cart) => {
        // if the user has already a cart then update iit
        if(error) return res.status(400).json({ error })
        if(cart){
            const product = req.body.cartItems.product
            const item = cart.cartItems.find(c => c.product == product)
            let condition, action;
            // if the item exist in the cart then update it by quantity
            if(item){
                condition = { 'user':req.user._id, 'cartItems.product': product}
                update= {'$set': {
                    'cartItems': {
                        ...req.body.cartItems,
                        quantity: item.quantity + req.body.cartItems.quantity
                    }
                } } 
            // if the item doesn`t exist in the cart then add a new item in the cart
            }else{
                condition = { user: req.user._id}
                update = {
                    '$push': {
                        'cartItems': req.body.cartItems
                    }
                }
            }
            Cart.findOneAndUpdate(condition, update)
            .exec((error, _cart) =>{
                if(error) return res.status(400).json({ error })
                if(_cart) return res.status(400).json({ cart: _cart })
            })
        } else {
            // if cart not exist then create a new cart
            
            const cart = new Cart({
                user: req.user._id,
                cartItems: req.body.cartItems
            })
            // save the product to the DB
            cart.save((error, cart) => {
                if(error) return res.status(400).json({ error })
                if(cart){
                    return res.status(201).json({ cart })
                } 
            })
        }
    })
   
}