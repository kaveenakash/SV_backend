const express = require('express')
const router = express.Router()

const {googlelogin,renewAccessToken,protected,auth} = require('../controllers/controller')


router.post('/googlelogin',googlelogin);
router.post('/renewAccessToken',renewAccessToken)
router.post('/protected',auth,protected)


module.exports = router