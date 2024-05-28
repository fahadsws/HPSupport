const express = require('express');
const router = express.Router();
const product = require('../Controller/AllGetAPi/Product');
const addcomplaine = require('../Controller/AllPostApi/AddComplaine');
const complaine = require('../Controller/AllGetAPi/Compaines');
const history = require('../Controller/AllGetAPi/History');
const detail = require('../Controller/AllGetAPi/Detail');


const city = require('../Controller/AllGetAPi/City');
const shop = require('../Controller/AllPostApi/AddShop');
const status = require('../Controller/AllGetAPi/UpadteStatus');
const user = require('../Controller/AllGetAPi/User');
const shops = require('../Controller/AllGetAPi/Shops');

const multerConfig = require('../Middelware/Uplods');
const multerConfigshop = require('../Middelware/ShopUplods');































router.get(`/product`, product);
router.post('/addcomplaine', multerConfig, addcomplaine);
router.get(`/compalines/:id`, complaine);
router.get(`/history/:id`, history);
router.get(`/detail/:id`, detail);
router.get(`/city`, city);
router.post(`/addshop`,multerConfigshop, shop);
router.put(`/status/:id`, status);
router.get(`/user/:id`, user);
router.get(`/shops/:id`, shops);





























module.exports = router;
