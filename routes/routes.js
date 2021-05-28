const express = require('express')
const router = express.Router()

const {googlelogin,renewAccessToken,protected,auth} = require('../controllers/controller')


router.post('/googlelogin',googlelogin);
router.post('/renewAccessToken',renewAccessToken)
router.post('/protected',auth,protected)
router.get("/data",(req,res) =>{
    res.status(200).json({
        message:"Success"
    })
})

module.exports = router