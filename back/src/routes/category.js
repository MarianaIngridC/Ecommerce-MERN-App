const router = require('express').Router();
const { adminMiddleware, userMiddleware, requireSignin } = require('../common-middlewares');
const { addCategory, getCategory } = require('../controllers/category.controller');
const multer = require('multer');
const shortid = require('shortid');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(path.dirname(__dirname), 'uploads/'))
    },
    filename: function(req, file, cb){
        cb(null, shortid.generate() + '-' + file.originalname)
    }
})
const upload = multer({ storage })


router.post('/category/create', requireSignin, adminMiddleware,upload.single('categoryImage'), addCategory)

router.get('/category/getcategory', requireSignin, userMiddleware, getCategory)

module.exports = router;