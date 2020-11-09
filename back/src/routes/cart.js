const router = require('express').Router();
const { userMiddleware, requireSignin } = require('../common-middlewares');
const { addItemToCart, getCart } = require('../controllers/cart.controller');


router.post('/user/cart/addtocart', requireSignin, userMiddleware, addItemToCart)
// router.get('/cart/getcategory', requireSignin, userMiddleware, getCart)

module.exports = router;