const {Router} = require('express');
const router = Router()
const  womenC = require('../controls/Controlwomen')


router.get('/products', womenC.getProducts)


module.exports = router
